import { BASE_URL } from "../../modal-cocktail/api/api";
export async function getIngredientByName(str) {
  return await fetch(`${BASE_URL}api/json/v1/1/search.php?i=${str}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export async function getIngredientByID(id) {
  return await fetch(`${BASE_URL}api/json/v1/1/lookup.php?iid=${id}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}