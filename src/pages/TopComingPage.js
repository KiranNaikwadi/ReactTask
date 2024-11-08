// src/pages/TopComingPage.js
import React, { useEffect, useState } from 'react';
import { getTopRatedMovies, getUpcomingMovies } from '../services/api';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const TopComingPage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topPage, setTopPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [totalPagesTop, setTotalPagesTop] = useState(0);
  const [totalPagesUpcoming, setTotalPagesUpcoming] = useState(0);

  // Fetch Top Rated Movies
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const data = await getTopRatedMovies(topPage);
        setTopRatedMovies(data.results);
        setTotalPagesTop(data.total_pages);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, [topPage]);

  // Fetch Upcoming Movies
  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const data = await getUpcomingMovies(upcomingPage);
        setUpcomingMovies(data.results);
        setTotalPagesUpcoming(data.total_pages);
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    };

    fetchUpcomingMovies();
  }, [upcomingPage]);

  return (
    <div className="page-container">
      <h1>Top Rated Movies</h1>
      <MovieList movies={topRatedMovies} />
      <Pagination currentPage={topPage} setPage={setTopPage} totalPages={totalPagesTop} />

      <h1>Upcoming Movies</h1>
      <MovieList movies={upcomingMovies} />
      <Pagination currentPage={upcomingPage} setPage={setUpcomingPage} totalPages={totalPagesUpcoming} />
    </div>
  );
};

export default TopComingPage;
