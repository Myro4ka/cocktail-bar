import mainFunction from '../../gallery';
import { refsSearch } from '../refs/search';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const searchCocktailsInput = async query => {
  return await fetch(`${BASE_URL}search.php?s=${query}`)
    .then(response => response.json())
    .then(response => {
      const { drinks } = response;
      if (drinks === null) {
        return responseNull();
      } else {
        refsSearch.cocktailsTitle.textContent = 'Cocktails';
        const arrayLength = response.drinks.length;
        mainFunction(
          1,
          `${BASE_URL}search.php?s=${query}`,
          arrayLength,
          refsSearch.cocktailsList
        );
      }
    });
};

// =========== вставити окремими функціями в gallery.js та імпортувати для відповіді "Не знайдено"==========
function responseNull() {
  refsSearch.cocktailsTitle.textContent = `Sorry, we didn't find any cocktail for you`;
  refsSearch.cocktailsList.innerHTML = createMarkupNullCocktail();
}

function createMarkupNullCocktail() {
  return `<div class='coctails-section__coctails-img-div'>
  <div class='coctails-section__coctails-img'></div>
  </div>`;
}
