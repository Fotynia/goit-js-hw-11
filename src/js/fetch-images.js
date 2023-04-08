import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '35204304-987dd101a1aa4d0efee9e74fc';

async function fetchImages(query, page, perPage) {
  const url = `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  const response = await axios.get(url);
  return response;
}

export { fetchImages };