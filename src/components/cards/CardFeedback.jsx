import React from 'react';
import '../styles/CardFeedback.css'; // Import the CSS file for styling

const testimonials = [
  {
    name: "Rin Sanom",
    role: "Web Development",
    comment: "JobSeek has transformed the way I find freelancers for my projects. The user-friendly interface made it easy to post my job requirements, and I was amazed at the quality of candidates who applied. I found a talented graphic designer within days, and the entire process was smooth and efficient. I highly recommend JobSeek to anyone looking to hire freelancers!"
  },
  {
    name: "Chim Theara",
    role: "Lead designer",
    comment: "The variety of jobs available and the straightforward application process make it easy for me to showcase my skills. I landed a fantastic project through JobSeek, and the support team was incredibly helpful when I had questions. This platform has truly helped me grow my freelance career!"
  },
  {
    name: "Kong Sisovandara",
    role: "Lead Frontend",
    comment: "The site is well-designed making it easy to browse freelancers based on their skills and ratings. I was able to find a web developer who understood my vision perfectly. The communication tools within the platform also made collaboration a breeze. JobSeek is now my go-to resource for freelance talent!"
  }
];

const CardFeedback = () => (
  <div className="feedback-container">
    <h2>What Our Clients Say About Us</h2>
    <div className="feedback-grid">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="feedback-card">
          <h3>{testimonial.name}</h3>
          <p className="role">{testimonial.role}</p>
          <p className="comment">{testimonial.comment}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CardFeedback;