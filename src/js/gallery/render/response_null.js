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
