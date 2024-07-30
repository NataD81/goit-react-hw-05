import axios from "axios";

const API_KEY = "4345275f3edde49997ebc24337e1c573";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/day`, {
      params: { api_key: API_KEY },
    })
    .then((response) => response.data.results);
};

export const searchMovies = (query) => {
  return axios
    .get(`${BASE_URL}/search/movie`, {
      params: { query, api_key: API_KEY },
    })
    .then((response) => response.data.results);
};

export const fetchMovieDetails = (movieId) => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}`, {
      params: { api_key: API_KEY },
    })
    .then((response) => response.data);
};

export const fetchMovieCredits = (movieId) => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: { api_key: API_KEY },
    })
    .then((response) => response.data.cast);
};

export const fetchMovieReviews = (movieId) => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: { api_key: API_KEY },
    })
    .then((response) => response.data.results);
};
