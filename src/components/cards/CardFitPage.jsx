// import React from "react";
// import { useGetAllServicesQuery } from "../../feature/service/serviceSlde";
// import { useGetAllUsersQuery } from "../../feature/service/serviceSlde";

// const CardFitPage = () => {
//   const { data, isLoading, isError } = useGetAllServicesQuery();
//   const {
//     data: userData,
//     isLoading: usersLoading,
//     error,
//   } = useGetAllUsersQuery();

//   if (isLoading || usersLoading) return <p>Loading services...</p>;
//   if (isError) return <p>Failed to load services</p>;

//   const services = data?.content || [];
//   const users = userData?.data?.content || [];

//   console.log("All services in CardFitPage:", services);
//   console.log("All users in CardFitPage:", users);

//   // Check if we have services to display
//   if (services.length === 0) {
//     return <p>No services available</p>;
//   }

//   return (
//     <div className="bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold text-center mb-6">
//         Available Services
//       </h1>

//       <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
//         {services.map((service, index) => {
//           // Find the user associated with the service
//           const user = users.find((user) => user.id === service.userId);

//           return (
//             <div
//               key={service.id || index}
//               className="bg-white rounded-lg shadow-lg h-auto p-6">
//               {/* Service Info */}
//               <header className="flex items-center justify-between space-x-3">
//                 <div className="flex items-center space-x-3">
//                   {/* User Profile Image or Initial */}
//                   {user ? (
//                     user.profileImageUrl ? (
//                       <img
//                         src={user.profileImageUrl}
//                         alt={user.fullName}
//                         className="w-12 h-12 rounded-full object-cover"
//                       />
//                     ) : (
//                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
//                         <span className="text-blue-600 text-lg font-bold">
//                           {user.fullName?.charAt(0) || "U"}
//                         </span>
//                       </div>
//                     )
//                   ) : (
//                     <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
//                       <span className="text-gray-600 text-lg font-bold">?</span>
//                     </div>
//                   )}

//                   {/* User Information */}
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">
//                       {user?.fullName || "Unknown User"}
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       {service.category?.name || "Uncategorized"}
//                     </p>
//                     <p className="text-xs text-gray-400">
//                       Status: {service.status || "N/A"}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Bookmark Icon */}
//                 <button className="text-gray-400 hover:text-blue-600">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-6 h-6">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 3v18l7-4 7 4V3H5z"
//                     />
//                   </svg>
//                 </button>
//               </header>

//               {/* Service Details */}
//               <section className="mt-3">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {service.title || "Untitled Service"}
//                 </h3>
//                 <p className="text-sm text-gray-800 mb-3">
//                   {service.description || "No description available"}
//                 </p>

//                 {/* Show service image if available */}
//                 {service.jobImages && service.jobImages.length > 0 ? (
//                   <img
//                     src={service.jobImages[0]}
//                     className="w-full rounded-lg max-h-[200px] object-cover"
//                     alt={service.title}
//                   />
//                 ) : (
//                   <div className="w-full h-[150px] bg-gray-200 rounded-lg flex items-center justify-center">
//                     <span className="text-gray-500">No image available</span>
//                   </div>
//                 )}
//               </section>

//               {/* Tags & Details */}
//               <footer className="mt-4 border-t pt-3">
//                 <div className="flex flex-wrap gap-2 text-sm text-blue-600 font-semibold mb-2">
//                   {service.category && (
//                     <span className="px-2 py-1 bg-gray-200 rounded">
//                       #{service.category.name.replace(/\s+/g, "")}
//                     </span>
//                   )}
//                   {service.type && (
//                     <span className="px-2 py-1 bg-gray-200 rounded">
//                       #{service.type}
//                     </span>
//                   )}
//                 </div>

//                 <div className="text-xs text-gray-500 mb-3">
//                   ID: {service.id?.substring(0, 8)}...
//                 </div>

//                 <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
//                   View Details
//                 </button>
//               </footer>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default CardFitPage;
