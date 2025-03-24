import React from 'react';

const MovieDetail = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              {movie.Poster !== 'N/A' ? (
                <img 
                  src={movie.Poster} 
                  alt={movie.Title} 
                  className="w-full md:w-64 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                />
              ) : (
                <div className="w-full md:w-64 h-96 bg-gray-200 flex items-center justify-center rounded-lg mb-4 md:mb-0 md:mr-6">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
              
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{movie.Title}</h2>
                <p className="text-gray-600 mb-4">{movie.Year} • {movie.Rated} • {movie.Runtime}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Genre</p>
                  <p className="text-gray-800">{movie.Genre}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Director</p>
                  <p className="text-gray-800">{movie.Director}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Actors</p>
                  <p className="text-gray-800">{movie.Actors}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">IMDB Rating</p>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-800">{movie.imdbRating}/10</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Plot</h3>
              <p className="text-gray-700">{movie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;