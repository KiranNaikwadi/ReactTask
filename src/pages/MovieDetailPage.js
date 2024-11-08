// src/pages/MovieDetailPage.js
import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '../services/api';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id);
        console.log("Fetched movie details:", data); // Log the fetched movie details
        setMovie(data);
      } catch (error) {
        setError("Failed to fetch movie details. Please try again later.");
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <div>
        <h2>Details</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetailPage;
