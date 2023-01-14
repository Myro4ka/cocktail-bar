import '../header';
import '../switcher';
import {
  refs,
  mobMenuRefs,
  favorMenuRefs,
  favorMobMenuRefs,
} from './refs/mob-menu';
import { auth } from '../auth/api/auth.js';
import { onAuthStateChanged } from '@firebase/auth';
import { searchCocktailsInput } from './api/search';
import { onChecked } from '../switcher';

(() => {
  console.log(mobMenuRefs.switcher);
  mobMenuRefs.menuBtn.addEventListener('click', toggleMenu);
  mobMenuRefs.closeMenuBtn.addEventListener('click', toggleMenu);
  mobMenuRefs.menuList.addEventListener('click', removeMenu);
  mobMenuRefs.switcher.addEventListener('change', onChecked);

  function toggleMenu() {
    mobMenuRefs.mobileMenu.classList.toggle('is-hidden');
    mobMenuRefs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    mobMenuRefs.menuList.classList.add('is-hidden');
  }
})();

onAuthStateChanged(auth, user => {
  if (!user) {
    favorMenuRefs.favorBtn.removeEventListener('click', onFavorBtn);
    return;
  }
  favorMenuRefs.favorBtn.addEventListener('click', onFavorBtn);
});

function onFavorBtn(e) {
  const expanded =
    favorMenuRefs.favorBtn.getAttribute('aria-expanded') === 'true' || false;
  favorMenuRefs.favorBtn.closest('.nav-item').classList.toggle('is-open');
  favorMenuRefs.favorBtn.setAttribute('aria-expanded', !expanded);

  favorMenuRefs.favorMenu.classList.toggle('is-open');
}

(() => {
  favorMobMenuRefs.favorMobBtn.addEventListener('click', () => {
    const expanded =
      favorMobMenuRefs.favorMobBtn.getAttribute('aria-expanded') === 'true' ||
      false;
    favorMobMenuRefs.favorMobBtn
      .closest('.favorites')
      .classList.toggle('is-open');
    favorMobMenuRefs.favorMobBtn.setAttribute('aria-expanded', !expanded);

    favorMobMenuRefs.favorMobMenu.classList.toggle('is-open');
  });
})();

refs.mobMenuForm.addEventListener('submit', onMobSubmit);

function onMobSubmit(e) {
  e.preventDefault();

  let searchQuery = e.target.elements[1].value.trim();
  searchCocktailsInput(searchQuery);
  mobMenuRefs.mobileMenu.classList.add('is-hidden');
  mobMenuRefs.body.classList.toggle('no-scroll');
  refs.mobMenuForm.reset();
}
