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
import About from "./components/About";
import Awards from "./components/Awards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className=" snap-y overflow-y-scroll h-screen snap-mandatory">
        <div className="hidden md:flex">
          <About />
        </div>

        <div className="md:hidden">
          <Hero />
        </div>
        <Background />
        <Expertise />
        <Works />
        <Awards />
      </div>
    </>
  );
}

export default App;
