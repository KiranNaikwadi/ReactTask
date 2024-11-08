// src/services/api.js
import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

// Fetch popular movies
export const getPopularMovies = async (page = 1) => {
  try {
    const response = await api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching popular movies:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Fetch top-rated movies
export const getTopRatedMovies = async (page = 1) => {
  try {
    const response = await api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Fetch upcoming movies
export const getUpcomingMovies = async (page = 1) => {
  try {
    const response = await api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Fetch movie details by ID
export const getMovieDetails = async (id) => {
  try {
    const response = await api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Fetch search results based on query
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await api.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error searching for movies:", error.response ? error.response.data : error.message);
    throw error;
  }
};
