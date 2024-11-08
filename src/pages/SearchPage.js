// src/pages/SearchPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../services/api';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const SearchPage = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await searchMovies(query, page);
        console.log(`Fetched search results for "${query}" on page ${page}:`, data.results); // Log fetched movies
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError("Failed to search for movies. Please try again later.");
        console.error("Error searching movies:", error);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query, page]);

  return (
    <div className="page-container">
      <h1>Search Results for "{query}"</h1>
      {error ? <p>{error}</p> : <MovieList movies={movies} />}
      <Pagination currentPage={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default SearchPage;
