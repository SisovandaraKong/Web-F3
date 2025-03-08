import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Ta1 from "../assets/Ta_Images/faq.png";

// Frequently Asked Questions list
const faqs = [
    { question: "What is JobSeek and how does it work?", answer: "JobSeek is a platform connecting job seekers and employers. It allows job seekers to browse job listings, apply for positions, and connect with potential employers. Employers can post job openings, review applications, and find qualified candidates efficiently. With user-friendly tools and filters, JobSeek makes the hiring process smoother for both parties." },
    { question: "Is registration free for job seekers and freelancers?", answer: "Yes, registration is completely free for job seekers and freelancers. You can create a profile, browse job listings, and apply for positions without any charges." },
    { question: "How do I apply for jobs on JobSeek?", answer: "You can apply by creating a profile, uploading your resume, and submitting applications directly to job postings. Some employers may also require a cover letter or additional details." },
    { question: "How can I track my job applications?", answer: "JobSeek provides a dashboard where you can monitor the status of your job applications, see employer responses, and manage your job search efficiently." },
    { question: "How do clients and freelancers communicate?", answer: "Clients and freelancers can communicate through JobSeek's secure messaging system, allowing them to discuss project details, ask questions, and share updates in real time." },
    { question: "How does JobSeek ensure security and prevent scams?", answer: "JobSeek ensures security by verifying job postings, screening employers, and providing secure payment options. Additionally, we offer reporting tools for users to flag suspicious activity and protect against scams." }
];

// Main FAQ Section Component
export default function FAQSection() {
    const [openIndexes, setOpenIndexes] = useState([]); // Track multiple open FAQs

    const toggleFAQ = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter((i) => i !== index)); // Close FAQ
        } else {
            setOpenIndexes([...openIndexes, index]); // Open FAQ
        }
    };

    return (
        <div className="p-6 sm:p-8 md:p-12 max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="bg-[#f9f9f9] p-8 sm:p-10 md:p-12 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left">
                        {/* First Heading */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2473] leading-snug mb-2 md:mb-4">
                            Looking for help? Here are our most
                        </h2>

                        {/* Second Heading */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2473] leading-tight mb-6">
                            frequently asked <span className="whitespace-nowrap">questions.</span>
                        </h2>

                        {/* Subtitle/Description */}
                        <p className="text-[#0a2473] text-sm sm:text-base lg:text-lg leading-snug">
                            Get detailed information about JobSeek and our billing. Still need assistance? We&apos;re here to help!
                        </p>
                    </div>

                    {/* Icon/Image Section */}
                    <div>
                        <img
                            src={Ta1}
                            alt="FAQ Icon"
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* FAQs Section */}
            <div className="bg-[#f9f9f9] p-6 sm:p-8 md:p-12 rounded-lg shadow-lg mt-8 sm:mt-10 md:mt-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a2473] flex items-center gap-4 mb-6">
                    JobSeek FAQs
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className="text-[#0a2473] text-2xl sm:text-3xl lg:text-4xl"
                    />
                </h3>
                <p className="text-[#0a2473] text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                    Everything you need to know about billing and invoices. Can&apos;t find an answer?{" "}
                    <span className="text-[#0a2473] font-semibold underline cursor-pointer">
            Chat to our team.
          </span>
                </p>

                {/* FAQs List */}
                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-[#0a2473] py-3 sm:py-4 lg:py-5">
                            {/* Question Button */}
                            <button
                                className="flex justify-between w-full text-left text-lg sm:text-xl lg:text-2xl font-semibold text-[#0a2473]"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                {openIndexes.includes(index) ? (
                                    <FiChevronUp className="text-[#0a2473] text-2xl sm:text-3xl lg:text-4xl" />
                                ) : (
                                    <FiChevronDown className="text-[#0a2473] text-2xl sm:text-3xl lg:text-4xl" />
                                )}
                            </button>

                            {/* Answer */}
                            {openIndexes.includes(index) && (
                                <p className="text-[#0a2473] mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}