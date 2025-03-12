import React from 'react';
import ContactJobPost from '../components/contacts/ContactJobPost';
import ReatingJobPost from '../components/reating/ReatingJobPost';
import CommentJobPost from '../components/comments/CommentJobPost';
import Footer from '../components/layouts/Footer';
import FreelancerDetail from '../components/tabs/FreelancerDetail';
import BusinessOwnerDetail from '../components/tabs/BussinessOwnerDetail';
import BusinessJobPost from '../components/contacts/BusinessJobPost';

const CardBussinessOwnerDetail = () => {
  return (
    <div className="card-freelancer-detail">
      {/* Render the Breadcrumb Component */}
      <BusinessOwnerDetail />

      {/* Your CardFreelancerDetail content */}
      <div className="freelancer-contact-info">
        <BusinessJobPost />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CardBussinessOwnerDetail;
