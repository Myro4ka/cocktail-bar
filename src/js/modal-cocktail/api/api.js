const BASE_URL = 'https://www.thecocktaildb.com/';

export async function getCocktailById(id) {
  return await fetch(`${BASE_URL}api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export async function getIngredientByName(str) {
  return await fetch(`${BASE_URL}api/json/v1/1/search.php?i=${str}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}