export default function VisionSection() {
  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 lg:px-36 gap-10 md:gap-20 items-center">
      <div
        data-aos="fade-left"
        data-aos-duration="700"
        className="text-center md:text-left"
      >
        <h2 className="text-SubHeading font-bold text-primary dark:text-white">Our Vision</h2>
        <p className="text-lg md:text-xl text-black-text mt-4 dark:text-white">
          At [Jobseek], we connect freelancers, job seekers, and employers to
          create valuable opportunities. Our platform helps individuals find
          meaningful work while enabling businesses to discover the talent they
          need. We're committed to making the job search and hiring process
          seamless and effective for all.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          data-aos="fade-right"
          data-aos-duration="700"
          src="src/assets/imgAboutUs/Vision.svg"
          alt="Business Mission"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
    </section>
  );
}
