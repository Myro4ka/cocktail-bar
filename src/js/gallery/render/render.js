import sprite from '../../../images/symbol-defs.svg';

export const coctailCardMarkup = (
  markupPlace = '',
  cocktailName = '',
  cocktailImgLink = '',
  cocktailId = ''
) => {
  markupPlace.innerHTML += `<li class="gallery__item">
                <img class="gallery__img" src="${cocktailImgLink}" alt="${cocktailName}" width="280" height="280" />
                <div class="gallery__card">
                    <h3 class="gallery__card-title">${cocktailName}</h3>
                    <div class="gallery__card-btns">
                        <button class="btn__learn coctails-section__learn-button" type="button" data-cocktailId = ${cocktailId}>Learn more</button>
                        <button class="btn__add coctails-section__like-button" type="button">
                            Add to
                            <svg class="btn__svg" width="18" height="18">
                                <use href="${sprite}#icon-Heart-mobile"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </li> `;
};
