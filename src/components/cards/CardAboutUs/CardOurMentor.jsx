// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";

// export default function CardOurMentor() {
//   return (
//     <>
//       <div className="mt-15 grid grid-cols-1 md:grid-cols-2 px-36 gap-10">
//         <div data-aos="fade-right" className="max-w-sm p-5 ">
//           <div className="flex justify-center items-center ">
//             <h1 className="text-4xl font-bold text-blue-900 relative inline-block">
//               Kay Keo
//             </h1>
//           </div>
//           <a href="#">
//             <img
//               className="rounded-t-lg h-[200px] object-contain w-full mt-10"
//               src="src/assets/imgAboutUs/Keo Kay.png"
//               alt=""
//             />
//           </a>
//           <div className="flex justify-center mt-6 space-x-4 text-2xl text-gray-900 dark:text-gray-500">
//             <FaGithub />
//             <FaTelegramPlane />
//             <FaLinkedinIn />
//             <MdOutlineMailOutline />
//           </div>
//         </div>
//         <div data-aos="fade-left" className="max-w-sm p-5 ">
//           <div className="flex justify-center items-center ">
//             <h1 className="text-4xl font-bold text-blue-900 relative inline-block">
//               Proeung Chiso
//             </h1>
//           </div>
//           <a href="#">
//             <img
//               className="rounded-t-lg h-[200px] object-contain w-full mt-10"
//               src="src/assets/imgAboutUs/cherChiso.png"
//               alt=""
//             />
//           </a>
//           <div className="flex justify-center mt-6 space-x-4 text-2xl text-gray-900 dark:text-gray-500">
//             <FaGithub />
//             <FaTelegramPlane />
//             <FaLinkedinIn />
//             <MdOutlineMailOutline />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import React from "react";
// import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";

// export default function CardOurMentor() {
//   const mentors = [
//     {
//       name: "Kay Keo",
//       imgSrc: "src/assets/imgAboutUs/Keo Kay.png",
//     },
//     {
//       name: "Proeung Chiso",
//       imgSrc: "src/assets/imgAboutUs/cherChiso.png",
//     },
//   ];

//   return (
//     <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-16 lg:px-36">
//       {mentors.map((mentor, index) => (
//         <div key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} className="max-w-sm mx-auto p-5 bg-white shadow-lg rounded-lg">
//           <div className="flex justify-center items-center">
//             <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
//               {mentor.name}
//             </h1>
//           </div>
//           <a href="#">
//             <img
//               className="rounded-lg h-52 md:h-60 object-cover w-full mt-6"
//               src={mentor.imgSrc}
//               alt={mentor.name}
//             />
//           </a>
//           <div className="flex justify-center mt-6 space-x-4 text-2xl text-gray-900 dark:text-gray-500">
//             <FaGithub className="cursor-pointer hover:text-blue-600" />
//             <FaTelegramPlane className="cursor-pointer hover:text-blue-600" />
//             <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
//             <MdOutlineMailOutline className="cursor-pointer hover:text-blue-600" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React from "react";
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function CardOurMentor() {
  const mentors = [
    {
      name: "Kay Keo",
      imgSrc: "src/assets/imgAboutUs/CherKeo.png",
    },
    {
      name: "Proeung Chiso",
      imgSrc: "src/assets/imgAboutUs/CherChiso.png",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 xl:px-24">
      {mentors.map((mentor, index) => (
        <div key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} className="w-full max-w-sm mx-auto p-5 ">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 text-center">
              {mentor.name}
            </h1>
          </div>
          <a href="#">
            <img
              className="rounded-lg h-auto w-full mt-6 object-cover"
              src={mentor.imgSrc}
              alt={mentor.name}
            />
          </a>
          <div className="flex justify-center mt-6 space-x-4 text-2xl text-gray-900 dark:text-gray-500">
            <FaGithub className="cursor-pointer hover:text-blue-600" />
            <FaTelegramPlane className="cursor-pointer hover:text-blue-600" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
            <MdOutlineMailOutline className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      ))}
    </div>
  );
}

