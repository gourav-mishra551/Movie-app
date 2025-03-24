import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, onMovieClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID} 
          movie={movie} 
          onClick={() => onMovieClick(movie.imdbID)} 
        />
      ))}
    </div>
  );
};

export default MovieGrid;