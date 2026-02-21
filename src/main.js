import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  showLoader();
  const userValue = event.target.elements.search_text.value.trim();
  if (userValue === '') {
    hideLoader();
    return;
  }
  getImagesByQuery(userValue)
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error();
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Sorry,',
        message:
          'there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      event.target.reset();
      hideLoader();
    });
}
