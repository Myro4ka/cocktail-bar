!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequirefb13;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequirefb13=o);var r=o("eMcUM"),a=o("dWbaE"),i=o("jcFG7"),c=o("lIxsd"),s=o("gaAvG"),l=o("8wyQL"),u=o("jPJgY"),d=o("3HD7f");o("gaAvG");a=o("dWbaE");u.refsSearch.form.addEventListener("submit",(function(e){e.preventDefault();let t=e.target.elements[1].value.trim();(0,d.searchCocktailsInput)(t),u.refsSearch.form.reset()})),u.refsSearch.authBtn.addEventListener("click",(function(e){a.auth.currentUser?(e.currentTarget.classList.contains("is-active")&&e.currentTarget.classList.remove("is-active"),(0,a.signOutUser)(),location.reload()):(e.currentTarget.classList.add("is-active"),(0,a.oNsignInWithPopup)())})),o("8S4BJ"),o("3GCax"),o("10uvC"),(0,r.onAuthStateChanged)(a.auth,(e=>{e?(0,s.getCocktails)().then((e=>{if(c.refs.coctailTitel.textContent="Favorite cocktails",console.log("response",e),!e){const e="<p>You haven't added any favorite cocktails yet</p>";return void document.querySelector(".gallery.container").insertAdjacentHTML("beforeend",e)}const t=[];Object.entries(e).forEach((([e,n])=>{t.push(+n)}));const n=[],o=t.map((e=>(0,l.getCocktailById)(e)));Promise.all(o).then((e=>{for(const{drinks:t}of e)n.push(t[0]);console.log(n),(0,i.main)(n),c.refs.coctailTitel.textContent="Favorite cocktails"}))})).catch((e=>{console.log(e)})):location.replace("/")}))}();
//# sourceMappingURL=favorites-c.6ce2a1ca.js.map
