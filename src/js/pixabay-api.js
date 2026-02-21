import axios from 'axios';

function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: '54644447-a9d060a5df34fd9d263c57df8',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  }).then(response => response.data);
}
export { getImagesByQuery };
