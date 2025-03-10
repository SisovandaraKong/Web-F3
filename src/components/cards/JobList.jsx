import React from "react";
import CardJob from "./CardJob";
import jobListings from "../../data/mockData";

export default function JobList() {
  return (
    <div className="">
      {jobListings.map((job, index) => (
        <CardJob key={index} job={job} />
      ))}
    </div>
  );
}
