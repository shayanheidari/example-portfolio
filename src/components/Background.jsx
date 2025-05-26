import React from "react";
import { Link } from "react-router";

const Background = () => {
  return (
    <>
      <div
        className="relative mx-auto snap-start h-screen flex items-center justify-center no-scrollbar"
        id="background"
      >
        <div className="absolute top-[12vh]">
          <h1 className="text-text font-medium text-[1.6rem] cursor-pointer">
            Background
          </h1>
        </div>
        <div className="w-full md:w-[65vw] md:h-[65vh] md:mt-30 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5 md:justify-items-stretch  md:items-center overflow-x-scroll md:overflow-auto scroll whitespace-nowrap scroll-smooth px-4 snap-x md:snap-none no-scrollbar mt-20">
          <div className="ml-15 md:m-0  snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ inline-block m-2 no-scrollbar">
            <h3 className="font-semibold text-2xl text-accent pb-3">
              Education
            </h3>
            <p className="text-pretty text-text h-55 md:h-auto">
              <h4 className="italic text-[1rem] text-accent">2020 – 2024</h4>
              <span className="font-normal">Ph.D. in Computer Science</span>,
              The University of Auckland, New Zealand
              <br />
              Thesis:{" "}
              <Link
                to="/example-portfolio/works/thesis/"
                className="italic underline hover:text-accent cursor-pointer"
              >
                Quantum Annealing in Computer Vision
              </Link>
              <br />
              <h4 className="italic mt-2 md:mt-3 text-[1rem] text-accent">
                2014 – 2016
              </h4>
              <span className="font-normal">M.Sc. in Software Engineering</span>
              , Science and Research Branch, Azad University, Iran
            </p>
          </div>

          <div className="md:m-0 snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ inline-block m-2  no-scrollbar">
            <h3 className="font-semibold text-2xl text-accent pb-3">
              Postgraduate Training
            </h3>
            <p className="text-pretty text-text  h-45 md:h-auto">
              <h4 className="italic text-[1rem] text-accent">2024 – 2025</h4>
              <span className="font-normal">Postdoctoral Fellow</span> in
              Computer Science, The University of Auckland, New Zealand <br />{" "}
              <br /> Research Focus: AI model improvement strategies for
              biosecurity computer vision applications.
            </p>
          </div>
          <div className="mr-15 md:m-0 snap-center w-4/5 md:w-[70%] !mx-auto rounded-3xl whitespace-normal card_ inline-block m-2 md:col-span-2 no-scrollbar">
            <h3 className="font-semibold text-2xl text-accent pb-3">
              Current Position
            </h3>
            <p className="text-pretty text-text h-66 md:h-auto w-full">
              <h4 className="italic text-[1rem] text-accent">2025 – Present</h4>
              <span className="font-normal">Research Fellow</span>, Institute of
              Marine Science, The University of Auckland, New Zealand
              <br /> <br /> Research Focus: Advancing computer vision,
              photogrammetry, and underwater remote sensing techniques for the
              monitoring and analysis of benthic ecosystems, including
              high-resolution sediment microtopography characterization using
              stereo and monocular camera systems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
