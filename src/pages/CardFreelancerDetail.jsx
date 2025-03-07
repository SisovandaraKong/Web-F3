import React from 'react';
import Breadcrumb from '../components/tabs/Breadcrumb'; 
import ContactJobPost from '../components/contacts/ContactJobPost';
import ReatingJobPost from '../components/reating/ReatingJobPost';
import CommentJobPost from '../components/comments/CommentJobPost';
import Footer from '../components/layouts/Footer';

const CardFreelancerDetail = () => {
  return (
    <div className="card-freelancer-detail">
      {/* Render the Breadcrumb Component */}
      <Breadcrumb />

      {/* Your CardFreelancerDetail content */}
      <div className="freelancer-contact-info">
        <ContactJobPost />
      </div>
      <div className="freelancer-reating">
        <ReatingJobPost />
      </div>
      <div className="freelancer-comments">
        <CommentJobPost />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CardFreelancerDetail;
