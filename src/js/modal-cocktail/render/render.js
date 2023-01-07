import * as iconModalClose from '../../../images/modal-close.svg'

export function renderModalFirst(id, strDrink, strInstructions, strDrinkThumb, list) {
  const markup = `
            <div class="modal js-modal-first">
                <button class="modal__close-button js-modal-close-first" data-modal-first-close>
                    <svg class="modal__icon js-modal-icon-first" width="32" height="32">
                        <use href="${iconModalClose}" />
                    </svg>
                </button>

                <h1 class="modal__title">${strDrink}</h1>
                <div class="modal__content">
                    <div class="modal__instructions">
                        <h2 class="modal__subtitle">Instructions:</h2>
                        <p class="modal__description modal__description--first">${strInstructions}</p>
                    </div>
                    <img class="modal__image" src="${strDrinkThumb}" alt="" width="280" height="280">
                    <div class="modal__info">
                        <h3 class="modal__ingredients">INGREDIENTS</h3>
                        <p class="modal__per-cocktail">Per cocktail</p>
                        <ul class="modal__list js-modal-first-list">
                       ${list}
                        </ul>
                    </div>
                </div>


                <button class="modal__button modal__button--add" type="button">
                    Add to favorite
                </button>
            </div>
    `;
  // console.log(markup);
  return markup;
}

export function renderList(arr) {
  const markup = arr
    .map(el => {
      // console.log(el);
      return `
        <li class="modal__item" data-ingredient='${el}'>
          <a class="modal__link js-modal-link" href="#">&sext;${el}</a>
        </li>
        `;
    })
    .join('');
  // console.log('markup: ', markup);
  return markup;
}
