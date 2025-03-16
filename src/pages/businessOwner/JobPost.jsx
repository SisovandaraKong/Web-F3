import React, { useState } from "react";
import ScrollIndicator from "../../components/scrollIndicator/scrollIndicator";
import CardJob from "../../components/cards/businessOwner/CardJob";

export default function JobPost() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <ScrollIndicator />
      <main className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-4 bg-gray-50 dark:bg-gray-900">
        <section className="bg-blue-600 dark:bg-blue-800 h-40 sm:h-[200px] text-white flex items-center justify-center rounded-lg overflow-hidden mb-6 sm:mb-10"></section>
        <section className="border-b-2 py-1 sm:py-2 border-gray-300 dark:border-gray-700">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
            What The Business Owner Need.
          </h2>
        </section>
        <section className="mt-6 sm:mt-10">
          <CardJob page={currentPage} />
        </section>
        <section>
          <ol className="flex justify-center gap-1 sm:gap-2 mt-4 sm:mt-6">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 dark:border-gray-600 text-sm sm:text-base rounded-md ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                    : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Prev
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <li key={page}>
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 dark:border-gray-600 text-sm sm:text-base rounded-md ${
                      currentPage === page
                        ? "bg-blue-500 dark:bg-blue-600 text-white"
                        : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 dark:border-gray-600 text-sm sm:text-base rounded-md ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                    : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Next
              </button>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}