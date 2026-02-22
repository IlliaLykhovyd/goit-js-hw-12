import{a as m,S as f,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();async function u(t,e=1){return await m("https://pixabay.com/api/",{params:{key:"54644447-a9d060a5df34fd9d263c57df8",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}}).then(s=>s.data)}const p=document.querySelector(".gallery"),L=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function y(t){const e=t.map(o=>`<li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}"><img class="gallery-img" src="${o.webformatURL}" alt="${o.tags}" /></a>
        <div class="total-container">
        <div class="text-container">
        <h3 class="gallery-title">Likes</h3>
        <p class="gallery-text">${o.likes}</p></div>
        <div class="text-container">
        <h3 class="gallery-title">Views</h3>
        <p class="gallery-text">${o.views}</p></div>
        <div class="text-container">
        <h3 class="gallery-title">Comments</h3>
        <p class="gallery-text">${o.comments}</p></div>
        <div class="text-container">
        <h3 class="gallery-title">Downloads</h3>
        <p class="gallery-text">${o.downloads}</p></div>
        </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",e),L.refresh()}function v(){const t=document.querySelector(".gallery");t.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hide")}function d(){document.querySelector(".loader").classList.add("hide")}function b(){document.querySelector(".loadmore-btn").classList.remove("hide")}function S(){document.querySelector(".loadmore-btn").classList.add("hide")}const w=document.querySelector(".form"),q=document.querySelector(".loadmore-btn");let c=1;const g=15;let l="";w.addEventListener("submit",x);function x(t){if(t.preventDefault(),v(),h(),l=t.target.elements.search_text.value.trim(),l===""){d();return}u(l).then(e=>{if(e.hits.length===0)throw new Error;y(e.hits),e.totalHits>g?b():n.error({title:"We`re sorry,",message:"but you`ve reached the end of search results."})}).catch(e=>{n.error({title:"Sorry,",message:"there are no images matching your search query. Please try again!"})}).finally(()=>{t.target.reset(),d()})}q.addEventListener("click",M);function M(t){c++,h(),u(l,c).then(e=>{y(e.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"}),c*g>=e.totalHits&&(S(),n.error({title:"We`re sorry,",message:"but you`ve reached the end of search results."}))}).catch(e=>{n.error({title:"Sorry,",message:"there are no images matching your search query. Please try again!"})}).finally(()=>{d()})}
//# sourceMappingURL=index.js.map
