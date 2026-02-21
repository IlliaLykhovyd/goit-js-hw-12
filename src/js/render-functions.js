import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
function createGallery(images) {
  const markup = images
    .map(
      item => `<li class="gallery-item">
        <a class="gallery-link" href="${item.largeImageURL}"><img class="gallery-img" src="${item.webformatURL}" alt="${item.tags}" /></a>
        <div class="total-container">
        <div class="text-container">
        <h3 class="gallery-title">Likes</h3>
        <p class="gallery-text">${item.likes}</p></div>
        <div class="text-container">
        <h3 class="gallery-title">Views</h3>
        <p class="gallery-text">${item.views}</p></div>
        <div class="text-container">
        <h3 class="gallery-title">Comments</h3>
        <p class="gallery-text">${item.comments}</p></div>
        <div class="text-container">
        <h3 class="gallery-title">Downloads</h3>
        <p class="gallery-text">${item.downloads}</p></div>
        </div>
        </li>`
    )
    .join('');
  gallery.innerHTML = markup;
  lightbox.refresh();
}

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hide');
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hide');
}
export { createGallery, clearGallery, showLoader, hideLoader };
