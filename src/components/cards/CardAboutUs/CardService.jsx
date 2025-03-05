import React from "react";
export default function CardService() {
  return (
    <>
      <div className="min-w-md flex flex-col items-center w-fit ">
      <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className=" bg-amber-50 border border-gray-200 rounded-lg shadow-sm py-5  text-center p-10">
          <h3 className="text-CardMainTitle font-bold mx-4 text-primary mt-3">
            Freelancer
          </h3>
          <h3 className="text-CardSubTitle font-bold text-2b407f mt-8 ">
            A freelancer is a self-employed professional who works on various
            projects for different clients without long-term commitments.
          </h3>
        </div>
        <div className=" bg-amber-50 border border-gray-200 rounded-lg shadow-sm py-5  text-center p-10">
          <h3 className="text-CardMainTitle font-bold mx-4 text-primary mt-3">
            Business Owner
          </h3>
          <h3 className="text-CardSubTitle font-bold text-2b407f mt-8 ">
            A business owner is someone who starts, manages, and oversees a
            company, taking responsibility for its success and growth.
          </h3>
        </div>
        <div className=" bg-amber-50 border border-gray-200 rounded-lg shadow-sm py-5  text-center p-10">
          <h3 className="text-CardMainTitle font-bold mx-4 text-primary mt-3">
            Job Seeker
          </h3>
          <h3 className="text-CardSubTitle font-bold text-2b407f mt-8 ">
            A job seeker is someone actively looking for employment
            opportunities to start or advance their career.
          </h3>
        </div>
      </div>
      </div>
    </>
  );
}
