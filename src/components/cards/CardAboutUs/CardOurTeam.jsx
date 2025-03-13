"use client";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    name: "Kong Sisovandara",
    role: "Leader",
    quote: "The best way to predict the future is to create it.",
    image: "src/assets/imgAboutUs/dara.jpg",
    aos: "fade-right",
  },
  {
    name: "Rin Sanom",
    role: "Sub Leader",
    quote: "Java not for beginner.",
    image: "src/assets/imgAboutUs/sanom.jpg",
    aos: "fade-left",
  },
  {
    name: "Chim Theara",
    role: "Member",
    quote: "Happiness depends upon ourselves.",
    image: "src/assets/imgAboutUs/theara.jpg",
    aos: "fade-right",
  },
  {
    name: "Sorn Sophamarinet",
    role: "Member",
    quote: "We can do no great things, only small things with great love.",
    image: "src/assets/imgAboutUs/marinet.jpg",
    aos: "fade-left",
  },
  {
    name: "Korm TaingAn",
    role: "Member",
    quote: "Opportunities don't happen. You create them.",
    image: "src/assets/imgAboutUs/TaingAn.jpg",
    aos: "fade-right",
  },
  {
    name: "Chhun Meyling",
    role: "Member",
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    image: "src/assets/imgAboutUs/sanom.jpg",
    aos: "fade-left",
  },
  {
    name: "Kea Daron",
    role: "Member",
    quote: "Do what you can, with what you have, where you are.",
    image: "src/assets/imgAboutUs/daron.png",
    aos: "fade-right",
  },
];

export default function CardOurTeam() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-0">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          data-aos={member.aos}
          className={`flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <img
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary object-cover mb-4 md:mb-0"
            src={member.image}
            alt={t(member.name)}
          />
          <div
            className={`flex flex-col justify-center p-4 text-center md:text-left ${
              index % 2 !== 0 ? "md:text-right" : ""
            }`}
          >
            <h5 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {t(member.name)}
            </h5>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-semibold">
              {t(member.role)}
            </p>
            <div className="text-3xl text-secondary my-2">
              {index % 2 === 0 ? <RiDoubleQuotesL /> : <RiDoubleQuotesR />}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
              {t(member.quote)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}