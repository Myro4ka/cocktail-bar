import {
  modalCocktailRef,
  backdropCocktailRef,
  modalIngredientRef,
  backdropIngredientRef,
} from './modal-cocktail/refs/refs';

import { getCocktailById, getIngredientByName } from './modal-cocktail/api/api';

import {
  renderList,
  renderModalCocktail,
} from './modal-cocktail/render/render';

import { renderModalIngredient } from './modal-ingredient/render/render';

export async function onLoadMoreClick(event) {
  try {
    // console.log(event.target.classList);
    if (!event.target.classList.contains('btn__learn')) return;
    const id = event.target.dataset.cocktailid;
    // console.log(id);

    const response = await getCocktailById(id);

    openCocktailModal(response);
  } catch (error) {
    console.log(error);
  }
}

async function openCocktailModal(response) {
  modalCocktailRef.classList.remove('is-hidden');
  modalCocktailRef.body.body.classList.toggle('no-scroll');
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
  let el = await event.target.closest('[data-ingredient]');
  // console.log(el);
  let dataIngredient = el.dataset.ingredient;
  // console.log('datIngredient:', dataIngredient);
  const response = await getIngredientByName(dataIngredient);
  // console.log('response ingredient', response.ingredients[0]);

  const ingredientTitle = response.ingredients[0].strIngredient;
  const ingredientType = response.ingredients[0].strType || 'no information';
  const ingredientDescription =
    response.ingredients[0].strDescription || 'no information';

  let ingredientAlcohol = '';
  response.ingredients[0].strABV + ' %' || 'no information';
  if (
    response.ingredients[0].strAlcohol.toLowerCase() === 'yes' &&
    response.ingredients[0].strABV
  ) {
    ingredientAlcohol = `${response.ingredients[0].strABV} %`;
  } else {
    ingredientAlcohol = 'no information';
  }

  if (response.ingredients[0].strAlcohol.toLowerCase() === 'no') {
    ingredientAlcohol = `no alcohol`;
  }

  modalIngredientRef.classList.remove('is-hidden');
  modalIngredientRef.body.classList.toggle('no-scroll');

  backdropIngredientRef.innerHTML = renderModalIngredient(
    ingredientTitle,
    ingredientType,
    ingredientDescription,
    ingredientAlcohol
  );
  const modalCloseIngredientBtn = document.querySelector(
    '.js-modal-close-ingredient'
  );
  modalCloseIngredientBtn.addEventListener('click', onCloseModalIngredient);
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
  modalCocktailRef.classList.contains('is-hidden')
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');
  modalIngredientRef.body.classList.toggle('no-scroll');
}

function onCloseModalCocktail() {
  modalCocktailRef.classList.add('is-hidden');

  modalCocktailRef.body.classList.toggle('no-scroll');
}

function toggleModal() {
  modalCocktailRef.classList.toggle('is-hidden');
  modalCocktailRef.body.classList.toggle('no-scroll');
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

