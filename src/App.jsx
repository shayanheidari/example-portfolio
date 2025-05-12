import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticlesBackground from "./components/Particle";
import Works from "./components/Works";
import Background from "./components/Background";
import Expertise from "./components/Expertise";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className=" snap-y overflow-y-scroll h-screen snap-mandatory">
        <Hero />
        <Background />
        <Expertise />
        <Works />
      </div>
    </>
  );
}

export default App;
