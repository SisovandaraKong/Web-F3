import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import jobListings from "./mocks/mockData";
import CardJob from "./components/cards/CardJob";


function App() {
console.log(jobListings);
const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-MainTitle underline text-accent">{count}</h1>
      <div>
      <button className="px-10 py-5 bg-black rounded-xl text-white" onClick={()=> setCount(count+1)}>Add</button>
      <button className="px-10 py-5 bg-black rounded-xl text-white" onClick={()=> setCount(count-1)}>Dork</button>
      <button className="px-10 py-5 bg-black rounded-xl text-white" onClick={()=> setCount(0)}>Reset</button>
      </div>
      <CardJob/>
    </>
  );
}

export default App;
