import './modal-cocktail';
import './header';
import './header/mob-menu.js';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './auth/api/auth';
import { refs } from './gallery/refs/refs';
import { getIngrids } from './auth/api';
import { getIngredientByName } from './modal-ingredient/api/api';
import { main } from './pagination';
import { refsSearch } from './header/refs/search';

onAuthStateChanged(auth, user => {
  if (!user) {
    location.replace('/cocktail-bar/');
  } else
    getIngrids()
      .then(response => {
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
        });
        const arrayIngrids = [];
        const promises = array.map(name => getIngredientByName(name));
        Promise.all(promises).then(data => {
          for (const { ingredients } of data) {
            arrayIngrids.push(ingredients[0]);
          }
          if (window.location.href.includes('favorites')) {
            refsSearch.form.addEventListener('submit', onChangeFavInput);
            function onChangeFavInput(e) {
              e.preventDefault();
              let searchQuery = e.currentTarget.elements[1].value
                .trim()
                .toLowerCase();
              const arrayFavIngrid = [];
              refsSearch.form.reset();
              arrayIngrids.forEach(ingrid => {
                if (ingrid.strIngredient.toLowerCase().includes(searchQuery)) {
                  arrayFavIngrid.push(ingrid);
                }
              });
              main(arrayFavIngrid);
            }
          }
          main(arrayIngrids);
        });
      })
      .catch(error => {
        console.log(error);
      });
});
