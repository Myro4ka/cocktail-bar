import {
  testButtonRef,
  modalIngredientRef,
  backdropIngredientRef,
  addToFavorBtn,
} from './modal-ingredient/refs/refs.js';

import { getIngredientByID } from './modal-ingredient/api/api';

import { renderModalIngredient } from './modal-ingredient/render/render';
import { onEscKeyPress } from './modal-cocktail';
import { onAddIngridClick } from './auth/index.js';

// TODO======== delete testButtonRef, only for modal test run

testButtonRef.setAttribute('data-ingredientId', '5');
testButtonRef.addEventListener('click', onOpenIngredientModal);

// TODO======== end

async function onOpenIngredientModal(event) {
  window.addEventListener('keydown', onEscKeyPress);
  modalIngredientRef.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  try {
    let el = await event.target.closest('[data-ingredientId]');

    const ingredientId = await el.dataset.ingredientid;
    const response = await getIngredientByID(ingredientId);

    let ingredient = response.ingredients[0];
    const ingredientTitle = ingredient.strIngredient;
    const ingredientType = ingredient.strType || 'no information';
    const ingredientDescription = ingredient.strDescription || 'no information';
    let ingredientAlcohol = '';
    // ingredient.strABV + ' %' || 'no information';
    if (ingredient.strAlcohol.toLowerCase() === 'yes' && ingredient.strABV) {
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


  } catch (error) {
    console.log(error.message);
  }
}

export async function onCloseIngredientModal(event) {
  if (
    event.target.classList.contains('js-modal-close-ingredient') ||
    event.target.classList.contains('js-modal-icon-ingredient') ||
    event.target.classList.contains('js-backdrop-ingredient')
  ) {
    modalIngredientRef.classList.add('is-hidden');
    // document.body.style.overflow = "visible";
  }
}

modalIngredientRef.addEventListener('click', onCloseIngredientModal);

//addToFavorBtn.addEventListener('click', onAddIngridClick);
