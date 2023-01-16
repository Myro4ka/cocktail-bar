import {
  testButtonRef,
  modalIngredientRef,
  backdropIngredientRef,
  addToFavorBtn,
} from './modal-ingredient/refs/refs.js';

import { getIngredientByID } from './modal-ingredient/api/api';

import { renderModalIngredient } from './modal-ingredient/render/render';
import { onEscKeyPress } from './modal-cocktail';
import { auth } from './auth/api/auth.js';
import { setIngrid, deleteIngrid, getIngrids } from './auth/api/index.js';
import {
  addIngridBtn,
  removeIngridBtn,
} from './modal-ingredient/render/render';

export async function onCloseIngredientModal(event) {
  if (event.target.classList.contains('modal__button--add-ingredient')) return;
  modalIngredientRef.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
}

export async function openIngredientModal(response) {
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
  document.body.style.overflow = 'hidden';

  getIngrids().then(response => {
    if (response) {
      const arrayFavorId = Object.values(response);
      const button = arrayFavorId.includes(ingredientTitle)
        ? removeIngridBtn
        : addIngridBtn;

      backdropIngredientRef.innerHTML = renderModalIngredient(
        ingredientTitle,
        ingredientType,
        ingredientDescription,
        ingredientAlcohol,
        button
      );

      const modalCloseIngredientBtn = document.querySelector(
        '.js-modal-close-ingredient'
      );

      modalCloseIngredientBtn.addEventListener('click', onCloseIngredientModal); //!+++++++

      const addToFavorBtn = document.querySelector('.modal__button-ingr');
      addToFavorBtn.addEventListener('click', onAddIngridClick);
      window.addEventListener('keydown', onEscKeyPress);
    }
  });
}

function onAddIngridClick(e) {
  if (!auth) {
    // return Notiflix.Notify('Log in, please!');
    return;
  }
  try {
    const el = e.target.closest('[data-ingredient-name]').dataset
      .ingredientName;
    if (e.target.classList.contains('modal__button--add-ingredient')) {
      e.target.textContent = 'Remove from favorite';
      e.target.classList.remove('modal__button--add-ingredient');
      e.target.classList.add('modal__button--remove-ingredient');

      setIngrid(el);
    } else if (
      e.target.classList.contains('modal__button--remove-ingredient')
    ) {
      e.target.textContent = 'Add to favorite';
      e.target.classList.remove('modal__button--remove-ingredient');
      e.target.classList.add('modal__button--add-ingredient');

      deleteIngrid(el);
    }
  } catch (error) {
    console.log(error);
  }
}
