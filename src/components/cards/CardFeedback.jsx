import React from "react";

const testimonials = [
  {
    name: "Rin Sanom",
    role: "Web Developer",
    image: "src/assets/Our Client/Dara.JPG",
    feedback:
      "JobSeek has transformed the way I find freelancers for my projects. The user-friendly interface made it easy to post my job requirements, and I was amazed at the quality of candidates who applied. I found a talented graphic designer within days, and the entire process was smooth and efficient. I highly recommend JobSeek to anyone looking to hire freelancers!",
  },
  {
    name: "Chim Theara",
    role: "Lead Designer",
    image: "src/assets/Our Client/Sanom.JPG",
    feedback:
      "The variety of jobs available and the straightforward application process make it easy for me to showcase my skills. I landed a fantastic project through JobSeek, and the support team was incredibly helpful when I had questions. This platform has truly helped me grow my freelance career!",
  },
  {
    name: "Kong Sisovandara",
    role: "Lead Frontend",
    image: "src/assets/Our Client/Sanom.JPG",
    feedback:
      "The site is well-designed, making it easy to browse freelancers based on their skills and ratings. I was able to find a web developer who understood my vision perfectly. The communication tools within the platform also made collaboration a breeze. JobSeek is now my go-to resource for freelance talent!",
  },
];

const CardFeedback = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <blockquote
          key={index}
          className="rounded-lg bg-gray-50 p-6 shadow-lg sm:p-8">
          <div className="flex items-start gap-4">
            <img
              alt={testimonial.name}
              src={testimonial.image}
              className="size-14 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <div className="flex gap-0.5 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-700 text-start line-clamp-6">
            {testimonial.feedback}
          </p>
        </blockquote>
      ))}
    </div>
  );
};

export default CardFeedback;
