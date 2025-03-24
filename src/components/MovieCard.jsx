import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200 cursor-pointer"
    >
      {movie.Poster !== 'N/A' ? (
        <img 
          src={movie.Poster} 
          alt={movie.Title} 
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No image available</span>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">{movie.Title}</h2>
        <p className="text-sm text-gray-600">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
