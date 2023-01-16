import { refst } from '../refs/refs';
import { main } from '../../pagination';
import { responseNull } from '../../gallery/render/response_null';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export function cocktalis(name) {
  const URL = `${BASE_URL}search.php?f=${name}`;
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
        return responseNull();
      } else {
        refst.coctailsTitle.textContent = 'Cocktails';
        main(drinks);
      }
    });
}
