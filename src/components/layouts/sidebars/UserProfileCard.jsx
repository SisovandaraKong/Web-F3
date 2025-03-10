import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useGetAllUsersQuery } from "../../../feature/service/serviceSlde";

const UserProfileCard = () => {
  const { data: allUser, isLoading, error } = useGetAllUsersQuery();

  console.log("All User in UserProfileCard: ", allUser);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const users = allUser?.data?.content;
  console.log("All User in UserProfileCard: ", users);
  return (
    <div className="w-[278px] h-[168px] mt-5 bg-white dark:bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-indigo-500/50 dark:hover:shadow-blue-900/50">
      {Array.isArray(users) && users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} className="flex items-center space-x-4 p-4">
            <img
              src={
                user.avatar ||
                "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
              }
              alt="user"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h4 className="text-lg font-semibold">
                {user.fullName || "No Name"}{" "}
              </h4>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
      <hr />
      <div className="bg-gray-50 px-4 py-2">
        <button className="w-full bg-gray-50 text-black py-1 rounded-lg font-semibold duration-300 flex items-center justify-center space-x-1 hover:bg-gray-200">
          <PlusIcon className="h-4 w-4 text-gray-800 dark:text-gray-800" />
          <span className="text-xs">Add other account</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
