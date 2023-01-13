import * as iconModalClose from '../../../images/symbol-defs.svg';
export function renderModalIngredient(
  ingredient = '',
  type = '',
  description = '',
  alcohol = ''
) {
  const markup = `
            <div class="modal modal--ingredient" data-ingredient-name = '${ingredient}'>
              <button class="modal__close-button modal__close-button-ingredient js-modal-close-ingredient" data-modal-ingredient-close>
                  <svg class="modal__icon js-modal-icon-ingredient" width="32" height="32">
                      <use href="${iconModalClose}#icon-close-line" />
                  </svg>
              </button>
  
              <h1 class="modal__title modal__title--ingredient">${ingredient}</h1>
              <h2 class="modal__subtitle modal__subtitle--ingredient">${type}</h2>
              <p class="modal__description modal__description--ingredient-mobile"><span></span> ${description}</p>
  
              <ul class="modal__list">

                <li class="modal__item">
                    <p>&sext; Type: ${type}</p>
                </li>
                <li class="modal__item">
                    <p>&sext; Alcohol: ${alcohol} </p>
                </li>
            
              </ul>
  
              <button class="modal__button modal__button--add-ingredient" type="button">
                  Add to favorite
              </button>
            </div>
          `;
  return markup;
}
