import { modalFirstRef, backdropFirstRef } from './modal-cocktail/refs/refs';
import { getCocktailById } from './modal-cocktail/api/api';
import { renderList, renderModalFirst } from './modal-cocktail/render/render';

export function makeList(cocktail) {
  let quantityList = [];
  let ingredientsList = [];
  let resultList = [];
  for (let key in cocktail.drinks[0]) {
    if (
      key.includes('strMeasure') &&
      cocktail.drinks[0][key] !== null &&
      cocktail[key] !== ''
    ) {
      quantityList.push(cocktail.drinks[0][key]);
    }

    if (
      key.includes('strIngredient') &&
      cocktail.drinks[0][key] !== null &&
      cocktail.drinks[0][key] !== ''
    ) {
      ingredientsList.push(cocktail.drinks[0][key].toLowerCase());
    }
  }
  resultList = quantityList.map(
    (quantity, ingredient) => quantity + ' ' + ingredientsList[ingredient]
  );
  //   console.log(quantityList);
  //   console.log(ingredientsList);
  //   console.log(resultList);

  return resultList;
}

export async function onOpenCocktailModal(event) {
  try {
    let el = await event.target.closest('[data-cocktailId]');
    //console.log(el);
    const cocktailId = await el.dataset.cocktailid;
    //console.log('cocktailId', el.dataset);
    //console.log('cocktailId', cocktailId);

    const response = await getCocktailById(cocktailId);
    //console.log('response', response);

    modalFirstRef.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscKeyPress);
    let cocktailTitle = response.drinks[0].strDrink;
    //console.log(cocktailTitle);

    let cocktailInstructions = response.drinks[0].strInstructions;
    //console.log(cocktailInstructions);

    let cocktailImage = response.drinks[0].strDrinkThumb;
    //console.log(cocktailImage);

    let list = renderList(makeList(response));
    // console.log(list);

    insertMarkup(
      cocktailId,
      cocktailTitle,
      cocktailInstructions,
      cocktailImage,
      list
    );
  } catch (error) {
    console.log(error.message);
  }
}

export async function insertMarkup(id, title, instructions, image, list) {
  try {
    backdropFirstRef.innerHTML = renderModalFirst(
      id,
      title,
      instructions,
      image,
      list
    );
  } catch (error) {
    console.log(error.message);
  }
}

export async function onCloseCocktailModal(event) {
  // console.log(event.target.classList);
  if (
    event.target.classList.contains('js-modal-close-first') ||
    event.target.classList.contains('js-modal-icon-first') ||
    event.target.classList.contains('js-backdrop-first')
  ) {
    modalFirstRef.classList.add('is-hidden');
  }
}

function onEscKeyPress(event) {
  if (
    event.code === 'Escape' &&
    !modalFirstRef.classList.contains('is-hidden')
  ) {
    modalFirstRef.classList.add('is-hidden');
    return;
  }
}

modalFirstRef.addEventListener('click', onCloseCocktailModal);
