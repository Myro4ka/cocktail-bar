!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequirefb13;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){t[e]=o},e.parcelRequirefb13=n);var r=n("gQOBw"),a=n("dWbaE"),l=n("jcFG7"),i=n("lIxsd"),c=n("gaAvG"),s=n("8wyQL");n("8S4BJ"),n("3GCax"),n("10uvC"),(0,r.onAuthStateChanged)(a.auth,(()=>{(0,c.getCocktails)().then((e=>{if(console.log("response",e),!e){const e="<p>You haven't added any favorite cocktails yet</p>";return void document.querySelector(".gallery.container").insertAdjacentHTML("beforeend",e)}const o=[];Object.entries(e).forEach((([e,t])=>{o.push(+t),console.log(o)}));const t=[];o.map((e=>{console.log(e),(0,s.getCocktailById)(e).then((({drinks:e})=>{for(const o of e)t.push(o);(0,l.main)(t),i.refs.coctailTitel.textContent="Favorite cocktails"}))}))})).catch((e=>{console.log(e)}))}))}();
//# sourceMappingURL=favorites-c.95004fa6.js.map
