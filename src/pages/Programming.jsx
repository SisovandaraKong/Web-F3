import React from "react";
import { FaTv } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Programming() {
  const historyPosts = Array(9).fill({
    status: "Process",
    title: "INTERACTIVE DASHBOARD",
    description:
      "Logo design for a decoration and wood company. The idea of the logo is to be the letter L Logotype Textual",
  });

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FaTv className="text-[#0a2473] size-10 mr-4 dark:text-white" />
          <h1 className="text-[38px] font-semibold text-[#111827] dark:text-white">
            Programming
          </h1>
        </div>
        <Link to="/">
          <button className="bg-[#0a2473] text-white px-3 py-1 rounded-md text-[12px]">
            Back
          </button>
        </Link>
      </div>

      <div className="bg-white dark:bg-[#111827] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg font-medium text-gray-700 mb-4 dark:text-gray-200">
          About about my service
        </h2>
        <p className="text-gray-600 mb-8 dark:text-gray-300">
          Recently, I had traveled to my parents for a quiet weekend at home. It
          was warm, sunny, and I was studying for upcoming interviews. I already
          had a dedicated notebook full of details from company websites, job
          postings, online presentations, recruiter YouTube videos about
          navigating the corporate interview process and I had even looked at
          what tools some of these companies offered that I could familiarize
          myself with should it come up in conversation.
        </p>
      </div>
      <div className="my-6"></div>
      <div>
        <h1 className="text-3xl font-bold text-[#0a2473] my-6 dark:text-white">
          Our History Post
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {historyPosts.map((post, index) => (
            <div
              key={index}
              className="p-4 rounded-lg flex flex-row items-center w-[390px] h-[185px]"
            >
              <div className="mr-2">
                <div className="w-[104px] h-[147px] mb-4 flex items-center justify-center">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c338/9e29/e0e8df4e39403cbbd55713bd502e0397?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YfgPAvvd53CYlu7h7OgtbjSM5jQQGvLxJRXYJw2bocWbTpYKb4g6bhthHNxzz5OwIZZELxqhNR7vRFbwI-vCfuaffSXEFWDsIDahzgPNj8~PktAaSZBgfqPagoaBCr9UvocGwT3iYy6YOBZdcRCwxR9B9E8dotTH0hhU7CZErT0RMMU1LDVSQDphl77svE8~V~KdajbxgnV7ffKjkozHnYulmZ6F05uTPrpwMvKZLPUusNVKUJbVPbCJRDovCZF53IZeX9xxuyBmQFt23PJp8fGyCfHedCqi1FbO~560Ax3ZAiE46STUp748xIFWUnW7zX3jlvQ0p7cHAa9aDpW3sg__"
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-2">
                <span className="bg-[#BB8F06] text-white text-sm px-[10px] py-[2px] w-[66px] h-[22px] rounded-lg mb-2 ">
                  {post.status}
                </span>

                <h3 className="text-[19px] font-[600] text-[#111827] mb-2 text-left w-[253]">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-left text-sm mb-2 dark:text-gray-300">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}