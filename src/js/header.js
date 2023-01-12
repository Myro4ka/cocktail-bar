import { refsSearch } from './header/refs/search';
import { searchCocktailsInput } from './header/api/search';
import { getUserId } from './auth/api';
import { oNsignInWithPopup } from './auth/api/auth';

refsSearch.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let searchQuery = e.target.elements[1].value.trim();
  searchCocktailsInput(searchQuery);
  refsSearch.form.reset();
}

refsSearch.authBtn.addEventListener('click', onClickAuthBtn);
refsSearch.authBtn.addEventListener('click', oNsignInWithPopup);

function onClickAuthBtn(e) {
  e.currentTarget.classList.add('is-active');
  if (e.currentTarget.classList.contains('is-active')) {
    e.currentTarget.classList.remove('is-active');
  }
}
