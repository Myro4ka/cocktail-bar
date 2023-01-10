import { mobMenuRefs, favorMenuRefs } from './refs/mob-menu.js';
import { refs } from './refs/mob-menu';
import { searchCocktailsInput } from './api/search';

(() => {
  mobMenuRefs.menuBtn.addEventListener('click', toggleMenu);
  mobMenuRefs.closeMenuBtn.addEventListener('click', toggleMenu);
  mobMenuRefs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    mobMenuRefs.mobileMenu.classList.toggle('is-hidden');
    mobMenuRefs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    mobMenuRefs.menuList.classList.add('is-hidden');
  }
})();

(() => {
  favorMenuRefs.favorBtn.addEventListener('click', () => {
    const expanded =
      favorMenuRefs.favorBtn.getAttribute('aria-expanded') === 'true' || false;
    favorMenuRefs.favorBtn.closest('.nav-item').classList.toggle('is-open');
    favorMenuRefs.favorBtn.setAttribute('aria-expanded', !expanded);

    favorMenuRefs.favorMenu.classList.toggle('is-open');
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
