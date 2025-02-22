import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage />
      <h1 className="text-MainTitle underline text-accent">Hello world</h1>
    </>
  );
}

export default App;
