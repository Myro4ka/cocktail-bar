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


// export async function onOpenIngredientModal(event) {
//   window.addEventListener('keydown', onEscKeyPress);
//   modalIngredientRef.classList.remove('is-hidden');
//   document.body.style.overflow = 'hidden';

//   try {
//     console.log('33333333333333333333333');
//     let el = await event.target.closest('[data-ingredientId]');

//     getIngredientData(el);
  
//     backdropIngredientRef.innerHTML = renderModalIngredient(
//       ingredientTitle,
//       ingredientType,
//       ingredientDescription,
//       ingredientAlcohol
//     );
//   } catch (error) {
//     console.log(error.message);
//   }
// }

export async function onCloseIngredientModal(event) {   
    modalIngredientRef.classList.add('is-hidden');
    // document.body.style.overflow = "visible";
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

  backdropIngredientRef.innerHTML = renderModalIngredient(
    ingredientTitle,
    ingredientType,
    ingredientDescription,
    ingredientAlcohol
  );

  const modalCloseIngredientBtn = document.querySelector(
    '.js-modal-close-ingredient'
  );
  
  // modalCloseIngredientBtn.addEventListener('click', onCloseModalIngredient); //!+++++++

  const addToFavorBtn = document.querySelector(
    '.modal__button--add-ingredient'
  );
  addToFavorBtn.addEventListener('click', onAddIngridClick);
  window.addEventListener('keydown', onEscKeyPress);
}

modalIngredientRef.addEventListener('click', onCloseIngredientModal);


//addToFavorBtn.addEventListener('click', onAddIngridClick);