// import './gallery';
import './modal-cocktail';
// import './modal-ingredient';
import './header/mob-menu.js';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './auth/api/auth';
// import { main } from './pagination';
import { refs } from './gallery/refs/refs';
import { getIngrids } from './auth/api';
import { getIngredientByName } from './modal-ingredient/api/api';

onAuthStateChanged(auth, () => {
  refs.coctailTitel.textContent = 'Favorite ingredients';
  getIngrids()
    .then(response => {
      console.log('response', response);
      if (!response) {
        const markup = `<p>You haven't added any favorite ingredients yet</p>`;
        document
          .querySelector('.gallery.container')
          .insertAdjacentHTML('beforeend', markup);
        return;
      }
      const array = [];
      //       //  Получаем массив масива
      Object.entries(response).forEach(([key, value]) => {
        //         //Добавить key from firebase
        array.push(+value);
        console.log(array);
      });
      //       // получаем массив
      //       const arrayIngr = [];
      //       array.map(idEl => {
      //         console.log(idEl);
      //         getIngredientByName(idEl).then(({ drinks }) => {
      //           for (const el of drinks) {
      //             arrayIngr.push(el);
      //           }
      //   main(arrayIngr);
      //   refs.coctailTitel.textContent = 'Favorite ingredients';
      //   });
      //   });
    })
    .catch(error => {
      console.log(error);
    });
});
// });
