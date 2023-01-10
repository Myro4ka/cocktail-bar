import { responsNull } from '../../hero';
import { refst } from '../refs/refs';
import mainFunction from '../../gallery';

export function cocktalis(name) {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${name}`;
  return fetch(URL)
    .then(response => {
      if (!response) {
        throw new Error(response.message);
      }
      return response.json();
    })
    .then(response => {
      const { drinks } = response;
      if (drinks === null) {
        return responsNull();
      } else {
        refst.coctailsTitle.textContent = 'Cocktails';
        const arrayLength = response.drinks.length;
        mainFunction(1, URL, arrayLength, refst.coctailsList);
      }
    });
}
