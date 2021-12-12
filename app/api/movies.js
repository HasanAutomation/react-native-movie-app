import axios from 'axios';
const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=b3dd2551850bedc0bbfc6f8204c8fd11';

// Get popular movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return resp.data.results;
};
// Get upcoming movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return resp.data.results;
};

// Get popular movies
export const getPopularTv = async () => {
  const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  return resp.data.results;
};
