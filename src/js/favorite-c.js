import { main } from './pagination';
import { refs } from './gallery/refs/refs';
import { getCocktails } from './auth/api';
// import mainFunction from './gallery';
// import { getCocktailsAmount } from './gallery';

(() => {
  //   const amount = getCocktailsAmount(document.querySelector(section));
  //   mainFunction(
  //     0,
  //     'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  //     amount,
  //     refs.coctailsList
  //   );
  getCocktails()
    .then(response => {
      const array = [];
      //  Получаем массив масива, destryktyruzacuya
      Object.entries(response).forEach(([key, value]) => {
        //Добавить key from firebase
        console.log(value);
        value.id = key;
        array.push(value);
        console.log(key);
      });
      // получаем массив
      console.log(array);
    })
    .catch(error => {
      console.log(error);
    });
  main();
})();
