import axios from 'axios';

const KEY = '34667101-9710bd17cfb75e50a5c2acb1d';
const BASE_URL = 'https://pixabay.com/api';

const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data.hits;
};

export default apiService;
