import React, { useState } from "react";
import Navbar from "./Navbar";
import project1 from "../assets/works/marine/1/Figure3.png";
import project2 from "../assets/works/marine/2/Figure6.jpg";
import {
  PiNumberCircleOneFill,
  PiNumberCircleOneLight,
  PiNumberCircleTwoFill,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeFill,
  PiNumberCircleThreeLight,
  PiNumberCircleFourFill,
  PiNumberCircleFourLight,
} from "react-icons/pi";
import { Link } from "react-router";
const projects = [
  {
    img: project1,
    title: "Habibot",
    description:
      "The CCAI project addresses the ecological threats posed by climate-driven species redistributions, with a focus on the rapid proliferation of sea urchins and their impact on kelp-dominated reef systems across Australia and New Zealand. By leveraging machine learning, the project aims to deliver scalable tools for monitoring urchin expansion and kelp forest decline, providing actionable data for proactive reef management.",
    links: {
      site: "/example-portfolio/works/marine/1",
      github: "#",
    },
    icon: {
      deactive: <PiNumberCircleOneLight />,
      active: <PiNumberCircleOneFill />,
    },
  },
  {
    img: project2,
    title: "Zero-Shot Seafloor",
    description:
      "We developed a novel framework for characterizing seafloor sediment microtopography using underwater video footage. The primary goal of this work is to enable scalable, non-invasive methods for both retrospective and in-situ sediment analysis in support of ecological monitoring and seabed habitat assessment.",
    links: {
      site: "/example-portfolio/works/marine/2",
      github: "#",
    },
    icon: {
      deactive: <PiNumberCircleTwoLight />,
      active: <PiNumberCircleTwoFill />,
    },
  },
];

const ProjectsMarine = () => {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <>
      <Navbar />
      <div
        className="snap-start bg-background relative mx-auto h-screen flex justify-center items-center no-scrollbar"
        id="projects"
      >
        <div className="absolute top-[12vh]">
          <h1 className="text-text font-medium cursor-pointer text-[1.6rem]">
            Marine Projects
          </h1>
        </div>
        <div className="w-full md:w-[65vw] md:h-[65vh] md:mt-0 mt-20 flex flex-col md:flex-row justify-center items-center content-center md:pt-0 pt-5 px-5">
          <div className="flex flex-col md:gap-4 md:flex-row justify-center">
            <div className="w-full md:w-150  p-1 ">
              <img
                src={projects[currentProject].img}
                alt={projects[currentProject].title}
                className="w-full h-full object-cover mb-4 p-2 rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-text font-semibold text-2xl mt-5">
                  {projects[currentProject].title}
                </h3>
                <p className="text-text text-justify text-pretty my-4 text-xl md:max-h-65 max-h-25 md:w-[700px] overflow-y-scroll">
                  {projects[currentProject].description}
                </p>
                <div className="flex space-x-4">
                  <Link
                    to={projects[currentProject].links.site}
                    className="px-4 py-2 bg-background text-accent border font-extralight text-xl border-accent rounded-3xl hover:bg-accent hover:text-background transition duration-300 w-full md:w-auto text-center"
                  >
                    View Doc
                  </Link>
                </div>
              </div>
              <ul className="ml-6 flex flex-row gap-6 justify-center mt-4 md:gap-1 self-center">
                {projects.map((project, index) => (
                  <li
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`text-4xl cursor-pointer ${currentProject === index ? "text-accent" : "text-text"}`}
                  >
                    {currentProject === index
                      ? project.icon.active
                      : project.icon.deactive}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsMarine;
