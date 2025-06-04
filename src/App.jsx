import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/Particle";
import ProjectList from "./components/ProjectList";
import Background from "./components/Background";
import Expertise from "./components/Expertise";
import About from "./components/About";
import Awards from "./components/Awards";
import Contact from "./components/Contact.jsx";
import Photos from "./components/Photos.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body className="bg-background">
        <Navbar />
        <div className=" snap-y overflow-y-scroll h-screen snap-mandatory">
          <About />
          <Background />
          <Expertise />
          <ProjectList />
          <Awards />
          <Photos />
          <Contact />
        </div>
      </body>
    </>
  );
}

export default App;
