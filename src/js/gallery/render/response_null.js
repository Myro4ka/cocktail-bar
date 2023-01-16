import { refs } from '../refs/refs';
export function responseNull() {
  refs.coctailTitel.textContent = `Sorry, we didn't find any cocktail for you`;
  refs.coctailsList.innerHTML = createMarkupNullCocktail();
  refs.paginationDiv.classList.add('visually-hidden');
}

function createMarkupNullCocktail() {
  return `<div class='coctails-section__coctails-img-div'>
  <div class='coctails-section__coctails-img'></div>
  </div>`;
}
export function noCoctailsResponse(elem) {
  // refs.coctailTitel.textContent = `Sorry, we didn't find any cocktail for you`;
  refs.coctailsList.innerHTML = createMarkupNoFavoriteCocktail(elem);
  refs.paginationDiv.classList.add('visually-hidden');
}

export function createMarkupNoFavoriteCocktail(elem) {
  return `<p class="no-added-message__text">You haven't added any favorite ${elem} yet</p>`;
}
