import{a as n,S as c,i as d}from"./assets/vendor-DQiTczw4.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();function u(r){return n("https://pixabay.com/api/",{params:{key:"54644447-a9d060a5df34fd9d263c57df8",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(l=>l.data)}const f=document.querySelector(".gallery"),y=new c(".gallery-link",{captionsData:"alt",captionDelay:250});function g(r){const l=r.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}"><img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" /></a>
        <div class="total-container">
        <div class="text-container">
        <h3 class="gallery-title">Likes</h3>
        <p class="gallery-text">${t.likes}</p></div>
        <div class="text-container">
        <h3 class="gallery-title">Views</h3>
        <p class="gallery-text">${t.views}</p></div>
        <div class="text-container">
        <h3 class="gallery-title">Comments</h3>
        <p class="gallery-text">${t.comments}</p></div>
        <div class="text-container">
        <h3 class="gallery-title">Downloads</h3>
        <p class="gallery-text">${t.downloads}</p></div>
        </div>
        </li>`).join("");f.innerHTML=l,y.refresh()}function h(){const r=document.querySelector(".gallery");r.innerHTML=""}function m(){document.querySelector(".loader").classList.remove("hide")}function i(){document.querySelector(".loader").classList.add("hide")}const p=document.querySelector(".form");p.addEventListener("submit",L);function L(r){r.preventDefault(),h(),m();const l=r.target.elements.search_text.value.trim();if(l===""){i();return}u(l).then(t=>{if(t.hits.length===0)throw new Error;g(t.hits)}).catch(t=>{d.error({title:"Sorry,",message:"there are no images matching your search query. Please try again!"})}).finally(()=>{r.target.reset(),i()})}
//# sourceMappingURL=index.js.map
