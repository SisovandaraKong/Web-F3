import React from 'react';
import { Link } from 'react-router-dom';

const BusinessOwnerDetail = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <nav
        aria-label="breadcrumb"
        className="p-4 text-gray-800 mx-auto max-w-7xl"
      >
        <ol className="flex flex-wrap items-center space-x-2 text-gray-800 text-sm md:text-base">
          <li className="flex items-center">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 mx-1">/</span>
            <Link to="/jobs" className="hover:underline">
              Jobs
            </Link>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 mx-1">/</span>
            <span className="cursor-default text-gray-500">Business Owner</span>
          </li>
        </ol>
      </nav>

      {/* Job Detail Section */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="py-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Backend Developer
          </h1>
        </div>

        <div className="bg-white py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
                alt="Office Image"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="prose max-w-none mt-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Job Description
                </h2>
                <p>
                  The Support Engineer is responsible for installing,
                  configuring, and maintaining the large-scale enterprise
                  telecom core network nodes as well as other associated
                  entities. Follow up and work closely with development teams.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-6">
                  Job Requirement
                </h2>
                <p>
                  - A bachelor's degree in telecom, information technology, or a
                  closely related field is required for this position.
                  <br />
                  - Vast experience installing, upgrading, and deploying patches
                  for telecom nodes such as MSC, HLR/HSS, SGSN, STP, DRA, EPC,
                  and EIR etc.
                  <br />
                  - Good work history in telecom integration and troubleshooting
                  customer issues.
                  <br />
                  - Understanding of telecom signaling protocols including SCTP,
                  SCCP, SIGTRAN (M3UA) and DIAMETER.
                  <br />
                  - Understanding of Dialogic's protocol stacks.
                  <br />- Understanding of telecom Call, SMS, and Data flows.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-6">
                  Other Required Skills
                </h2>
                <p>
                  - Knowledge of TCP, HTTP, sftp, and smpp protocols.
                  <br />
                  - Knowledge of MySQL database and Linux OS.
                  <br />
                  - Knowledge of IP networks and IP routing.
                  <br />- Good written and verbal English communication.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-6">
                  Job Responsibility
                </h2>
                <p>
                  - Keep the network's signaling lines and services operational.
                  <br />
                  - Configurations for signaling expansion, routing, and
                  numbering management.
                  <br />
                  - Maintain the database, signaling, and system traffic loads.
                  <br />
                  - Real-time troubleshooting of fault, configuration, and
                  performance issues.
                  <br />
                  - Develop and maintain test setups in internal and external
                  labs in accordance with test case requirements.
                  <br />
                  - Pay close attention to resolving TT from partners and
                  escalate as required.
                  <br />
                  - Oversee and maintain the system's performance, scalability,
                  and capacity.
                  <br />
                  - Ability to work independently and with a flexible attitude.
                  <br />
                  - Multitask, operate independently, and organize resources.
                  <br />- Travel both domestically and abroad as required.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-6">
                  How to Apply
                </h2>
                <p>
                  1. Please register a Jobify Account.
                  <br />
                  2. Click create or upload CV.
                  <br />
                  3. After creating your CV, apply for a job by clicking the
                  'Apply Now' button. Jobify will review your CV.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="bg-gray-100 p-4 rounded-lg shadow-md lg:sticky lg:top-20">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Job Details
              </h2>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <strong>Salary:</strong> $300
                </li>
                <li>
                  <strong>Job Type:</strong> Job Seeker
                </li>
                <li>
                  <strong>Job Level:</strong> Junior Level
                </li>
                <li>
                  <strong>Year of Experience:</strong> Junior Level
                </li>
                <li>
                  <strong>Language:</strong> English Basic
                </li>
                <li>
                  <strong>Available Position:</strong> 2 pax
                </li>
                <li>
                  <strong>Qualification:</strong> Bachelor
                </li>
                <li>
                  <strong>Required Skills:</strong> Frontend, Backend, Database
                </li>
              </ul>
              <div className="mt-6 text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                  alt="QR Code"
                  className="mx-auto"
                />
                <p className="text-gray-600 text-sm mt-2">
                  Published on: February 11, 2025
                </p>
                <p className="text-gray-600 text-sm">
                  Close Date: March 15, 2025
                </p>
              </div>
              <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600">
                Apply Now
              </button>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessOwnerDetail;
