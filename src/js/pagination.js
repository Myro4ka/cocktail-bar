import sprite from '../images/symbol-defs.svg';
import { addBtn, removeBtn } from './gallery/render/render';
import { getUser } from './gallery';

const refs = {
  pagination: document.querySelector('.pagination'),
};

export function main(postsData) {
  refs.pagination.classList.remove('visually-hidden');
  console.log(postsData);
  let currentPage = 1;
  let page = 1;
  let rows;
  if (window.innerWidth < 768) {
    rows = 3;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    rows = 6;
  } else if (window.innerWidth >= 1280) {
    rows = 9;
  }
  const pagesCount = Math.ceil(postsData.length / rows);

  function displayList(arrData, rowPerPage, page) {
    const postsEl = document.querySelector('.gallery__list');
    postsEl.innerHTML = '';
    page--;
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);
    getUser(paginatedData, postsEl);
  }

  function displayPagination(arrData, rowPerPage) {
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const paginationEl = document.querySelector('.pagination');
    paginationEl.innerHTML = '';
    if (pagesCount === 1) {
      return;
    }

    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination-list');
    // firstpage
    if (currentPage > 1) {
      ulEl.appendChild(displayPaginationBtn(1));
    }
    if (currentPage > 3) {
      ulEl.appendChild(displaySeparator());
    }
    if (currentPage > 2) {
      ulEl.appendChild(displayPaginationBtn(currentPage - 1));
    }
    //currentpage
    ulEl.appendChild(displayPaginationBtn(currentPage));
    if (currentPage < pagesCount - 1) {
      ulEl.appendChild(displayPaginationBtn(currentPage + 1));
    }
    if (currentPage < pagesCount - 2) {
      ulEl.appendChild(displaySeparator());
    }
    //lastpage
    if (currentPage !== pagesCount)
      ulEl.appendChild(displayPaginationBtn(pagesCount));
    paginationEl.appendChild(ulEl);
    displayNavigationBtn(currentPage);
    setActiveEl(currentPage);
  }
  function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination-btn');
    liEl.innerText = page;
    if (currentPage == page) liEl.classList.add('pagination-btn-active');
    liEl.setAttribute('data-page', page);
    return liEl;
  }
  function displayNavigationBtn(page) {
    const ulList = document.querySelector('.pagination-list');
    const libtnElBack = document.createElement('li');
    const libtnElForward = document.createElement('li');
    const btnElBack = document.createElement('button');
    const btnElForward = document.createElement('button');
    btnElBack.classList.add('pagination-btn--back');
    btnElBack.setAttribute('data-page', 'back');
    btnElForward.classList.add('pagination-btn--forward');
    btnElForward.setAttribute('data-page', 'forward');
    btnElBack.setAttribute('type', 'button');
    btnElForward.setAttribute('type', 'button');
    btnElBack.setAttribute('disabled', 'true');
    libtnElBack.append(btnElBack);
    libtnElForward.append(btnElForward);
    ulList.prepend(libtnElBack);
    ulList.append(libtnElForward);
    libtnElBack.classList.add('pagination-nav-btn--back');
    libtnElForward.classList.add('pagination-nav-btn--forward');
    const liElBtnSvgBack = `<svg class="search-icon" width="24" height="24">
        <use href="${sprite + '#icon-arrow_left'}"></use>
      </svg>`;
    const liElBtnSvgForward = `<svg class="search-icon" width="24" height="24">
        <use href="${sprite + '#icon-arrow_right'}"></use>
      </svg>`;
    btnElBack.innerHTML += liElBtnSvgBack;
    btnElForward.innerHTML += liElBtnSvgForward;
  }
  function setActiveEl(page) {
    const children = refs.pagination.firstElementChild.children;
    const backBat =
      refs.pagination.firstElementChild.firstElementChild.firstElementChild;
    const forwBat =
      refs.pagination.firstElementChild.lastElementChild.firstElementChild;
    for (const child of children) {
      if (!isNaN(Number(child.dataset.page))) {
        if (Number(child.dataset.page) === page) {
          child.classList.add('pagination-btn-active');
        } else {
          child.classList.remove('pagination-item-active');
        }
      }
    }
    if (currentPage === 1) {
      backBat.setAttribute('disabled', 'true');
    }
    if (currentPage > 1) {
      backBat.removeAttribute('disabled');
    }
    if (currentPage === pagesCount) {
      forwBat.setAttribute('disabled', 'true');
    } else {
      forwBat.removeAttribute('disabled');
    }
  }
  refs.pagination.addEventListener('click', evt => {
    const action = evt.target.dataset.page;
    if (!action) return;
    if (action === 'back') {
      currentPage -= 1;
    }
    if (action === 'forward') {
      currentPage += 1;
    }

    if (!isNaN(Number(action))) {
      currentPage = Number(action);
    }
    displayList(postsData, rows, currentPage);
    displayPagination(postsData, rows);
  });
  function displaySeparator() {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    const liElSvg = `<svg class="search-icon" width="24" height="24">
        <use href="${sprite + '#icon-three_points'}"></use>
      </svg>`;
    liEl.innerHTML += liElSvg;
    return liEl;
  }
  displayList(postsData, rows, currentPage);
  displayPagination(postsData, rows);
}
