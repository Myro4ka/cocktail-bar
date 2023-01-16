import { refs } from './gallery/refs/refs';
import {
  coctailCardMarkup,
  addBtn,
  removeBtn,
  ingredientCardMarkup,
} from './gallery/render/render';
import { fetchProductsRandom } from './gallery/api/api';
import { onLearnMoreClick } from './modal-cocktail';
import { onActionStorageBtnClick } from './auth';
import { getCocktails, getIngrids } from './auth/api';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './auth/api/auth';
import { responseNull } from './gallery/render/response_null';
import { Block } from 'notiflix/build/notiflix-block-aio';
import { noCoctailsResponse } from './gallery/render/response_null';
let coctailsAmount = 0;

let searchIn = 0;

export const getCocktailsAmount = section => {
  if (!section) return;
  const coctailsSectionStyles = getComputedStyle(section);
  if (coctailsSectionStyles.width === '320px') {
    coctailsAmount = 3;
  } else if (coctailsSectionStyles.width === '768px') {
    coctailsAmount = 6;
  } else {
    coctailsAmount = 9;
  }
};
getCocktailsAmount(refs.coctailsSection);

export function mainFunction(searchIn, searchLink, amount, mainMarkupPlace) {
  if (!mainMarkupPlace) return;
  if (searchIn < 2 && mainMarkupPlace) {
    mainMarkupPlace.innerHTML = '';
  }
  const arrayRandomDrinks = [];
  for (let i = 0; i < amount; i += 1) {
    arrayRandomDrinks.push(fetchProductsRandom(searchLink));
  }

  Promise.all(arrayRandomDrinks)
    .then(r => {
      const result = r.map(d => d.drinks[0]);
      getUser(result, mainMarkupPlace);
    })
    .catch(console.log);
}

export function getUser(data, mainMarkupPlace) {
  onAuthStateChanged(auth, user => {
    if (data.length === 0) {
      if (window.location.href.includes('favorites-c')) {
        const coctailElem = 'coctails';
        noCoctailsResponse(coctailElem);
      } else if (window.location.href.includes('favorites-i')) {
        const ingridElem = 'ingridients';
        noCoctailsResponse(ingridElem);
      }
      return;
    }
    if (user) {
      if (data[0].idIngredient) {
        getIngrids()
          .then(response => {
            if (response) {
              const arrayFavorId = Object.values(response);

              addIngridMarkup(data, mainMarkupPlace, arrayFavorId);
            } else {
              addIngridMarkup(data, mainMarkupPlace);
            }
          })
          .catch(alert.log);
      } else if (data[0].idDrink) {
        getCocktails()
          .then(response => {
            if (response) {
              const arrayFavorId = Object.values(response);
              addMarkup(data, mainMarkupPlace, arrayFavorId);
            } else {
              addMarkup(data, mainMarkupPlace);
            }
          })
          .catch(alert.log);
      }
    } else {
      addMarkup(data, mainMarkupPlace);
    }
  });
}

function addMarkup(data, mainMarkupPlace, idC = []) {
  data.forEach(({ strDrink, strDrinkThumb, idDrink }) => {
    const btn = idC.includes(idDrink) ? removeBtn : addBtn;
    return coctailCardMarkup(
      mainMarkupPlace,
      strDrink,
      strDrinkThumb,
      idDrink,
      btn
    );
  });
}

function addIngridMarkup(data, mainMarkupPlace, idC = []) {
  data.forEach(({ strIngredient, strType, idIngredient }) => {
    const btn = idC.includes(strIngredient) ? removeBtn : addBtn;
    return ingredientCardMarkup(
      mainMarkupPlace,
      strIngredient,
      strType,
      idIngredient,
      btn
    );
  });
}

if (!window.location.href.includes('favorites')) {
  mainFunction(
    0,
    'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    coctailsAmount,
    refs.coctailsList
  );
}

refs.coctailsList.addEventListener('click', onActionStorageBtnClick);
Block.arrows('.gallery', {
  svgSize: '200px',
});
Block.remove('.gallery', 1000);
