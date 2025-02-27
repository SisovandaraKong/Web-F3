import React from "react";

function TableEmployer({ title }) {
  return (
    <section className="bg-white p-4 rounded shadow mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Recently Hiring</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="p-2">
              <input type="checkbox" />
            </th>
            <th className="p-2">Job Title</th>
            <th className="p-2">Department</th>
            <th className="p-2">Interviewer</th>
            <th className="p-2">Shortlisted</th>
            <th className="p-2">RWJ</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-2">
              <input type="checkbox" />
            </td>
            <td className="p-2">IOS Developer</td>
            <td className="p-2">Department</td>
            <td className="p-2">
              <img
                src="https://i.pinimg.com/736x/97/19/57/971957285e02f297f480ad87a0cfec98.jpg"
                alt="Interviewer"
                className="rounded-full w-10 h-10 object-cover"
              />
            </td>
            <td className="p-2">30</td>
            <td className="p-2">15</td>
            <td className="p-2">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
            </td>
            <td className="p-2">
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-t">
            <td className="p-2">
              <input type="checkbox" />
            </td>
            <td className="p-2">UX/UI Designer</td>
            <td className="p-2">Design</td>
            <td className="p-2">
              <img
                src="https://i.pinimg.com/474x/5a/03/cf/5a03cf6f31a9a4265d107a460c12afa0.jpg" // Replace with your image URL
                alt="Interviewer"
                className="rounded-full w-10 h-10 object-cover"
              />
            </td>
            <td className="p-2">15</td>
            <td className="p-2">10</td>
            <td className="p-2">
              <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
            </td>
            <td className="p-2">
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-center mt-4">
        <button className="text-blue-500 hover:text-blue-700">View More</button>
      </div>
    </section>
  );
}

export default TableEmployer;
