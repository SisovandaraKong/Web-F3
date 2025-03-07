import React, { useState } from 'react';

const SearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const [pricingType, setPricingType] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const apiUrl = `https://api.example.com/search?q=${keyword}&pricingType=${pricingType}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[790px] mx-auto px-4">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Search Input & Button */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <input
            type="text"
            placeholder="Search for the tool you like"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full px-4 h-12 rounded-lg border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700"
          />
          <button
            type="submit"
            className="bg-sky-500 text-white rounded-lg px-5 py-3 md:py-2 w-full md:w-auto transition-all hover:bg-sky-600"
          >
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </div>

        {/* Dropdown */}
        <select
          id="pricingType"
          name="pricingType"
          value={pricingType}
          onChange={(e) => setPricingType(e.target.value)}
          className="w-full h-12 border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sky-600 rounded-lg px-4 py-2 tracking-wider bg-white"
        >
          <option value="All">All</option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </form>

      {/* Display Results */}
      {results.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Search Results:</h2>
          <ul className="mt-2">
            {results.map((result, index) => (
              <li key={index} className="mt-4 p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">{result.name}</h3>
                <p className="text-gray-600">{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
