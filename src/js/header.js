import './header/mob-menu';
import './switcher';
import { onAuthStateChanged } from '@firebase/auth';
import { refsSearch } from './header/refs/search';
import { searchCocktailsInput } from './header/api/search';
import { auth, oNsignInWithPopup, signOutUser } from './auth/api/auth';
import { onChecked } from './switcher';
import { Block } from 'notiflix/build/notiflix-block-aio';
onAuthStateChanged(auth, () => {
  if (auth.currentUser) {
    if (refsSearch.authBtn.classList.contains('is-active')) {
      refsSearch.authBtn.classList.remove('is-active');
    }
    refsSearch.authBtn.classList.add('is-active');
  }
  return;
});

refsSearch.switchBtn.addEventListener('change', onChecked);

refsSearch.form.addEventListener('submit', onSubmit);
if (window.location.href.includes('favorites')) {
  refsSearch.form.removeEventListener('submit', onSubmit);
}
function onSubmit(e) {
  e.preventDefault();

  let searchQuery = e.target.elements[1].value.trim();
  searchCocktailsInput(searchQuery);
  refsSearch.form.reset();
}

refsSearch.authBtn.addEventListener('click', onClickAuthBtn);

function onClickAuthBtn(e) {
  if (auth.currentUser) {
    if (e.currentTarget.classList.contains('is-active')) {
      e.currentTarget.classList.remove('is-active');
    }
    signOutUser();
    location.reload();
  } else {
    e.currentTarget.classList.add('is-active');
    oNsignInWithPopup();
  }
  Block.arrows('.gallery', {
    svgSize: '200px',
  });
  Block.remove('.gallery', 2000);
}
