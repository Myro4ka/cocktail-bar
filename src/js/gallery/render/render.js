import sprite from '../../../images/symbol-defs.svg';

export const coctailCardMarkup = (
  markupPlace = '',
  cocktailName = '',
  cocktailImgLink = '',
  cocktailId = ''
) => {
    markupPlace.innerHTML += `<li class="gallery__item">
            <div class='coctail-container'>
                <img class="gallery__img" src="${cocktailImgLink}" alt="${cocktailName}" width="280" height="280" />
                <div class="gallery__card">
                    <h3 class="gallery__card-title">${cocktailName}</h3>
                    <div class="gallery__card-btns">
                        <button class="btn__learn coctails-section__learn-button" type="button" data-cocktailId = ${cocktailId}>Learn more</button>
                        <button class="btn__add coctails-section__like-button" type="button">
                            Add to ${svgHeart}
                        </button>
                    </div>
                </div>
            </div>
            </li> `
}

export const svgHeart = `  <svg class="btn__svg" width="18" height="18"> <use href="${sprite}#icon-heart"></use> </svg>`;
export const svgHeartFull = `  <svg class="btn__svg" width="18" height="18"> <use href="${sprite}#icon-addheart"></use> </svg>`;

