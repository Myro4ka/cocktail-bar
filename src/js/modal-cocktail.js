import {
  modalCocktailRef,
  backdropCocktailRef,
  modalIngredientRef,
} from './modal-cocktail/refs/refs';
import { getCocktailById, getIngredientByName } from './modal-cocktail/api/api';
import { getIngredientByID } from './modal-ingredient/api/api';
import {
  renderList,
  renderModalCocktail,
} from './modal-cocktail/render/render';

import { openIngredientModal } from './modal-ingredient';
import {
  addCocktailBtn,
  removeCocktailBtn,
} from './modal-cocktail/render/render';
import { getCocktails, setCoctail, deleteCocktail } from './auth/api';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './auth/api/auth';

export async function onLearnMoreClick(activeBtn) {
  if (
    !activeBtn.classList.contains('btn__learn') &&
    !activeBtn.classList.contains('btn__learn--ingredient')
  )
    return;
  try {
    if (activeBtn.classList.contains('btn__learn--cocktail')) {
      const id = activeBtn.dataset.cocktailid;
      const response = await getCocktailById(id);
      openCocktailModal(response);
    }
    if (activeBtn.classList.contains('btn__learn--ingredient')) {
      const id = activeBtn.dataset.ingredientid;
      const response = await getIngredientByID(id);
      openIngredientModal(response);
    }
  } catch (error) {
    console.log(error);
  }
}

async function openCocktailModal(response) {
  modalCocktailRef.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', onEscKeyPress);

  let cocktailTitle = response.drinks[0].strDrink;
  let cocktailInstructions = response.drinks[0].strInstructions;
  let cocktailImage = response.drinks[0].strDrinkThumb;

  let list = makeList(response);
  let listMarkup = renderList(list.resultList, list.modIngredientsList);
  let cocktailId = response.drinks[0].idDrink;

  getCocktails().then(response => {
    if (response) {
      const arrayFavorId = Object.values(response);
      const button = arrayFavorId.includes(cocktailId)
        ? removeCocktailBtn
        : addCocktailBtn;

      insertMarkup(
        cocktailId,
        cocktailTitle,
        cocktailInstructions,
        cocktailImage,
        listMarkup,
        button
      );

      const modalCloseCocktailBtn = document.querySelector(
        '.js-modal-close-cocktail'
      );
      modalCloseCocktailBtn.addEventListener('click', onCloseModalCocktail);

      const modalCocktailList = document.querySelector(
        '.js-modal-list-ingredients'
      );
      modalCocktailList.addEventListener('click', onListClick);

      const modalAddCocktailBtn = document.querySelector(
        '.modal__button--add-cocktail'
      );
      modalAddCocktailBtn.addEventListener('click', onAddButtonClick);
    } else {
      //addMarkup(data, mainMarkupPlace);
    }
  });
}

function onAddButtonClick(event) {
  onAuthStateChanged(auth, user => {
    if (!user) {
      // Notiflix
      return;
    }
    console.log('user :>> ', user.uid);

    const idDrink =
      event.target.closest('.js-modal-cocktail').dataset.cocktailid;

    if (event.target.classList.contains('modal__button--add-cocktail')) {
      event.target.textContent = 'Remove from favorite';
      event.target.classList.remove('modal__button--add-cocktail');
      event.target.classList.add('modal__button--remove-cocktail');

      setCoctail(idDrink);
    } else if (
      event.target.classList.contains('modal__button--remove-cocktail')
    ) {
      event.target.textContent = 'Add to favorite';
      event.target.classList.remove('modal__button--remove-cocktail');
      event.target.classList.add('modal__button--add-cocktail');

      deleteCocktail(idDrink);
    }
  });
}

async function onListClick(event) {
  if (!event.target.classList.contains('js-modal-link')) return;
  let el = event.target.closest('[data-ingredient]');
  let dataIngredient = el.dataset.ingredient;
  const response = await getIngredientByName(dataIngredient);

  openIngredientModal(response);
}

export function makeList(cocktail) {
  let quantityList = [];
  let ingredientsList = [];
  let resultList = [];
  for (let key in cocktail.drinks[0]) {
    if (key.includes('strMeasure')) {
      quantityList.push(cocktail.drinks[0][key]);
    }

    if (key.includes('strIngredient')) {
      ingredientsList.push(cocktail.drinks[0][key]);
    }
  }
  const modIngredientsList = ingredientsList.filter(Boolean);
  const modQuantityList = quantityList.filter(Boolean);
  let length;
  if (modQuantityList.length >= modIngredientsList.length) {
    length = modQuantityList.length;
  } else {
    length = modIngredientsList.length;
  }

  for (let i = 0; i < length; i += 1) {
    let a = !modIngredientsList[i] ? '' : modIngredientsList[i];
    let b = !modQuantityList[i] ? '' : modQuantityList[i];
    a = a.replace(/\n/g, '');
    b = b.replace(/\n/g, '');
    resultList.push(b + ' ' + a);
  }

  return { resultList: resultList, modIngredientsList: modIngredientsList };
}

export function onEscKeyPress(event) {
  if (
    event.code === 'Escape' &&
    !modalIngredientRef.classList.contains('is-hidden')
  ) {
    modalIngredientRef.classList.add('is-hidden');
    return;
  }
  if (
    event.code === 'Escape' &&
    !modalCocktailRef.classList.contains('is-hidden')
  ) {
    modalCocktailRef.classList.add('is-hidden');
    document.body.style.overflow = 'visible';

    return;
  }
}

export async function insertMarkup(id, name, title, instructions, image, list) {
  try {
    backdropCocktailRef.innerHTML = renderModalCocktail(
      id,
      name,
      title,
      instructions,
      image,
      list
    );
  } catch (error) {
    console.log(error.message);
  }
}

function onCloseModalIngredient() {
  modalIngredientRef.classList.add('is-hidden');
}

function onCloseModalCocktail() {
  modalCocktailRef.classList.add('is-hidden');

  document.body.style.overflow = 'visible';
}

backdropCocktailRef.addEventListener('click', event => {
  if (
    event.target.classList.contains('js-modal-close-cocktail') ||
    event.target.classList.contains('js-modal-icon-cocktail') ||
    event.target.classList.contains('js-backdrop-cocktail')
  ) {
    onCloseModalCocktail();
  }
  if (
    event.target.classList.contains('modal__close-button-ingredient') ||
    event.target.classList.contains('modal__icon--ingredient') ||
    event.target.classList.contains('js-backdrop-ingredient')
  ) {
    onCloseModalIngredient();
    window.removeEventListener('keydown', onEscKeyPress);
  }
});
