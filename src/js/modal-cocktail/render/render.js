import * as iconModalClose from '../../../images/symbol-defs.svg'
export function renderModalCocktail(
  strDrink,
  strInstructions,
  strDrinkThumb,
  list
) {
  const markup = `
            <div class="modal js-modal-cocktail">
                <button class="modal__close-button js-modal-close-cocktail" data-modal-cocktail-close>
                    <svg class="modal__icon js-modal-icon-cocktail" width="32" height="32">
                        <use href="${iconModalClose}#icon-close-line" />
                    </svg>
                </button>

                <h1 class="modal__title">${strDrink}</h1>
                <div class="modal__content">
                    <div class="modal__instructions">
                        <h2 class="modal__subtitle">Instructions:</h2>
                        <p class="modal__description modal__description--cocktail">${strInstructions}</p>
                    </div>
                    <img class="modal__image" src="${strDrinkThumb}" alt="" width="280" height="280">
                    <div class="modal__info">
                        <h3 class="modal__ingredients">INGREDIENTS</h3>
                        <p class="modal__per-cocktail">Per cocktail</p>
                        <ul class="modal__list js-modal-list-ingredients">
                       ${list}
                        </ul>
                    </div>
                </div>


                <button class="modal__button modal__button--add" type="button">
                    Add to favorite
                </button>
            </div>
    `;
  return markup;
}

export function renderList(resultList, ingredientList) {
  // console.log(resultList);
  // console.log(ingredientList);

  let ingredient = '';
  let markup = '';
  for (let i = 0; i < ingredientList.length; i += 1) {
    ingredient = ingredientList[i];
    // console.log(ingredient);
    markup += `
        <li class="modal__item" data-ingredient='${ingredient}'>
          <button class="modal__link js-modal-link" href="#">&sext;&#160;${resultList[i]}</button>
        </li>
      `;
  }
  //console.log(markup);
  return markup;
}
