function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},o=n.parcelRequirefb13;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in s){var e=s[t];delete s[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){s[t]=e},n.parcelRequirefb13=o),o.register("kyEFX",(function(e,n){var i,s;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return s}),(function(t){return s=t}));var o={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},s=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.8c387c73.js","fdzo7":"modal-close.7c95fecb.svg","9v6fF":"symbol-defs.f383fc7b.svg"}'));const a={menuBtn:document.querySelector("[data-menu-button]"),closeMenuBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu__list")},c={favorBtn:document.querySelector("[data-favorite-button]"),favorMenu:document.querySelector("[data-favorites-menu]")};function l(t){localStorage.setItem("theme",t),document.documentElement.className=t}(()=>{function t(){a.mobileMenu.classList.toggle("is-hidden"),a.body.classList.toggle("no-scroll")}a.menuBtn.addEventListener("click",t),a.closeMenuBtn.addEventListener("click",t),a.menuList.addEventListener("click",(function(){a.menuList.classList.add("is-hidden")}))})(),c.favorBtn.addEventListener("click",(()=>{const t="true"===c.favorBtn.getAttribute("aria-expanded")||!1;c.favorBtn.closest(".nav-item").classList.toggle("is-open"),c.favorBtn.setAttribute("aria-expanded",!t),c.favorMenu.classList.toggle("is-open")})),"theme-dark"===localStorage.getItem("theme")?(l("theme-dark"),document.getElementById("slider").checked=!1):(l("theme-light"),document.getElementById("slider").checked=!0);const r={heroList:document.querySelector(".hero-list"),heroTitle:document.querySelector(".hero-text"),hero:document.querySelector(".hero"),select:document.querySelector(".hero-select"),isHiden:document.querySelector(".is-hiden"),coctailTitel:document.querySelector(".coctails-section__title"),cocktalisTitel:document.querySelector(".coctails-section__coctails-list"),herospan:document.querySelector(".hero-span"),heroBox:document.querySelector(".hero-div"),heroSelect:document.querySelector(".hero-boxList"),heroListUl:document.querySelector(".hero-list__ul"),headerinput:document.querySelector(".header-input")},d=document.querySelector(".coctails-section__coctails-list");let u=0;const{heroList:m,heroTitle:h,hero:g,select:p,isHiden:f,heroItem:_,headerinput:v,herospan:b,coctailTitel:L,cocktalisTitel:y,heroBox:k,heroSelect:w,heroListUl:S}=r;const E=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];m.addEventListener("click",(function(t){v.value=" ";const e=t.target.dataset.name,n=t.target,i=t.currentTarget.querySelectorAll(".hero-button");e&&innerWidth>767&&(i.forEach((t=>{t.classList.contains("is-hover")&&t.classList.remove("is-hover")})),n.classList.add("is-hover"),A(e))}));const j=E.map((t=>`<li class=hero-item value=${t} id=${t}>${t}</li>`));const q=function(t){return t.map((t=>`<li class=hero-item >\n        <button class=hero-button data-name=${t}>${t}</button>\n        </li>`))}(E),T='<div class="hero-container">\n</div>';if(innerWidth>767&&(f.classList.add("is-hiden"),m.insertAdjacentHTML("beforeend",q.join("")),g.insertAdjacentHTML("beforeend",T)),innerWidth<767){f.classList.remove("is-hiden"),h.insertAdjacentHTML("beforebegin",T),p.insertAdjacentHTML("beforeend",j.join("")),m.addEventListener("click",(function(t){const e=document.querySelector(".hero-svg"),n=document.querySelector(".hero-span"),i=t.target;i===w||i===n||i===e?(S.classList.remove("is-hiden-select"),S.classList.add("is-hden-select_display")):(S.classList.add("is-hiden-select"),S.classList.remove("is-hden-select_display"));const s=t.target;if(s){const e=t.target.id;e&&A(e).then((t=>{b.textContent=e}))}}))}function A(t){const e=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${t}`;return fetch(e).then((t=>{if(!t)throw new Error(t.message);return t.json()})).then((t=>{const{drinks:n}=t;if(null===n)return function(){d.classList.add("coctails-section-hover"),y.innerHTML="";const t="<div class='coctails-section__coctails-img-div'>\n  <div class='coctails-section__coctails-img'></div>\n  </div>";L.classList.remove("coctails-section__title"),L.classList.add("coctails-section-coctailTitel"),L.textContent="Sorry, we didn't find  any cocktail for you",y.innerHTML=t}();L.classList.add("coctails-section__title"),L.classList.remove("coctails-section-coctailTitel"),d.classList.remove("coctails-section-hover"),y.innerHTML="",L.textContent="Searching results",u=t.drinks.length,mainFunction(1,e,u,d)}))}const $={coctailsSection:document.querySelector(".gallery"),coctailTitel:document.querySelector(".gallery__title"),coctailsList:document.querySelector(".gallery__list")},B=(t="",e="",n="",i="",s=0)=>{t.innerHTML+=`<li class="gallery__item">\n                <img class="gallery__img" src="${n}" alt="${e}" width="280" height="280" />\n                <div class="gallery__card">\n                    <h3 class="gallery__card-title">${e}</h3>\n                    <div class="gallery__card-btns">\n                        <button class="btn__learn coctails-section__learn-button" type="button" data-cocktailId = ${i}>Learn more</button>\n                        <button class="btn__add coctails-section__like-button" type="button" id="likeBtn${s}">\n                            Add to\n                            <svg class="btn__svg" width="18" height="18">\n                                <use href="./images/symbol-defs.svg#icon-Heart-mobile"></use>\n                            </svg>\n                        </button>\n                    </div>\n                </div>\n            </li> `},M=async t=>{const e=await fetch(t);return await e.json()},C=document.querySelector(".js-backdrop-cocktail"),H=document.querySelector(".js-backdrop-ingredient"),x=document.querySelector("[data-modal-cocktail]"),I=document.querySelector("[data-modal-ingredient]"),N=(document.querySelector(".js-modal-list-ingredients"),"https://www.thecocktaildb.com/");async function F(t){return await fetch(`${N}api/json/v1/1/lookup.php?i=${t}`).then((t=>t.json())).catch((t=>console.log(t)))}async function D(t){return await fetch(`${N}api/json/v1/1/search.php?i=${t}`).then((t=>t.json())).catch((t=>console.log(t)))}var R;function W(t,e,n,i,s){return`\n            <div class="modal js-modal-cocktail">\n                <button class="modal__close-button js-modal-close-cocktail" data-modal-cocktail-close>\n                    <svg class="modal__icon js-modal-icon-cocktail" width="32" height="32">\n                        <use href="${R}" />\n                    </svg>\n                </button>\n\n                <h1 class="modal__title">${e}</h1>\n                <div class="modal__content">\n                    <div class="modal__instructions">\n                        <h2 class="modal__subtitle">Instructions:</h2>\n                        <p class="modal__description modal__description--cocktail">${n}</p>\n                    </div>\n                    <img class="modal__image" src="${i}" alt="" width="280" height="280">\n                    <div class="modal__info">\n                        <h3 class="modal__ingredients">INGREDIENTS</h3>\n                        <p class="modal__per-cocktail">Per cocktail</p>\n                        <ul class="modal__list js-modal-list-ingredients">\n                       ${s}\n                        </ul>\n                    </div>\n                </div>\n\n\n                <button class="modal__button modal__button--add" type="button">\n                    Add to favorite\n                </button>\n            </div>\n    `}function O(t="",e="",n="",i=""){return`\n            <div class="modal modal--ingredient ">\n              <button class="modal__close-button modal__close-button-ingredient js-modal-close-ingredient" data-modal-ingredient-close>\n                  <svg class="modal__icon js-modal-icon-ingredient" width="32" height="32">\n                      <use href="./img/modal-close.svg" />\n                  </svg>\n              </button>\n  \n              <h1 class="modal__title modal__title--ingredient">${t}</h1>\n              <h2 class="modal__subtitle modal__subtitle--ingredient">${e}</h2>\n              <p class="modal__description modal__description--ingredient-mobile"><span></span> ${n}</p>\n  \n              <ul class="modal__list">\n\n                <li class="modal__item">\n                    <a class="modal__link js-modal-link" href="#">&sext; Type: ${e}</a>\n                </li>\n                <li class="modal__item">\n                    <a class="modal__link js-modal-link" href="#">&sext; Alcohol: ${i} </a>\n                </li>\n            \n              </ul>\n  \n              <button class="modal__button modal__button--add" type="button">\n                  Add to favorite\n              </button>\n            </div>\n          `}R=new URL(o("kyEFX").resolve("fdzo7"),import.meta.url).toString();let U=null;async function V(t){if(t.target.classList.contains("btn__learn")){let n=await t.target.closest("[data-cocktailId]");const i=await n.dataset.cocktailid;U=await F(i),x.classList.remove("is-hidden"),window.addEventListener("keydown",X);let s=U.drinks[0].strDrink,o=U.drinks[0].strInstructions,a=U.drinks[0].strDrinkThumb,c=function(t){let e=[],n=[],i=[];for(let i in t.drinks[0])i.includes("strMeasure")&&e.push(t.drinks[0][i]),i.includes("strIngredient")&&n.push(t.drinks[0][i]);const s=n.filter(Boolean),o=e.filter(Boolean);let a;a=o.length>=s.length?o.length:s.length;for(let t=0;t<a;t+=1){let e=s[t]?s[t]:"",n=o[t]?o[t]:"";e=e.replace(/\n/g,""),n=n.replace(/\n/g,""),i.push(n+" "+e)}//!+++++++++++++++
return console.log(o),//!+++++++++++++++
console.log(s),//!+++++++++++++++
console.log(i),{resultList:i,modIngredientsList:s}}(U),l=await(e=c.resultList,e.map((t=>`\n        <li class="modal__item" data-ingredient='${t}'>\n          <a class="modal__link js-modal-link" href="#">&sext;${t}</a>\n        </li>\n        `)).join(""));!async function(t,e,n,i,s){try{C.innerHTML=W(0,e,n,i,s)}catch(t){console.log(t.message)}}(0,s,o,a,l)}var e;if(t.target.classList.contains("modal__link")){I.classList.remove("is-hidden"),console.log(U);try{for(let e in U.drinks[0])if(e.includes("strIngredient")&&null!==U.drinks[0][e]&&""!==U.drinks[0][e]&&t.target.textContent.includes(U.drinks[0][e])){let t=await D(U.drinks[0][e]);const n=await t.ingredients[0],i=n.strIngredient,s=n.strType||"no information",o=n.strDescription||"no information";let a="";n.strABV,a="yes"===n.strAlcohol.toLowerCase()&&n.strABV?`${n.strABV} %`:"no information","no"===n.strAlcohol.toLowerCase()&&(a="no alcohol"),H.innerHTML=O(i,s,o,a)}}catch(t){console.log(t)}}else{if(!(t.target.classList.contains("js-modal-close-cocktail")||t.target.classList.contains("js-modal-icon-cocktail")||t.target.classList.contains("js-backdrop-cocktail")))return t.target.classList.contains("modal__close-button-ingredient")||t.target.classList.contains("modal__icon--ingredient")||t.target.classList.contains("js-backdrop-ingredient")?(I.classList.add("is-hidden"),void window.removeEventListener("keydown",X)):void 0;x.classList.add("is-hidden")}}function X(t){"Escape"!==t.code||I.classList.contains("is-hidden")?"Escape"!==t.code||x.classList.contains("is-hidden")||x.classList.add("is-hidden"):I.classList.add("is-hidden")}x.addEventListener("click",V);let P=0,z=0;(t=>{if(!t)return;const e=getComputedStyle(t);P="320px"===e.width?3:"768px"===e.width?6:9})($.coctailsSection),function(t,e,n,i){if(i){t<2&&i&&(i.innerHTML="");for(let s=0;s<n;s+=1)M(e).then((n=>{1===t&&M(e).then((t=>{P=t.drinks.length})),z+=1;let o=0;t&&(o=s);const{strDrinkThumb:a="",strDrink:c="",idDrink:l=""}=n.drinks[o];B(i,c,a,l)})).catch(alert.log)}}(0,"https://www.thecocktaildb.com/api/json/v1/1/random.php",P,$.coctailsList),$.coctailsList.addEventListener("click",V);const G=document.querySelector(".test-button"),J=document.querySelector(".js-backdrop-ingredient"),Z=document.querySelector("[data-modal-ingredient]");async function K(t){return await fetch(`${N}api/json/v1/1/lookup.php?iid=${t}`).then((t=>t.json())).catch((t=>console.log(t)))}G.setAttribute("data-ingredientId","5"),G.addEventListener("click",(async function(t){window.addEventListener("keydown",X),Z.classList.remove("is-hidden");try{let e=await t.target.closest("[data-ingredientId]");const n=await e.dataset.ingredientid;let i=(await K(n)).ingredients[0];const s=i.strIngredient,o=i.strType||"no information",a=i.strDescription||"no information";let c="";c="yes"===i.strAlcohol.toLowerCase()&&i.strABV?`${i.strABV} %`:"no information","no"===i.strAlcohol.toLowerCase()&&(c="no alcohol"),J.innerHTML=O(s,o,a,c)}catch(t){console.log(t.message)}})),Z.addEventListener("click",(async function(t){(t.target.classList.contains("js-modal-close-ingredient")||t.target.classList.contains("js-modal-icon-ingredient")||t.target.classList.contains("js-backdrop-ingredient"))&&Z.classList.add("is-hidden")}));var Q;Q=new URL(o("kyEFX").resolve("9v6fF"),import.meta.url).toString(),refs={pagination:document.querySelector(".pagination")},async function(){const t=await async function(){const t=await fetch("https://jsonplaceholder.typicode.com/posts");return await t.json()}();let n,i=1;window.innerWidth<768?n=3:window.innerWidth>=768&&window.innerWidth<1280?n=6:window.innerWidth>=1280&&(n=9);const s=Math.ceil(t.length/n);function o(t,e,n){const i=document.querySelector(".posts");i.innerHTML="";const s=e*--n,o=s+e;t.slice(s,o).forEach((t=>{const e=document.createElement("div");e.classList.add("post"),e.innerText=`${t.title}`,i.appendChild(e)}))}function a(t,n){const s=document.querySelector(".pagination");s.innerHTML="";const o=Math.ceil(t.length/n),a=document.createElement("ul");a.classList.add("pagination-list"),i>1&&a.appendChild(c(1)),i>3&&a.appendChild(r()),i>2&&a.appendChild(c(i-1)),a.appendChild(c(i)),i<o-1&&a.appendChild(c(i+1)),i<o-2&&a.appendChild(r()),i!==o&&a.appendChild(c(o)),s.appendChild(a),function(t){const n=document.querySelector(".pagination-list"),i=document.createElement("li"),s=document.createElement("li"),o=document.createElement("button"),a=document.createElement("button");o.classList.add("pagination-btn--back"),o.setAttribute("data-page","back"),a.classList.add("pagination-btn--forward"),a.setAttribute("data-page","forward"),o.setAttribute("type","button"),a.setAttribute("type","button"),o.setAttribute("disabled","true"),i.append(o),s.append(a),n.prepend(i),n.append(s),i.classList.add("pagination-nav-btn--back"),s.classList.add("pagination-nav-btn--forward"),liElBtnSvgBack=`<svg class="search-icon" width="24" height="24">\n        <use href="${e(Q)+"#icon-arrow_left"}"></use>\n      </svg>`,liElBtnSvgForward=`<svg class="search-icon" width="24" height="24">\n        <use href="${e(Q)+"#icon-arrow_right"}"></use>\n      </svg>`,o.innerHTML+=liElBtnSvgBack,a.innerHTML+=liElBtnSvgForward,liElBtnSvgBack.href=e(Q)+"#icon-arrow_left"}(),l(i)}function c(t){const e=document.createElement("li");return e.classList.add("pagination-btn"),e.innerText=t,i==t&&e.classList.add("pagination-btn-active"),e.setAttribute("data-page",t),e}function l(t){const e=refs.pagination.firstElementChild.children,n=refs.pagination.firstElementChild.firstElementChild.firstElementChild,o=refs.pagination.firstElementChild.lastElementChild.firstElementChild;for(const n of e)isNaN(Number(n.dataset.page))||(Number(n.dataset.page)===t?n.classList.add("pagination-btn-active"):n.classList.remove("pagination-item-active"));1===i&&n.setAttribute("disabled","true"),i>1&&n.removeAttribute("disabled"),i===s?o.setAttribute("disabled","true"):o.removeAttribute("disabled")}function r(){const t=document.createElement("li");t.classList.add("pagination__item");const n=`<svg class="search-icon" width="24" height="24">\n        <use href="${e(Q)+"#icon-three_points"}"></use>\n      </svg>`;return t.innerHTML+=n,t}refs.pagination.addEventListener("click",(e=>{const s=e.target.dataset.page;s&&("back"===s&&(i-=1),"forward"===s&&(i+=1),isNaN(Number(s))||(i=Number(s)),o(t,n,i),a(t,n))})),o(t,n,i),a(t,n)}();
//# sourceMappingURL=index.8c387c73.js.map