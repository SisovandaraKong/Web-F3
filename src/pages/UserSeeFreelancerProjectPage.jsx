
import CardProject from "../components/cards/Freelancer/CardProject";
import ScrollIndicator from "../components/scrollIndicator/scrollIndicator";


const MonitorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

export default function UserSeeFreelancerProjectPage() {
  const projects = Array(9).fill({
    title: "Interactive Dashboard",
    description:
      "Logo design for a dashboard and admin company. The idea of the design is to be the letter I, I signature feature.",
  });

  return (
    <>
<ScrollIndicator/>
<div className="min-h-screen max-w-7xl mx-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MonitorIcon className="h-6 w-6" />
            <h1 className="text-CardMainTitle font-bold text-primary">
              Programming
            </h1>
          </div>
          <button className="bg-primary hover:bg-primary-hover text-white px-3 py-1 rounded text-sm">
            Back
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="mb-4 text-CardSubTitle font-semibold text-primary">
            About about my service
          </h2>
          <p className="text-black-text text-TabText">
            Recently, I had travelled to my parents for a quiet weekend at home.
            It was warm, sunny, and I was studying for upcoming interviews. I
            already had a dedicated schedule full of details from company
            websites, job postings, online presentations, recruiter YouTube
            videos about navigating the corporate interview process and I even
            looked at what tools some of these companies use - what that I could
            familiarize myself with should it come up in conversation.
          </p>
        </div>

        <div>
          <h2 className="text-CardMainTitle font-bold text-primary">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div>
      <CardProject />
      
    </div>
    </>
    
  );
}
