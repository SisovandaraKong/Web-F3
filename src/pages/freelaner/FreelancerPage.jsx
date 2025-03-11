import React, { useState } from "react";
import ScrollIndicator from "../../components/scrollIndicator/scrollIndicator";
import CardJob from "../../components/cards/CardJob";

export default function FreelancerPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Ideally, this should be dynamic from API response

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <ScrollIndicator />

      <main className="max-w-screen-xl mx-auto p-4">
        {/* Pass the currentPage as a prop ✅ */}
        <CardJob page={currentPage} />

        {/* Pagination UI */}
        <ol className="flex justify-center gap-2 mt-4">
          {/* Previous Page */}
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 border ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Prev
            </button>
          </li>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 border ${
                    currentPage === page ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {page}
                </button>
              </li>
            );
          })}

          {/* Next Page */}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 border ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </li>
        </ol>
      </main>
    </>
  );
}
