import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

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
    <div className="grid grid-cols-1 gap-8 px-6 md:px-16 lg:px-36">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          data-aos={member.aos}
          className={`flex flex-col md:flex-row md:max-w-6xl p-5 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
        >
          <a href="#">
            <img
              className="w-40 h-40 md:w-48 md:h-48 mb-3 rounded-full shadow-lg border-primary border-3 object-cover"
              src={member.image}
              alt={member.name}
            />
          </a>
          <div className={`flex flex-col justify-between p-4 leading-normal md:mx-14 text-center md:text-left ${index % 2 !== 0 ? "md:text-right" : ""}`}>
            <h5 className="mb-2 text-2xl md:text-4xl font-bold text-gray-900 dark:text-primary">
              {t(member.name)}
            </h5>
            <p className="mb-3 text-gray-700 dark:text-gray-400 text-lg md:text-2xl font-bold">
              {t(member.role)}
            </p>
            <div className="text-4xl md:text-6xl text-secondary">
              {index % 2 === 0 ? <RiDoubleQuotesL /> : <RiDoubleQuotesR />}
            </div>
            <p className="mx-4 md:mx-14 text-gray-700 dark:text-gray-400">
              {t(member.quote)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
