import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMore = document.querySelector('.loadmore-btn');

let page = 1;
const perPage = 15;
let currentQuery = '';

form.addEventListener('submit', handleSubmit);
async function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  showLoader();
  page = 1;
  hideLoadMoreButton();
  currentQuery = event.target.elements.search_text.value.trim();
  if (currentQuery === '') {
    hideLoader();
    return;
  }
  try {
    const data = await getImagesByQuery(currentQuery);
    if (data.hits.length === 0) {
      throw new Error();
    }
    createGallery(data.hits);
    if (data.totalHits > perPage) {
      showLoadMoreButton();
    } else {
      iziToast.error({
        title: 'We`re sorry,',
        message: 'but you`ve reached the end of search results.',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Sorry,',
      message:
        'there are no images matching your search query. Please try again!',
    });
  } finally {
    event.target.reset();
    hideLoader();
  }
}

loadMore.addEventListener('click', handleLoadMore);
async function handleLoadMore(event) {
  page++;
  hideLoadMoreButton();
  showLoader();
  try {
    const data = await getImagesByQuery(currentQuery, page);
    createGallery(data.hits);
    /**scroll */
    const galleryItem = document.querySelector('.gallery-item');
    if (galleryItem) {
      const cardHeight = galleryItem.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight.height * 2,
        behavior: 'smooth',
      });
    }
    if (page * perPage >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.error({
        title: 'We`re sorry,',
        message: 'but you`ve reached the end of search results.',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Sorry,',
      message:
        'there are no images matching your search query. Please try again!',
    });
  } finally {
    hideLoader();
  }
}
