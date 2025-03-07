import React from "react";
import CardJob from "./CardJob";
import jobListings from "../../data/mockData";

export default function JobList() {
  return (
<div className="grid max-w-screen-xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
      {jobListings.map((job, index) => (
        <CardJob key={index} job={job} />
      ))}
    </div>
  );
}
