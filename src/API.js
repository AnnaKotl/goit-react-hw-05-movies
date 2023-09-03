import axios from 'axios';

const API_KEY = '92ffd126667a269ee6cc7b4221abb134';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchData = async (way, data) => {
  const response = await axios.get
    (`${way}?api_key=${API_KEY}${data ?? ''}`);
  return response.data;
};