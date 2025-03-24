import React from 'react';

const SearchBar = ({ query, setQuery, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-lg transition duration-200"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;