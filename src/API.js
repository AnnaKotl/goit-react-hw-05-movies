import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '92ffd126667a269ee6cc7b4221abb134';

// найпопулярніші фільми
export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/all/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// пошук фільмів за ключовим словом
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
        language: 'en-US',
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

// отримання повної інформації про фільм
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// отримання інформації про акторський склад фільму
export const getMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// отримання оглядів фільму
export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
