import {
  modalCocktailRef,
  backdropCocktailRef,
  modalIngredientRef,
  backdropIngredientRef,
} from './modal-cocktail/refs/refs';

import { getCocktailById, getIngredientByName } from './modal-cocktail/api/api';
import { getIngredientByID } from './modal-ingredient/api/api';
import {
  renderList,
  renderModalCocktail,
} from './modal-cocktail/render/render';

import { renderModalIngredient } from './modal-ingredient/render/render';
import { onAddIngridClick } from './auth';
import { openIngredientModal } from './modal-ingredient';

export async function onLearnMoreClick(event) {
  if (
    !event.target.classList.contains('btn__learn') &&
    !event.target.classList.contains('btn__learn--ingredient')
  )
    return;
  try {
    if (event.target.classList.contains('btn__learn--cocktail')) {
      const id = event.target.dataset.cocktailid;
      // console.log(id);
      const response = await getCocktailById(id);
      openCocktailModal(response);
    }

    if (event.target.classList.contains('btn__learn--ingredient')) {
      const id = event.target.dataset.ingredientid;

      //console.log(id);

      const response = await getIngredientByID(id);
      //console.log(response);

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

  // console.log(response);

  let cocktailTitle = response.drinks[0].strDrink;
  let cocktailInstructions = response.drinks[0].strInstructions;
  let cocktailImage = response.drinks[0].strDrinkThumb;

  let list = makeList(response);
  let listMarkup = renderList(list.resultList, list.modIngredientsList);

  insertMarkup(cocktailTitle, cocktailInstructions, cocktailImage, listMarkup);

  const modalCloseCocktailBtn = document.querySelector(
    '.js-modal-close-cocktail'
  );
  modalCloseCocktailBtn.addEventListener('click', onCloseModalCocktail);

  const modalCocktailList = document.querySelector(
    '.js-modal-list-ingredients'
  );
  modalCocktailList.addEventListener('click', onListClick);
}

async function onListClick(event) {
  if (!event.target.classList.contains('js-modal-link')) return;
  // console.log(event.target);
  let el = event.target.closest('[data-ingredient]');
  // console.log(el);
  let dataIngredient = el.dataset.ingredient;
  // console.log('datIngredient:', dataIngredient);
  const response = await getIngredientByName(dataIngredient);
  // console.log('response ingredient', response.ingredients[0]);

  openIngredientModal(response);
  

  const modalCloseIngredientBtn = document.querySelector(
    '.js-modal-close-ingredient'
  );
  modalCloseIngredientBtn.addEventListener('click', onCloseModalIngredient);

  const addToFavorBtn = document.querySelector(
    '.modal__button--add-ingredient'
  );
  addToFavorBtn.addEventListener('click', onAddIngridClick);
}

// function onAddIngridClickNew(event) {
//   console.log(event.target);
//   const el = event.target.closest('[data-ingredient-name]');
//   console.log(el);
//   let ingredientName = el.dataset.ingredientName;
//   console.log(ingredientName);
// }

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

  // console.log(modQuantityList);
  // console.log(modIngredientsList);
  // console.log(resultList);

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

export async function insertMarkup(id, title, instructions, image, list) {
  try {
    backdropCocktailRef.innerHTML = renderModalCocktail(
      id,
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

// function toggleModal() {
//   modalCocktailRef.classList.toggle('is-hidden');
//   document.body.style.overflow = 'visible';
// }

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
