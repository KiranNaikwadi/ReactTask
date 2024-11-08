// src/pages/TopRatedPage.js
import React, { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../services/api';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTopRatedMovies(page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError("Failed to fetch top-rated movies. Please try again later.");
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div className="page-container">
      <h1>Top Rated Movies</h1>
      {error ? <p>{error}</p> : <MovieList movies={movies} />}
      <Pagination currentPage={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default TopRatedPage;
