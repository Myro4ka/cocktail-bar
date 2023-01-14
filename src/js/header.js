import './header/mob-menu';
import './switcher';
import { refsSearch } from './header/refs/search';
import { searchCocktailsInput } from './header/api/search';
// import { getUserId } from './auth/api';
import { auth, oNsignInWithPopup, signOutUser } from './auth/api/auth';
import { onChecked } from './switcher';

console.log(refsSearch.switchBtn);
refsSearch.switchBtn.addEventListener('change', onChecked);

refsSearch.form.addEventListener('submit', onSubmit);

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
}
