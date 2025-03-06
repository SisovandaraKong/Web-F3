import React, { useState } from 'react';

const SearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const [pricingType, setPricingType] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Construct the API URL with the query parameters
    const apiUrl = `https://api.example.com/search?q=${keyword}&pricingType=${pricingType}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setResults(data); // Store the results
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5 sm:flex">
        <input
          id="q"
          name="q"
          type="search"
          placeholder="Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="inline w-[500px] rounded-md border border-secondary bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-secondary-hover focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary-hover sm:text-sm"
          autoFocus
        />

        <select
          id="pricingType"
          name="pricingType"
          value={pricingType}
          onChange={(e) => setPricingType(e.target.value)}
          className="w-[200px] h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider sm:mt-0 sm:ml-3"
        >
          <option value="All">All</option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>

        <button
          type="submit"
          className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 font-medium text-white shadow-sm hover:bg-primary-hover-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </form>

      {/* Display Results */}
      {results.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Search Results:</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index} className="mt-2">
                <h3 className="text-lg font-semibold">{result.name}</h3>
                <p>{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
   </>
  );
};

export default SearchForm;
