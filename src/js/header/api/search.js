import { refsSearch } from '../refs/search';
import { main } from '../../pagination';
import { responseNull } from '../../gallery/render/response_null';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const searchCocktailsInput = async query => {
  const URL = `${BASE_URL}search.php?s=${query}`;
  return await fetch(URL)
    .then(response => response.json())
    .then(response => {
      const { drinks } = response;
      if (drinks === null) {
        return responseNull();
      } else {
        refsSearch.cocktailsTitle.textContent = 'Cocktails';
        main(drinks);
      }
    });
};
