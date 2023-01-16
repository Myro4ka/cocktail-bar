import { addBtn, removeBtn } from '../gallery/render/render';
import { refs } from '../gallery/refs/refs';
import { setCoctail, setIngrid, deleteIngrid, deleteCocktail } from './api';
import { auth } from './api/auth';
import { onAuthStateChanged } from '@firebase/auth';
import { onLearnMoreClick } from '../modal-cocktail';
import Notiflix from 'notiflix';
import { type } from 'os';
import { isAbsolute } from 'path';

export function onActionStorageBtnClick(e) {
  if (
    !e.target.classList.contains('btn__add') &&
    !e.target.classList.contains('btn__remove') &&
    !e.target.classList.contains('btn__svg') &&
    !e.target.hasAttribute('href') &&
    !e.target.classList.contains('btn__learn')
  )
    return;
  else if (e.target.classList.contains('btn__learn')) {
    console.log(e.target);
    onLearnMoreClick(e.target);
  } else {
    const actionCard = [...e.currentTarget.children].find(childNode =>
      childNode.contains(e.target)
    );
    const idCocktail =
      actionCard.querySelector('.btn__learn').dataset.cocktailid;
    if (actionCard.querySelector('.btn__add')) {
      onAuthStateChanged(auth, user => {
        if (!user) {
          // return Notiflix.Notify('Log in, please!');
          return;
        }
        if (actionCard.querySelector('.btn__remove')) {
          actionCard
            .querySelector('.btn__remove')
            .classList.add('visually-hidden');
          actionCard
            .querySelector('.btn__add')
            .classList.remove('visually-hidden');
          deleteCocktail(idCocktail);
          return;
        } else {
          onAddClick(idCocktail, actionCard);
        }
      });
    } else if (actionCard.querySelector('.btn__remove')) {
      onRemoveClick(idCocktail, actionCard);
    }
    // }
    return;
  }
}

// Сабмит получение данных
export function onAddClick(id, card) {
  try {
    card.querySelector('.btn__add').classList.toggle('visually-hidden');
    if (card.classList.contains('btn__remove'))
      card.querySelector('.btn__remove').classList.remove('visually-hidden');
    card.querySelector('.gallery__card-btns').innerHTML += removeBtn;
    console.log(id);
    setCoctail(id);
  } catch (error) {
    console.log(error);
  }
}

export function onRemoveClick(id, card) {
  try {
    card.querySelector('.btn__remove').classList.add('visually-hidden');
    if (card.classList.contains('btn__add'))
      card.querySelector('.btn__add').classList.toggle('visually-hidden');
    card.querySelector('.gallery__card-btns').innerHTML += addBtn;
    card.classList.add('visually-hidden');
    card.style.position = 'absolute';
    console.log(id);
    deleteCocktail(id);
  } catch (error) {
    console.log(error);
  }
}

