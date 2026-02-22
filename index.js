import{a as p,S as L,i}from"./assets/vendor-B5nsgUv9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();async function y(t,e=1){return(await p("https://pixabay.com/api/",{params:{key:"54644447-a9d060a5df34fd9d263c57df8",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const v=document.querySelector(".gallery"),b=new L(".gallery-link",{captionsData:"alt",captionDelay:250});function h(t){const e=t.map(o=>`<li class="gallery-item">
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
        </li>`).join("");v.insertAdjacentHTML("beforeend",e),b.refresh()}function w(){const t=document.querySelector(".gallery");t.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hide")}function d(){document.querySelector(".loader").classList.add("hide")}function f(){document.querySelector(".loadmore-btn").classList.remove("hide")}function u(){document.querySelector(".loadmore-btn").classList.add("hide")}const S=document.querySelector(".form"),q=document.querySelector(".loadmore-btn");let l=1;const m=15;let n="";S.addEventListener("submit",x);async function x(t){if(t.preventDefault(),w(),g(),l=1,u(),n=t.target.elements.search_text.value.trim(),n===""){d();return}try{const e=await y(n);if(e.hits.length===0)throw new Error;h(e.hits),e.totalHits>m?f():i.error({title:"We`re sorry,",message:"but you`ve reached the end of search results."})}catch{i.error({title:"Sorry,",message:"there are no images matching your search query. Please try again!"})}finally{t.target.reset(),d()}}q.addEventListener("click",M);async function M(t){l++,u(),g();try{const e=await y(n,l);h(e.hits);const o=document.querySelector(".gallery-item");if(o){const s=o.getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"})}l*m>=e.totalHits?(u(),i.error({title:"We`re sorry,",message:"but you`ve reached the end of search results."})):f()}catch{i.error({title:"Sorry,",message:"there are no images matching your search query. Please try again!"})}finally{d()}}
//# sourceMappingURL=index.js.map
