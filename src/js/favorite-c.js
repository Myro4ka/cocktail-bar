import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './auth/api/auth';
import { main } from './pagination';
import { refs } from './gallery/refs/refs';
import { getCocktails } from './auth/api';
import { getCocktailById } from './modal-cocktail/api/api';
import './gallery';
import './modal-cocktail';
import './header/mob-menu.js';
// import './modal-ingredient';

onAuthStateChanged(auth, () => {
  refs.coctailTitel.textContent = 'Favorite cocktails';
  getCocktails()
    .then(response => {
      console.log('response', response);
      if (!response) {
        const markup = `<p>You haven't added any favorite cocktails yet</p>`;
        document
          .querySelector('.gallery.container')
          .insertAdjacentHTML('beforeend', markup);
        return;
      }
      const array = [];
      //  Получаем массив масива
      Object.entries(response).forEach(([key, value]) => {
        //Добавить key from firebase
        array.push(+value);
        console.log(array);
      });
      // получаем массив
      const arrayDrinks = [];
      array.map(idEl => {
        console.log(idEl);
        getCocktailById(idEl).then(({ drinks }) => {
          for (const el of drinks) {
            arrayDrinks.push(el);
          }
          main(arrayDrinks);

        });
      });
    })
    .catch(error => {
      console.log(error);
    });
});
