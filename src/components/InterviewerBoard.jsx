import React from "react";
function InterviewerBoard() {
  return (
    <div className="w-full border border-gray-300 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Interviewer Board</h2>
        <button className="bg-yellow-400 px-3 py-1 rounded text-sm">
          Add new post
        </button>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="p-2 border-b border-gray-300">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th className="p-2 border-b border-gray-300">Name</th>
            <th className="p-2 border-b border-gray-300">Expertise</th>
            <th className="p-2 border-b border-gray-300">Department</th>
            <th className="p-2 border-b border-gray-300">Type</th>
            <th className="p-2 border-b border-gray-300">Fees</th>
            <th className="p-2 border-b border-gray-300">Rating</th>
            <th className="p-2 border-b border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-b border-gray-300">
              <input type="checkbox" className="form-checkbox" />
            </td>
            <td className="p-2 border-b border-gray-300 flex items-center">
              <img
                src="path-to-net-image.jpg"
                alt="Net"
                className="w-8 h-8 rounded-full mr-2"
              />
              Net
            </td>
            <td className="p-2 border-b border-gray-300">Communication</td>
            <td className="p-2 border-b border-gray-300">Design</td>
            <td className="p-2 border-b border-gray-300">📝</td>
            <td className="p-2 border-b border-gray-300">$250</td>
            <td className="p-2 border-b border-gray-300">⭐️</td>
            <td className="p-2 border-b border-gray-300">...</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300">
              <input type="checkbox" className="form-checkbox" />
            </td>
            <td className="p-2 border-b border-gray-300 flex items-center">
              <img
                src="path-to-panha-image.jpg"
                alt="Panha"
                className="w-8 h-8 rounded-full mr-2"
              />
              Panha
            </td>
            <td className="p-2 border-b border-gray-300">Communication</td>
            <td className="p-2 border-b border-gray-300">Management</td>
            <td className="p-2 border-b border-gray-300">📝</td>
            <td className="p-2 border-b border-gray-300">$400</td>
            <td className="p-2 border-b border-gray-300">⭐️</td>
            <td className="p-2 border-b border-gray-300">...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InterviewerBoard;
