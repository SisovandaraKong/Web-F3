import { useTranslation } from "react-i18next";
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function CardOurMentor() {
  const { t } = useTranslation();

  const mentors = [
    { nameKey: "mentorKayKeo", imgSrc: "src/assets/imgAboutUs/CherKeo.png" },
    { nameKey: "mentorProeungChiso", imgSrc: "src/assets/imgAboutUs/CherChiso.png" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {mentors.map((mentor, index) => (
        <div
          key={index}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
            {t(mentor.nameKey)}
          </h1>
          <img
            className="w-full h-64 object-cover rounded-lg mb-6"
            src={mentor.imgSrc}
            alt={t(mentor.nameKey)}
          />
          <div className="flex justify-center space-x-6 text-2xl text-gray-600 dark:text-gray-400">
            <FaGithub className="cursor-pointer hover:text-primary transition-colors" />
            <FaTelegramPlane className="cursor-pointer hover:text-primary transition-colors" />
            <FaLinkedinIn className="cursor-pointer hover:text-primary transition-colors" />
            <MdOutlineMailOutline className="cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      ))}
    </div>
  );
}