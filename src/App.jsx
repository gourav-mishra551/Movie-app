import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = 'cdce3058';
  const API_URL = 'https://www.omdbapi.com/';

  useEffect(() => {
    fetchDefaultMovies();
  }, []);

  const fetchDefaultMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}?s=batman&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError('Failed to fetch default movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = async (searchQuery) => {
    if (searchQuery.trim() === '') return;
    setLoading(true);
    setError(null);
    setSelectedMovie(null);
    try {
      const response = await fetch(`${API_URL}?s=${searchQuery}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (error) {
      setError('Failed to fetch movies. Please try again.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieDetails = async (imdbID) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?i=${imdbID}&plot=full&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setSelectedMovie(data);
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError('Failed to fetch movie details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Movie Search</h1>
        <SearchBar query={query} setQuery={setQuery} onSearch={searchMovies} />
        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && movies.length > 0 && !selectedMovie && (
          <MovieGrid movies={movies} onMovieClick={fetchMovieDetails} />
        )}
        {selectedMovie && (
          <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
        {!loading && !error && movies.length === 0 && !selectedMovie && query && (
          <p className="text-center text-gray-600">No movies found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};

export default App;