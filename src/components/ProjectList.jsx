import marine from "../assets/1.jpg";
import thesis from "../assets/2.jpg";
import side from "../assets/3.jpg";
import React from "react";
import { Link } from "react-router";

const ProjectList = () => {
  return (
    <>
      <div
        className="relative mx-auto snap-start h-screen flex items-center justify-center no-scrollbar"
        id="projects"
      >
        <div className="absolute top-[12vh]">
          <h1 className="text-text font-medium text-[1.6rem] cursor-pointer">
            Projects
          </h1>
        </div>
        <div className="w-full md:w-[65vw] md:h-[70vh] md:mt-30 md:flex md:gap-5 md:justify-center md:items-center overflow-x-scroll md:overflow-auto scroll whitespace-nowrap scroll-smooth px-4 snap-x md:snap-none no-scrollbar mt-20">
          <div className=" ml-15 md:m-0 snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ !drop-shadow-accent inline-block m-2 !p-0 no-scrollbar">
            <div className="w-full h-full flex flex-col justify-between">
              <img
                src={marine}
                className="w-full h-[30%] object-cover"
                alt=""
              />
              <div className="p-3 flex flex-col grow mt-2">
                <h3 className="font-semibold text-center text-2xl text-accent pb-3">
                  Marine Science
                </h3>
                <p className="text-justify max-w-100 overflow-y-scroll overflow-hidden h-45 md:h-65 no-scrollbar">
                  Projects advancing marine ecosystem monitoring through AI,
                  computer vision, and underwater remote sensing, reflecting my
                  current research focus.
                </p>
              </div>

              <Link
                to="/example-portfolio/works/marine"
                className="text-background text-center p-3 font-medium bg-accent cursor-pointer"
              >
                More
              </Link>
            </div>
          </div>
          <div className="md:m-0 snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ !drop-shadow-accent inline-block m-2 !p-0 no-scrollbar">
            <div className="w-full h-full flex flex-col justify-between">
              <img src={side} className="w-full h-[30%] object-cover" alt="" />
              <div className="p-3 flex flex-col grow mt-2">
                <h3 className="font-semibold text-center text-2xl text-accent pb-3">
                  Others
                </h3>
                <p className="text-justify max-w-100 overflow-y-scroll overflow-hidden h-45 md:h-65 no-scrollbar">
                  A selection of earlier and parallel projects across AI,
                  computer vision, and applied photogrammetry beyond the marine
                  domain.
                </p>
              </div>

              <Link
                to="/example-portfolio/works/others/"
                className="text-background text-center p-3 font-medium bg-accent cursor-pointer"
              >
                More
              </Link>
            </div>
          </div>

          <div className=" mr-15 md:m-0 snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ !drop-shadow-accent inline-block m-2 !p-0 no-scrollbar">
            <div className="w-full h-full flex flex-col justify-between">
              <img
                src={thesis}
                className="w-full h-[30%] object-cover"
                alt=""
              />
              <div className="p-3 flex flex-col grow mt-2">
                <h3 className="font-semibold text-2xl text-center text-accent pb-3">
                  PhD Thesis
                </h3>
                <p className="text-justify max-w-100 overflow-y-scroll overflow-hidden h-45 md:h-65 no-scrollbar">
                  Research from my doctoral work on quantum annealing for
                  computer vision, exploring novel optimization for stereo
                  matching and 3D 3rtyreconstruction
                </p>
              </div>

              <Link
                to="/example-portfolio/works/thesis/"
                className="text-background text-center p-3 font-medium bg-accent cursor-pointer"
              >
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
