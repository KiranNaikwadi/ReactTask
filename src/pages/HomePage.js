// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/api';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log("Fetching movies for page:", page);
        const data = await getPopularMovies(page);
        console.log(`Fetched movies for page ${page}:`, data.results);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError("Failed to fetch popular movies. Please try again later.");
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div className="page-container">
      <h1>Popular Movies</h1>
      {error ? <p>{error}</p> : <MovieList movies={movies} />}
      <Pagination currentPage={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default HomePage;
