import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './auth/api/auth';
import { main } from './pagination';
import { refs } from './gallery/refs/refs';
import { getCocktails } from './auth/api';
import { getCocktailById } from './modal-cocktail/api/api';
import './header';
// import './gallery';
import './modal-cocktail';
import './header/mob-menu.js';
// import './modal-ingredient';

onAuthStateChanged(auth, user => {
  if (!user) {
    location.replace('/');
  } else
    getCocktails()
      .then(response => {
        refs.coctailTitel.textContent = 'Favorite cocktails';
        console.log('response', response);
        if (!response) {
          const markup = `<p class="no-added-message__text">You haven't added any favorite cocktails yet</p>`;
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
          // console.log(array);
        });
        // получаем массив
        const arrayDrinks = [];
        const promises = array.map(idEl => getCocktailById(idEl));
        // console.log(promises);
        Promise.all(promises).then(data => {
          // console.log(data);
          for (const { drinks } of data) {
            arrayDrinks.push(drinks[0]);
          }
          console.log(arrayDrinks);
          main(arrayDrinks);
          refs.coctailTitel.textContent = 'Favorite cocktails';
        });
        // array.map(idEl => {
        //   console.log(idEl);
        //   getCocktailById(idEl).then(({ drinks }) => {
        //     for (const el of drinks) {
        //       arrayDrinks.push(el);
        //     }
        //   });
        // });
      })
      .catch(error => {
        console.log(error);
      });
});
