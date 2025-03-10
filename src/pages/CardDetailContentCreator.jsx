import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
const CardDetailContentCreator = () => {
  return (
    <div className="dark:bg-black p-20">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary">Portfolio work </h2>
          <Link to="/userSeeFreelancerProjectContentCreator">
            <RxCrossCircled className="text-red-600 text-2xl" />
          </Link>
        </div>
        <h3 className="text-TabText font-semibold mt-1">
          Vodafone Carbon clock tool UI/UX Website design
        </h3>
        <img
          src="https://s3-alpha-sig.figma.com/img/dd2b/3cf1/6d3ccef41c76d3d14f05fe276a4e5b39?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oYw3cNiViH~w1BWfyyb-aBc3lncz0gXDcei3bcx3ATwBQrNcepHaVp9o2NIJeMhOMlMRLnjfYsNalJo3lWOugFgiKMW9P7WaVKUpZlV1talktCqA~5EfNykTmIu~gymXJmcHlDcSHmGhrMNmwsK-G-xOydoLn6WGOTuHH1yCALxlUKiXV4JZFJDNgOHeJJZfRD-5pNimEPt2sZEK-e-k80RI3GTefnlA-1y~sKzqaK-TFgdtlPNT5LPoScPaRuuj6EcNQdcVFBjLiNDUJHcwlaUgwp0ZfUd9T4~r8CO5ZWDu-SV7~X5ttvWYk6dWVwr3Cfv~5cNiGztE90jq9v5ztQ__"
          alt="Portfolio preview"
          className="w-full h-48 object-cover rounded-lg mt-3"
        />
        <div className="mt-4">
          <h4 className="text-xl font-bold text-primary">Core Skills</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {[...Array(9)].map((_, i) => (
              <span
                key={i}
                className="bg-gray-200 text-primary px-3 py-1 rounded-md text-sm"
              >
                Flutter development
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-xl font-bold text-primary">Description</h4>
          <p className="text-TabText font-semibold mt-1">
            Some description entered here as a description for the work
            portfolio to showcase skills and talented abilities
          </p>
          <a
            href="https://undraw.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary mt-2 inline-block"
          >
            https://undraw.co/
          </a>
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-lg mt-4 hover:bg-primary-hover">
          Copy link
        </button>
      </div>
    </div>
  );
};

export default CardDetailContentCreator;
