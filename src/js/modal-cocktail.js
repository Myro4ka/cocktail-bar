import {
  modalCocktailRef,
  backdropCocktailRef,
  modalIngredientRef,
  backdropIngredientRef,
} from './modal-cocktail/refs/refs';
import { getCocktailById, getIngredientByName } from './modal-cocktail/api/api';
import { renderList, renderModalCocktail } from './modal-cocktail/render/render';

import { renderModalIngredient } from './modal-ingredient/render/render';

let response = null;

export async function onOpenCocktailModal(event) {
  if (event.target.classList.contains('btn__learn')) {
    let el = await event.target.closest('[data-cocktailId]');
    const cocktailId = await el.dataset.cocktailid;

    response = await getCocktailById(cocktailId);

    modalCocktailRef.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscKeyPress);

    let cocktailTitle = response.drinks[0].strDrink;
    let cocktailInstructions = response.drinks[0].strInstructions;
    let cocktailImage = response.drinks[0].strDrinkThumb;
    let list = makeList(response);

    let listMarkup = await renderList(list.resultList);

    insertMarkup(
      cocktailId,
      cocktailTitle,
      cocktailInstructions,
      cocktailImage,
      listMarkup
    );
  }

  if (event.target.classList.contains('modal__link')) {
    modalIngredientRef.classList.remove('is-hidden');
    console.log(response);
    try {
      for (let key in response.drinks[0]) {
        if (
          key.includes('strIngredient') &&
          response.drinks[0][key] !== null &&
          response.drinks[0][key] !== '' &&
          event.target.textContent.includes(response.drinks[0][key])
        ) {
          let cocktailIngredient = await getIngredientByName(
            response.drinks[0][key]
          );

          const ingredient = await cocktailIngredient.ingredients[0];

          const ingredientTitle = ingredient.strIngredient;
          const ingredientType = ingredient.strType || 'no information';
          const ingredientDescription =
            ingredient.strDescription || 'no information';

          let ingredientAlcohol = '';
          ingredient.strABV + ' %' || 'no information';
          if (
            ingredient.strAlcohol.toLowerCase() === 'yes' &&
            ingredient.strABV
          ) {
            ingredientAlcohol = `${ingredient.strABV} %`;
          } else {
            ingredientAlcohol = 'no information';
          }

          if (ingredient.strAlcohol.toLowerCase() === 'no') {
            ingredientAlcohol = `no alcohol`;
          }

          backdropIngredientRef.innerHTML = renderModalIngredient(
            ingredientTitle,
            ingredientType,
            ingredientDescription,
            ingredientAlcohol
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
    return;
  }

  if (
    event.target.classList.contains('js-modal-close-cocktail') ||
    event.target.classList.contains('js-modal-icon-cocktail') ||
    event.target.classList.contains('js-backdrop-cocktail')
  ) {
    onCloseModalCocktail();
    return;
  }

  if (
    event.target.classList.contains('modal__close-button-ingredient') ||
    event.target.classList.contains('modal__icon--ingredient') ||
    event.target.classList.contains('js-backdrop-ingredient')
  ) {
    onCloseModalIngredient();
    window.removeEventListener('keydown', onEscKeyPress);
    return;
  }
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

  console.log(modQuantityList); //!+++++++++++++++
  console.log(modIngredientsList); //!+++++++++++++++
  console.log(resultList); //!+++++++++++++++

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
  modalIngredientRef.classList.add('is-hidden');
}

function onCloseModalCocktail() {
  modalCocktailRef.classList.add('is-hidden');
}

function getData() {}

modalCocktailRef.addEventListener('click', onOpenCocktailModal);
