export default function MissionSection() {
  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 lg:px-36 gap-10 md:gap-20 items-center">
      <div className="flex justify-center">
        <img
          data-aos="fade-right"
          data-aos-duration="700"
          src="src/assets/imgAboutUs/Business mission.gif"
          alt="Business Mission"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="700"
        className="text-center md:text-left">
        <h2 className="text-SubHeading font-bold text-primary">Our Mission</h2>
        <p className="text-lg md:text-xl text-black-text  dark:text-white mt-4">
          Our mission is to connect job seekers, freelancers, and employers. We
          aim to simplify the job search and hiring process. Our platform helps
          talent find the right opportunities. We help businesses discover
          skilled professionals. We strive to create an environment where
          careers grow, and success is within reach for everyone.
        </p>
      </div>
    </section>
  );
}
