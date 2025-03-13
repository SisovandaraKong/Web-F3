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
      <main className="max-w-screen-xl mx-auto p-4">
        <section className="bg-primary-hover h-[200px] text-white flex items-center justify-center rounded-lg overflow-hidden mb-10 "></section>
        <section className="border-b-2 py-1">
          <h2 className="text-3xl font-bold ">
            What The Bussiness Owner Need.
          </h2>
        </section>
        <section className="mt-10">
          <CardJob page={currentPage} />
        </section>
        <section>
          <ol className="flex justify-center gap-2 mt-4">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 border ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}>
                Prev
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <li key={page}>
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 border ${
                      currentPage === page ? "bg-blue-500 text-white" : ""
                    }`}>
                    {page}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 border ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}>
                Next
              </button>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
