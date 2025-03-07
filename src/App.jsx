
import "./App.css";
import "./i18n"; 
import FreelancerPage from "./pages/FreelancerPage";
import JobList from "./components/cards/JobList";


function App() {
  return (
    <>
            <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-6">
              Job Listings
            </h1>
            <JobList />
    </>
  );
}

export default App;
