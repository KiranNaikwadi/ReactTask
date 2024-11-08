// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      {movie.poster_path ? (
        <img src={imageUrl} alt={movie.title} />
      ) : (
        <div className="no-image">No Image Available</div>
      )}
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
