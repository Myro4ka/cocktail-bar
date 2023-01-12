// import './css/style.css';
import {
  listRef,
  formRef,
  loginBtnRef,
  signOutBtnRef,
  addLikeBtn,
} from './refs';
import { getData, setCoctail, setIngrid, deleteIngrid } from './api';
import { auth } from './api/auth';
import Notiflix from 'notiflix';

// Сабмит получение данных
export function oNaddClick(e) {
  if (!e.target.classList.contains('btn__add')) return;
  if (!auth) {
    // return Notiflix.Notify('Log in, please!');
    return;
  }
  try {
    const coctailId = e.target.previousElementSibling.dataset.cocktailid;
    console.log(coctailId);
    e.target.closest('.gallery__item').dataset.isFavorite = true;
    console.log(e.target.closest('.gallery__item'));
    setCoctail(coctailId);
    // const data = createDataObj(value);
    // console.log(data);
    //   передаем данные отправляем в базу данных
    // sendData(data);
  } catch (error) {
    console.log(error);
  }
  // e.target.reset();
}

// создание обьекта
// function createDataObj(value) {
//   return { value, checked: false };
// }
// Возвращение данных (промис)
// setTimeout(() => {
//   getData()
//     .then(response => {
//       const array = [];
//       //  Получаем массив масива, destryktyruzacuya
//       Object.entries(response).forEach(([key, value]) => {
//         //Добавить key from firebase
//         console.log(value);
//         value.id = key;
//         array.push(value);
//         console.log(key);
//       });
//       // получаем массив
//       console.log(array);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   setCoctail(Date.now());
//   setIngrid(Date.now());
//   deleteIngrid(1673444181120);
// }, 2000);
// addBtn.addEventListener('click', oNaddClick);
// formRef.addEventListener('submit', onSubmit);

// loginBtnRef.addEventListener('click', oNsignInWithPopup);
// addLikeBtn.addEventListener('click', oNaddClick);
// signOutBtnRef.addEventListener('click', signOutUser);
