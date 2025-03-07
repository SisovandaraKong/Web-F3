import React, { useState } from 'react';

const SearchFormJobPost = () => {
  const [keyword, setKeyword] = useState('');
  const [pricingType, setPricingType] = useState('All');
  const [industry, setIndustry] = useState('All');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');
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
    <div className="w-full max-w-[1296px] h-[196px] mx-auto px-4 bg-gray-200 rounded-lg py-[42px]">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 h-full">
        {/* Search Input & Button */}
        <div className="flex flex-col md:flex-row items-center gap-2 h-[50px]">
          <input
            type="text"
            placeholder="Search for the tool you like"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full md:w-[1138.65px] h-[48px] px-4 rounded-lg border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700"
          />
          <button
            type="submit"
            className="bg-sky-500 text-white rounded-lg px-5 py-3 md:py-2 w-full md:w-auto transition-all hover:bg-sky-600 h-[48px]"
          >
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col md:flex-row justify-between mt-[21px] gap-3">
          <select
            id="industry"
            name="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full md:w-[273.48px] h-[48px] border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sky-600 rounded-lg px-4 py-2 tracking-wider bg-white"
          >
            <option value="All">Industry: All</option>
            <option value="Tech">Tech</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>

          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-[273.48px] h-[48px] border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sky-600 rounded-lg px-4 py-2 tracking-wider bg-white"
          >
            <option value="All">Category: All</option>
            <option value="Freelance">Freelance</option>
            <option value="Full-Time">Full-Time</option>
          </select>

          <select
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full md:w-[273.48px] h-[48px] border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sky-600 rounded-lg px-4 py-2 tracking-wider bg-white"
          >
            <option value="All">Location: All</option>
            <option value="Remote">Remote</option>
            <option value="On-Site">On-Site</option>
          </select>
        </div>
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

export default SearchFormJobPost;
