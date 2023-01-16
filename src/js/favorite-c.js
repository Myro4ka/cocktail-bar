import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './auth/api/auth';
import { main } from './pagination';
import { refs } from './gallery/refs/refs';
import { getCocktails } from './auth/api';
import { getCocktailById } from './modal-cocktail/api/api';
import { refsSearch } from './header/refs/search';
import './header';
import './modal-cocktail';
import './header/mob-menu.js';

onAuthStateChanged(auth, user => {
  if (!user) {
    location.replace('/cocktail-bar/');
  } else
    getCocktails()
      .then(response => {
        refs.coctailTitel.textContent = 'Favorite cocktails';
        if (!response) {
          const markup = `<p class="no-added-message__text">You haven't added any favorite cocktails yet</p>`;
          document
            .querySelector('.gallery.container')
            .insertAdjacentHTML('beforeend', markup);
          return;
        }
        const array = [];
        Object.entries(response).forEach(([key, value]) => {
          array.push(+value);
        });

        const arrayDrinks = [];
        const promises = array.map(idEl => getCocktailById(idEl));

        Promise.all(promises).then(data => {
          for (const { drinks } of data) {
            arrayDrinks.push(drinks[0]);
          }

          if (window.location.href.includes('favorites')) {
            refsSearch.form.addEventListener('submit', onChangeFavInput);
            function onChangeFavInput(e) {
              e.preventDefault();
              let searchQuery = e.currentTarget.elements[1].value
                .trim()
                .toLowerCase();
              const arrayFavDrinks = [];
              refsSearch.form.reset();
              arrayDrinks.forEach(drinks => {
                if (drinks.strDrink.toLowerCase().includes(searchQuery)) {
                  arrayFavDrinks.push(drinks);
                }
              });

              main(arrayFavDrinks);
            }
          }

          main(arrayDrinks);
          refs.coctailTitel.textContent = 'Favorite cocktails';
        });
      })
      .catch(error => {
        console.log(error);
      });
});
