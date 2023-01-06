export const coctailCardMarkup = (
    markupPlace = '',
    cocktailName = '',
    cocktailImgLink = '',
    coctailNumber = 0
) => {
    markupPlace.innerHTML += `<li class="gallery__item">
                <img class="gallery__img" src="${cocktailImgLink}" alt="${cocktailName}" width="280" height="280" />
                <div class="gallery__card">
                    <h3 class="gallery__card-title">${cocktailName}</h3>
                    <div class="gallery__card-btns">
                        <button class="btn__learn coctails-section__learn-button" type="button">Learn more</button>
                        <button class="btn__add coctails-section__like-button" type="button" id="likeBtn${coctailNumber}">
                            Add to
                            <svg class="btn__svg" width="18" height="18">
                                <use href="./images/symbol-defs.svg#icon-Heart-mobile"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </li> `
}