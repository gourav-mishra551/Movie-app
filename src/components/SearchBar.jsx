import React, { useState, useEffect, useRef } from 'react';

const SearchBar = ({ query, setQuery, onSearch }) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const lastSearchedQuery = useRef(''); 

  useEffect(() => {
    if (!debouncedQuery.trim() || debouncedQuery === lastSearchedQuery.current) return; 
    
    const handler = setTimeout(() => {
      onSearch(debouncedQuery);
      lastSearchedQuery.current = debouncedQuery; 
    }, 500);

    return () => clearTimeout(handler);
  }, [debouncedQuery]); 

  const handleChange = (e) => {
    setQuery(e.target.value);
    setDebouncedQuery(e.target.value);
  };

  return (
    <div className="mb-8 flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a movie..."
        className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
      <button 
        type="button" 
        onClick={() => {
          if (query.trim() && query !== lastSearchedQuery.current) {
            onSearch(query);
            lastSearchedQuery.current = query;
          }
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-lg transition duration-200 shadow-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;