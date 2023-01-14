import sprite from '../../../images/symbol-defs.svg';


export const addBtn = `<button class="btn__add coctails-section__like-button" type="button">
                            Add to <svg class="btn__svg" width="18" height="18"> <use href="${sprite}#icon-heart"></use> </svg>
                        </button>`;
export const removeBtn = `<button class="btn__add coctails-section__like-button" type="button">
                            Remove <svg class="btn__svg" width="18" height="18"> <use href="${sprite}#icon-addheart"></use> </svg>
                        </button>`;

export const coctailCardMarkup = (
  markupPlace = '',
  cocktailName = '',
  cocktailImgLink = '',
  cocktailId = '',
  heart
) => {
  markupPlace.innerHTML += `<li class="gallery__item" data-isFavorite = "false">
            <div class='coctail-container'>
                <img class="gallery__img" src="${cocktailImgLink}" alt="${cocktailName}" width="280" height="280" />
                <div class="gallery__card">
                    <h3 class="gallery__card-title">${cocktailName}</h3>
                    <div class="gallery__card-btns">
                        <button class="btn__learn btn__learn--cocktail coctails-section__learn-button" type="button" data-cocktailId = ${cocktailId}>Learn more</button>
                        ${heart}
                    </div>
                </div>
            </div>
            </li> `;
};

export const ingredientCardMarkup = (
  markupPlace = '',
  ingridName = '',
  ingridType = '',
  ingridId = '',
  heart
) => {
  markupPlace.innerHTML += `<li class="gallery__item gallery__item--ingredient " data-isFavorite = "false">
              <div class='ingredient-container'>
                  <div class="gallery__card">
                      <h3 class="gallery__card-title gallery__card-title--ingredient">${ingridName}</h3>
                      <p class = "ingredient-type">${ingridType}</p>
                      <div class="gallery__card-btns">
                          <button class="btn__learn btn__learn--ingredient coctails-section__learn-button" type="button" data-ingredientId = ${ingridId}>Learn more</button>
                          ${heart}
                      </div>
                  </div>
              </div>
              </li> `;
};
