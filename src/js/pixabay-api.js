import axios from 'axios';
async function getImagesByQuery(query, page = 1) {
  const response = await axios('https://pixabay.com/api/', {
    params: {
      key: '54644447-a9d060a5df34fd9d263c57df8',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
}
export { getImagesByQuery };
