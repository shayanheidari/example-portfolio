import React, { useState } from "react";
import Navbar from "./Navbar";
import project1 from "../assets/works/others/1/Figure5.jpg";
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
    title: "Object detection Project",
    description:
      "New Zealand’s unique biodiversity faces an existential threat from introduced predators, which are responsible for the death of over 25 million native birds each year. As part of the country's ambitious Predator-Free 2050 initiative, effective and reliable detection of these pests, particularly in remote, nocturnal environments, is critical. Traditional RGB-based monitoring systems fall short in low-light conditions, making thermal imaging a vital tool for capturing the presence of warm-bodied predators in dense bush settings. However, detecting and classifying animal species from low-resolution thermal videos presents significant technical challenges. Most existing approaches focus on single-frame classification and struggle to generalize due to poor resolution, domain shifts from RGB-trained models, and a lack of temporal context. Furthermore, many of these models are computationally intensive and unsuitable for real-time deployment in resource-constrained ecological settings.",
    links: {
      site: "/example-portfolio/works/others/1",
      github: "#",
    },
    icon: {
      deactive: <PiNumberCircleOneLight />,
      active: <PiNumberCircleOneFill />,
    },
  },
];

const ProjectsSide = () => {
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
            Side Projects
          </h1>
        </div>
        <div className="w-full md:w-[65vw] md:h-[65vh] md:mt-0 mt-20 flex flex-col md:flex-row justify-center items-center content-center md:pt-0 pt-5 px-5">
          <div className="flex flex-col md:gap-4 md:flex-row justify-center">
            <div className="w-full md:w-150 h-70 md:h-[50vh] p-1 ">
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

export default ProjectsSide;
