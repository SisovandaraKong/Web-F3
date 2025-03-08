import {
  FaCheckCircle,
  FaLock,
  FaChartBar,
  FaStar,
  FaRocket,
  FaRobot,
} from "react-icons/fa";
const cardData = [
  {
    id: 1,
    icon: <FaCheckCircle className="h-10 w-10 text-white-text" />,
    title: "All-in-One Solution",
    description:
      "Find jobs, freelance gigs, or top talent in one seamless platform.",
  },
  {
    id: 2,
    icon: <FaLock className="h-10 w-10 text-white-text" />,
    title: "Secure & Trusted",
    description:
      "End-to-end encryption and verified users ensure safe communication and transactions.",
  },
  {
    id: 3,
    icon: <FaChartBar className="h-10 w-10 text-white-text" />,
    title: "Personalized Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 4,
    icon: <FaStar className="h-10 w-10 text-white-text" />,
    title: "Verified Reviews",
    description:
      "Build trust with authentic ratings and reviews for informed decisions.",
  },
  {
    id: 5,
    icon: <FaRocket className="h-10 w-10 text-white-text" />,
    title: "Fast Hiring Process",
    description:
      "From posting jobs to hiring, we streamline the process to save time.",
  },
  {
    id: 6,
    icon: <FaRobot className="h-10 w-10 text-white-text" />,
    title: "24/7 Support",
    description: "Our dedicated team is always ready to help.",
  },
];

const CardWhyUS = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg sm:px-10 rounded-sm">
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-primary-hover transition-all duration-300 group-hover:scale-[10]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary-hover">
              {card.icon}
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>{card.description}</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a
                  href={card.link}
                  className="text-sky-500 transition-all duration-300 group-hover:text-white">
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardWhyUS;
