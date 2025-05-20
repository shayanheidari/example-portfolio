import React from "react";

const Background = () => {
  return (
    <>
      <div
        className="mx-auto justify-center items-center flex flex-col h-screen snap-start"
        id="background"
      >
        <div className="md:flex md:justify-center  md:w-[65vw] md:h-[60vh]">
          <div className="mx-10 mt-12 flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:content-center-safe md:justify-items-stretch justify-center items-center gap-4 ">
            <div className="card_ h-[26vh] pb-4">
              <h3 className="font-semibold text-2xl text-accent pb-3">
                Education
              </h3>
              <p className="text-pretty text-text md:text-[1.2rem] text-[1rem] h-55 md:h-auto overflow-y-scroll">
                <h4 className="italic text-[1rem] text-accent">2020 – 2024</h4>
                <span className="font-bold">Ph.D. in Computer Science</span>,
                The University of Auckland, New Zealand
                <br />
                Thesis:{" "}
                <a
                  href="/example-portfolio/works/thesis/"
                  className="italic underline hover:text-accent cursor-pointer"
                >
                  Quantum Annealing in Computer Vision
                </a>
                <br />
                <h4 className="italic mt-2 md:mt-3 text-[1rem] text-accent">
                  2014 – 2016
                </h4>
                <span className="font-bold text-[1rem]">
                  M.Sc. in Software Engineering
                </span>
                , Science and Research Branch, Azad University, Iran
              </p>
            </div>
            <div className="card_ h-[20vh]">
              <h3 className="font-semibold text-2xl text-accent pb-3">
                Postgraduate Training
              </h3>
              <p className="text-pretty text-text md:text-[1.2rem] text-[1rem] h-45 md:h-auto overflow-y-scroll">
                <h4 className="italic text-[1rem] text-accent">2024 – 2025</h4>
                <span className="font-bold">Postdoctoral Fellow</span> in
                Computer Science, The University of Auckland, New Zealand <br />{" "}
                Research Focus: AI model improvement strategies for biosecurity
                computer vision applications.
              </p>
            </div>
            <div className="card_ h-[35vh] md:col-span-2">
              <h3 className="font-semibold text-2xl text-accent pb-3">
                Current Position
              </h3>
              <p className="text-pretty text-text text-[1.1rem] h-66 md:h-auto overflow-y-scroll w-full">
                <h4 className="italic text-[1rem] text-accent">
                  2025 – Present
                </h4>
                <span className="font-bold">Research Fellow</span>, Institute of
                Marine Science, The University of Auckland, New Zealand
                <br /> Research Focus: Advancing computer vision,
                photogrammetry, and underwater remote sensing techniques for the
                monitoring and analysis of benthic ecosystems, including
                high-resolution sediment microtopography characterization using
                stereo and monocular camera systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
