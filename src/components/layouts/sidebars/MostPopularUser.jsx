import React from "react";
import { useGetAllUsersQuery } from "../../../feature/service/serviceSlde";
import { NavLink } from "react-router";

export const MostPopularUser = () => {
  const { data: allUser, isLoading, error } = useGetAllUsersQuery();

  console.log("All User in UserProfileCard: ", allUser);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const users = allUser?.data?.content;
  console.log("All User in MostPopularUser: ", users);

  return (
    <div className="max-w-sm mx-auto mt-3 p-5 rounded-xl bg-white-background">
      <h2 className="text-TabText font-bold text-gray-900 mb-3">
        The most Popular Freelancers
      </h2>
      {users.map((user, index) => (
        <NavLink
          key={index}
          className="flex items-center space-x-4 p-4 hover:bg-gray-100 rounded-lg">
          <div
            key={index}
            className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
            <div className="flex items-center">
              <img
                className="rounded-full h-10 w-10"
                src={
                  user.img ||
                  "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png "
                }
                alt={user.name}
              />
              <div className="ml-2 flex flex-col">
                <span className="leading-snug text-sm text-gray-900 font-bold">
                  {user.fullName}
                </span>
                <span className="leading-snug text-xs text-gray-600">
                  {user.email || "No Username"}
                </span>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
      <button className="mt-3 w-full h-10 text-md font-bold text-blue-600 border border-blue-400 rounded-full hover:bg-blue-100">
        See More
      </button>
    </div>
  );
};
