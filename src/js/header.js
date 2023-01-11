// import { getCocktailsByName } from './header/api/search';
import { refsSearch } from './header/refs/search';
import { searchCocktailsInput } from './header/api/search';
import mainFunction from './gallery';

refsSearch.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let searchQuery = e.target.elements[1].value.trim();
  searchCocktailsInput(searchQuery);
  refsSearch.form.reset();
}
