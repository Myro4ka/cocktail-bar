!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},s=n.parcelRequirefb13;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},n.parcelRequirefb13=s),s.register("iE7OH",(function(t,n){var i,o;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},o=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("aNJCr",(function(t,n){var i;e(t.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var o={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),o[e]=t),t}})),s("iE7OH").register(JSON.parse('{"EVgbq":"index.7aca6f3c.js","kxKJ3":"symbol-defs.470fc44e.svg","4apKi":"modal-close.7c95fecb.svg"}'));const a={menuBtn:document.querySelector("[data-menu-button]"),closeMenuBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu__list")},r={favorBtn:document.querySelector("[data-favorite-button]"),favorMenu:document.querySelector("[data-favorites-menu]")},c={mobMenuForm:document.querySelector(".mob-menu .search-form"),mobInputForm:document.querySelector(".mob-menu .searchQuery")},l={form:document.querySelector(".search-form"),inputForm:document.querySelector(".searchQuery"),mobMenuForm:document.querySelector(".mob-menu .search-form"),mobInputForm:document.querySelector(".mob-menu .searchQuery"),cocktailsTitle:document.querySelector(".gallery__title"),cocktailsList:document.querySelector(".gallery__list")};var d;function u(e){refs.pagination.classList.remove("visually-hidden"),console.log(e);let n,i=1;window.innerWidth<768?n=3:window.innerWidth>=768&&window.innerWidth<1280?n=6:window.innerWidth>=1280&&(n=9);const o=Math.ceil(e.length/n);function s(e,t,n){const i=document.querySelector(".gallery__list");i.innerHTML="";const o=t*--n,s=o+t;e.slice(o,s).forEach((({strDrink:e,strDrinkThumb:t,idDrink:n,coctailNumber:o})=>{i.innerHTML+=`<li class="gallery__item">\n                <img class="gallery__img" src="${t}" alt="${e}" width="280" height="280" />\n                <div class="gallery__card">\n                    <h3 class="gallery__card-title">${e}</h3>\n                    <div class="gallery__card-btns">\n                        <button class="btn__learn coctails-section__learn-button" type="button" data-cocktailId = ${n}>Learn more</button>\n                        <button class="btn__add coctails-section__like-button" type="button" id="likeBtn0">\n                            Add to\n                            <svg class="btn__svg" width="18" height="18">\n                                <use href="./images/symbol-defs.svg#icon-Heart-mobile"></use>\n                            </svg>\n                        </button>\n                    </div>\n                </div>\n            </li> `}))}function a(e,n){const o=document.querySelector(".pagination");if(e.length<=9)return void o.classList.add("visually-hidden");o.innerHTML="";const s=Math.ceil(e.length/n),a=document.createElement("ul");a.classList.add("pagination-list"),i>1&&a.appendChild(r(1)),i>3&&a.appendChild(l()),i>2&&a.appendChild(r(i-1)),a.appendChild(r(i)),i<s-1&&a.appendChild(r(i+1)),i<s-2&&a.appendChild(l()),i!==s&&a.appendChild(r(s)),o.appendChild(a),function(e){const n=document.querySelector(".pagination-list"),i=document.createElement("li"),o=document.createElement("li"),s=document.createElement("button"),a=document.createElement("button");s.classList.add("pagination-btn--back"),s.setAttribute("data-page","back"),a.classList.add("pagination-btn--forward"),a.setAttribute("data-page","forward"),s.setAttribute("type","button"),a.setAttribute("type","button"),s.setAttribute("disabled","true"),i.append(s),o.append(a),n.prepend(i),n.append(o),i.classList.add("pagination-nav-btn--back"),o.classList.add("pagination-nav-btn--forward"),liElBtnSvgBack=`<svg class="search-icon" width="24" height="24">\n        <use href="${t(d)+"#icon-arrow_left"}"></use>\n      </svg>`,liElBtnSvgForward=`<svg class="search-icon" width="24" height="24">\n        <use href="${t(d)+"#icon-arrow_right"}"></use>\n      </svg>`,s.innerHTML+=liElBtnSvgBack,a.innerHTML+=liElBtnSvgForward,liElBtnSvgBack.href=t(d)+"#icon-arrow_left"}(),c(i)}function r(e){const t=document.createElement("li");return t.classList.add("pagination-btn"),t.innerText=e,i==e&&t.classList.add("pagination-btn-active"),t.setAttribute("data-page",e),t}function c(e){const t=refs.pagination.firstElementChild.children,n=refs.pagination.firstElementChild.firstElementChild.firstElementChild,s=refs.pagination.firstElementChild.lastElementChild.firstElementChild;for(const n of t)isNaN(Number(n.dataset.page))||(Number(n.dataset.page)===e?n.classList.add("pagination-btn-active"):n.classList.remove("pagination-item-active"));1===i&&n.setAttribute("disabled","true"),i>1&&n.removeAttribute("disabled"),i===o?s.setAttribute("disabled","true"):s.removeAttribute("disabled")}function l(){const e=document.createElement("li");e.classList.add("pagination__item");const n=`<svg class="search-icon" width="24" height="24">\n        <use href="${t(d)+"#icon-three_points"}"></use>\n      </svg>`;return e.innerHTML+=n,e}refs.pagination.addEventListener("click",(t=>{const o=t.target.dataset.page;o&&("back"===o&&(i-=1),"forward"===o&&(i+=1),isNaN(Number(o))||(i=Number(o)),s(e,n,i),a(e,n))})),s(e,n,i),a(e,n)}d=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("kxKJ3"),refs={pagination:document.querySelector(".pagination")};const m={coctailsSection:document.querySelector(".gallery"),coctailTitel:document.querySelector(".gallery__title"),coctailsList:document.querySelector(".gallery__list"),addLikeBtn:document.querySelector(".coctails-section__like-button"),paginationDiv:document.querySelector(".pagination")};function h(){m.coctailTitel.textContent="Sorry, we didn't find any cocktail for you",m.coctailsList.innerHTML="<div class='coctails-section__coctails-img-div'>\n  <div class='coctails-section__coctails-img'></div>\n  </div>",m.paginationDiv.classList.add("visually-hidden")}const g=async e=>{const t=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`;return await fetch(t).then((e=>e.json())).then((e=>{const{drinks:t}=e;if(null===t)return h();l.cocktailsTitle.textContent="Cocktails",u(t)}))};function f(e){localStorage.setItem("theme",e),document.documentElement.className=e}(()=>{function e(){a.mobileMenu.classList.toggle("is-hidden"),a.body.classList.toggle("no-scroll")}a.menuBtn.addEventListener("click",e),a.closeMenuBtn.addEventListener("click",e),a.menuList.addEventListener("click",(function(){a.menuList.classList.add("is-hidden")}))})(),r.favorBtn.addEventListener("click",(()=>{const e="true"===r.favorBtn.getAttribute("aria-expanded")||!1;r.favorBtn.closest(".nav-item").classList.toggle("is-open"),r.favorBtn.setAttribute("aria-expanded",!e),r.favorMenu.classList.toggle("is-open")})),c.mobMenuForm.addEventListener("submit",(function(e){e.preventDefault();let t=e.target.elements[1].value.trim();g(t),a.mobileMenu.classList.add("is-hidden"),a.body.classList.toggle("no-scroll"),c.mobMenuForm.reset()})),"theme-dark"===localStorage.getItem("theme")?(f("theme-dark"),document.getElementById("slider").checked=!1):(f("theme-light"),document.getElementById("slider").checked=!0);const b=(e="",t="",n="",i="",o=0)=>{e.innerHTML+=`<li class="gallery__item">\n                <img class="gallery__img" src="${n}" alt="${t}" width="280" height="280" />\n                <div class="gallery__card">\n                    <h3 class="gallery__card-title">${t}</h3>\n                    <div class="gallery__card-btns">\n                        <button class="btn__learn coctails-section__learn-button" type="button" data-cocktailId = ${i}>Learn more</button>\n                        <button class="btn__add coctails-section__like-button" type="button" id="likeBtn${o}">\n                            Add to\n                            <svg class="btn__svg" width="18" height="18">\n                                <use href="./images/symbol-defs.svg#icon-Heart-mobile"></use>\n                            </svg>\n                        </button>\n                    </div>\n                </div>\n            </li> `},p=async e=>{const t=await fetch(e);return await t.json()},_=document.querySelector(".js-backdrop-cocktail"),v=document.querySelector(".js-backdrop-ingredient"),y=document.querySelector("[data-modal-cocktail]"),L=document.querySelector("[data-modal-ingredient]"),k=(document.querySelector(".js-modal-list-ingredients"),"https://www.thecocktaildb.com/");async function w(e){return await fetch(`${k}api/json/v1/1/lookup.php?i=${e}`).then((e=>e.json())).catch((e=>console.log(e)))}async function S(e){return await fetch(`${k}api/json/v1/1/search.php?i=${e}`).then((e=>e.json())).catch((e=>console.log(e)))}var E;function q(e,t,n,i){return`\n            <div class="modal js-modal-cocktail">\n                <button class="modal__close-button js-modal-close-cocktail" data-modal-cocktail-close>\n                    <svg class="modal__icon js-modal-icon-cocktail" width="32" height="32">\n                        <use href="${E}" />\n                    </svg>\n                </button>\n\n                <h1 class="modal__title">${e}</h1>\n                <div class="modal__content">\n                    <div class="modal__instructions">\n                        <h2 class="modal__subtitle">Instructions:</h2>\n                        <p class="modal__description modal__description--cocktail">${t}</p>\n                    </div>\n                    <img class="modal__image" src="${n}" alt="" width="280" height="280">\n                    <div class="modal__info">\n                        <h3 class="modal__ingredients">INGREDIENTS</h3>\n                        <p class="modal__per-cocktail">Per cocktail</p>\n                        <ul class="modal__list js-modal-list-ingredients">\n                       ${i}\n                        </ul>\n                    </div>\n                </div>\n\n\n                <button class="modal__button modal__button--add" type="button">\n                    Add to favorite\n                </button>\n            </div>\n    `}function j(e,t){let n="",i="";for(let o=0;o<t.length;o+=1)n=t[o],i+=`\n       <li class="modal__item" data-ingredient='${n}'>\n         <a class="modal__link js-modal-link" href="#">&sext;${e[o]}</a>\n      </li>\n      `;return i}function $(e="",t="",n="",i=""){return`\n            <div class="modal modal--ingredient ">\n              <button class="modal__close-button modal__close-button-ingredient js-modal-close-ingredient" data-modal-ingredient-close>\n                  <svg class="modal__icon js-modal-icon-ingredient" width="32" height="32">\n                      <use href="./img/modal-close.svg" />\n                  </svg>\n              </button>\n  \n              <h1 class="modal__title modal__title--ingredient">${e}</h1>\n              <h2 class="modal__subtitle modal__subtitle--ingredient">${t}</h2>\n              <p class="modal__description modal__description--ingredient-mobile"><span></span> ${n}</p>\n  \n              <ul class="modal__list">\n\n                <li class="modal__item">\n                    <a class="modal__link js-modal-link" href="#">&sext; Type: ${t}</a>\n                </li>\n                <li class="modal__item">\n                    <a class="modal__link js-modal-link" href="#">&sext; Alcohol: ${i} </a>\n                </li>\n            \n              </ul>\n  \n              <button class="modal__button modal__button--add" type="button">\n                  Add to favorite\n              </button>\n            </div>\n          `}async function T(e){if(!e.target.classList.contains("js-modal-link"))return;let t=(await e.target.closest("[data-ingredient]")).dataset.ingredient;const n=await S(t),i=n.ingredients[0].strIngredient,o=n.ingredients[0].strType||"no information",s=n.ingredients[0].strDescription||"no information";let a="";n.ingredients[0].strABV,a="yes"===n.ingredients[0].strAlcohol.toLowerCase()&&n.ingredients[0].strABV?`${n.ingredients[0].strABV} %`:"no information","no"===n.ingredients[0].strAlcohol.toLowerCase()&&(a="no alcohol"),L.classList.remove("is-hidden"),v.innerHTML=$(i,o,s,a)}function A(e){"Escape"!==e.code||L.classList.contains("is-hidden")?"Escape"!==e.code||y.classList.contains("is-hidden")||y.classList.add("is-hidden"):L.classList.add("is-hidden")}function B(){y.classList.add("is-hidden"),document.body.style.overflow="visible"}E=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("4apKi"),_.addEventListener("click",(e=>{(e.target.classList.contains("js-modal-close-cocktail")||e.target.classList.contains("js-modal-icon-cocktail")||e.target.classList.contains("js-backdrop-cocktail"))&&B(),(e.target.classList.contains("modal__close-button-ingredient")||e.target.classList.contains("modal__icon--ingredient")||e.target.classList.contains("js-backdrop-ingredient"))&&(L.classList.add("is-hidden"),window.removeEventListener("keydown",A))}));let M=0,C=0;(e=>{if(!e)return;const t=getComputedStyle(e);M="320px"===t.width?3:"768px"===t.width?6:9})(m.coctailsSection),function(e,t,n,i){if(i){e<2&&i&&(i.innerHTML="");for(let o=0;o<n;o+=1)p(t).then((n=>{1===e&&p(t).then((e=>{M=e.drinks.length})),C+=1;let s=0;e&&(s=o);const{strDrinkThumb:a="",strDrink:r="",idDrink:c=""}=n.drinks[s];b(i,r,a,c)})).catch(alert.log)}}(0,"https://www.thecocktaildb.com/api/json/v1/1/random.php",M,m.coctailsList),m.coctailsList.addEventListener("click",(async function(e){try{if(!e.target.classList.contains("btn__learn"))return;const t=e.target.dataset.cocktailid;!async function(e){y.classList.remove("is-hidden"),document.body.style.overflow="hidden",window.addEventListener("keydown",A),document.body;let t=e.drinks[0].strDrink,n=e.drinks[0].strInstructions,i=e.drinks[0].strDrinkThumb,o=function(e){let t=[],n=[],i=[];for(let i in e.drinks[0])i.includes("strMeasure")&&t.push(e.drinks[0][i]),i.includes("strIngredient")&&n.push(e.drinks[0][i]);const o=n.filter(Boolean),s=t.filter(Boolean);let a;a=s.length>=o.length?s.length:o.length;for(let e=0;e<a;e+=1){let t=o[e]?o[e]:"",n=s[e]?s[e]:"";t=t.replace(/\n/g,""),n=n.replace(/\n/g,""),i.push(n+" "+t)}return{resultList:i,modIngredientsList:o}}(e),s=j(o.resultList,o.modIngredientsList);!async function(e,t,n,i,o){try{_.innerHTML=q(e,t,n,i)}catch(e){console.log(e.message)}}(t,n,i,s);document.querySelector(".js-modal-close-cocktail").addEventListener("click",B);document.querySelector(".js-modal-list-ingredients").addEventListener("click",T)}(await w(t))}catch(e){console.log(e)}})),l.form.addEventListener("submit",(function(e){e.preventDefault();let t=e.target.elements[1].value.trim();g(t),l.form.reset()}));const H={heroList:document.querySelector(".hero-list"),heroTitle:document.querySelector(".hero-text"),hero:document.querySelector(".hero"),select:document.querySelector(".hero-select"),isHiden:document.querySelector(".is-hiden"),coctailsTitle:document.querySelector(".gallery__title"),coctailsList:document.querySelector(".gallery__list"),herospan:document.querySelector(".hero-span"),heroBox:document.querySelector(".hero-div"),heroSelect:document.querySelector(".hero-boxList"),heroListUl:document.querySelector(".hero-list__ul")};function x(e){return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`).then((e=>{if(!e)throw new Error(e.message);return e.json()})).then((e=>{const{drinks:t}=e;if(null===t)return h();H.coctailsTitle.textContent="Cocktails",u(t)}))}const{heroList:I,heroTitle:N,hero:D,select:F,isHiden:O,heroItem:R,herospan:V,coctailTitel:U,cocktalisTitel:W,heroBox:J,heroSelect:K,heroListUl:Q}=H;const P=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];function z(e){return e.map((e=>`<li class=hero-item value=${e} id=${e}>${e}</li>`))}I.addEventListener("click",(function(e){const t=e.target.dataset.name,n=e.target,i=e.currentTarget.querySelectorAll(".hero-button");t&&innerWidth>767&&(i.forEach((e=>{e.classList.contains("is-hover")&&e.classList.remove("is-hover")})),n.classList.add("is-hover"),x(t))}));const G=z(P),X=P.map((e=>`<li class=hero-item >\n        <button class=hero-button data-name=${e}>${e}</button>\n        </li>`));const Y='<div class="hero-container">\n</div>';if(innerWidth>767&&(O.classList.add("is-hiden"),I.insertAdjacentHTML("beforeend",X.join("")),D.insertAdjacentHTML("beforeend",Y)),innerWidth<767){O.classList.remove("is-hiden"),N.insertAdjacentHTML("beforebegin",Y),F.insertAdjacentHTML("beforeend",G.join("")),I.addEventListener("click",(function(e){const t=document.querySelector(".hero-svg"),n=document.querySelector(".hero-span"),i=e.target;i===K||i===n||i===t?(Q.classList.remove("is-hiden-select"),Q.classList.add("is-hden-select_display")):(Q.classList.add("is-hiden-select"),Q.classList.remove("is-hden-select_display"));const o=e.target;if(o){const t=e.target.id;t&&x(t).then((e=>{V.textContent=t}))}}))}const Z=document.querySelector(".test-button"),ee=document.querySelector(".js-backdrop-ingredient"),te=document.querySelector("[data-modal-ingredient]");async function ne(e){return await fetch(`${k}api/json/v1/1/lookup.php?iid=${e}`).then((e=>e.json())).catch((e=>console.log(e)))}Z.setAttribute("data-ingredientId","5"),Z.addEventListener("click",(async function(e){window.addEventListener("keydown",A),te.classList.remove("is-hidden"),document.body.style.overflow="hidden";try{let t=await e.target.closest("[data-ingredientId]");const n=await t.dataset.ingredientid;let i=(await ne(n)).ingredients[0];const o=i.strIngredient,s=i.strType||"no information",a=i.strDescription||"no information";let r="";r="yes"===i.strAlcohol.toLowerCase()&&i.strABV?`${i.strABV} %`:"no information","no"===i.strAlcohol.toLowerCase()&&(r="no alcohol"),ee.innerHTML=$(o,s,a,r)}catch(e){console.log(e.message)}})),te.addEventListener("click",(async function(e){(e.target.classList.contains("js-modal-close-ingredient")||e.target.classList.contains("js-modal-icon-ingredient")||e.target.classList.contains("js-backdrop-ingredient"))&&(te.classList.add("is-hidden"),document.body.style.overflow="visible")}))}();
//# sourceMappingURL=index.7aca6f3c.js.map
