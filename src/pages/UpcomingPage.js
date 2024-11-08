// src/pages/UpcomingPage.js
import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../services/api';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getUpcomingMovies(page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError("Failed to fetch upcoming movies. Please try again later.");
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div className="page-container">
      <h1>Upcoming Movies</h1>
      {error ? <p>{error}</p> : <MovieList movies={movies} />}
      <Pagination currentPage={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default UpcomingPage;
