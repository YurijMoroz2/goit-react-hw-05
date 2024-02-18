import axios from 'axios';
// --------------------------------------------

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'd2875cd0f60fdd7ac441126fbbb20124';
const options = {
  params: {
    api_key: API_KEY,
    include_adult: false,
    language: 'en-US',
    page: 1,
  },
};

export const getPopularMovies = async ({ abortController }) => {
  const response = await axios.get(
    // '/movie/popular?',
    '/trending/movie/day?',
    // '/movie/top_rated?',
    {
      params: {
        ...options.params,
      },
    },
    { signal: abortController.signal }
  );

  return response.data.results;
};

export const getMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?`, {
    params: { ...options.params },
  });
  return response.data;
};
// -------------------------------------------------
export const getSearchMovies = async query => {
  const response = await axios.get('/search/movie?', {
    params: {
      ...options.params,
      query: query,
    },
  });

  return response.data.results;
};
// ------------------------------------------

export const getMovieCredits = async id => {
  const response = await axios.get(`/movie/${id}/credits?`, {
    params: {
      ...options.params,
    },
  });

  return response.data.cast;
};

export const getMovieReviews = async id => {
  const reviews = await axios.get(`/movie/${id}/reviews`, {
    params: { ...options.params },
  });
  console.log(reviews);
  return reviews.data.results;
};
