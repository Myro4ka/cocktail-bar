// import './gallery';
import './modal-cocktail';
// import './modal-ingredient';
import './header';
import './header/mob-menu.js';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './auth/api/auth';
// import { main } from './pagination';
import { refs } from './gallery/refs/refs';
import { getIngrids } from './auth/api';
import { getIngredientByName } from './modal-ingredient/api/api';
import { main } from './pagination';

onAuthStateChanged(auth, (user) => {
  if (!user) {
    location.replace('/');
  } else
  getIngrids()
    .then(response => {
      console.log('response', response);
      refs.coctailTitel.textContent = 'Favorite ingredients';
      if (!response) {
        const markup = `<p class="no-added-message__text">You haven't added any favorite ingredients yet</p>`;
        document
          .querySelector('.gallery.container')
          .insertAdjacentHTML('beforeend', markup);
        return;
      }
      const array = [];
      //       //  Получаем массив масива
      Object.entries(response).forEach(([key, value]) => {
        //         //Добавить key from firebase
        array.push(value);
        console.log(array);
      });
      const arrayIngrids = [];
      const promises = array.map(name => getIngredientByName(name));
      // console.log(promises);
      Promise.all(promises).then(data => {
         console.log(data);
        for (const { ingredients } of data) {
          arrayIngrids.push(ingredients[0]);
        }
        console.log(arrayIngrids);
        main(arrayIngrids);
      });
    })
    .catch(error => {
      console.log(error);
    });
});