import React from "react";
import ProfilePic from "../assets/ProfilePic.png";
import Background from "../assets/Background.png";
import ExpandableCard from "./ExpandableCard";

const Hero = () => {
  return (
    <>
      <div
        style={{ "--image-url": `url(${Background})` }}
        className="snap-start bg-[image:var(--image-url)] bg-center bg-cover bg-no-repeat "
        id="about"
      >
        <div className="relative flex flex-col pt-10 md:flex-row-reverse items-center justify-center md:gap-100 gap-8 content-between mx-auto h-screen">
          <div className="hidden md:flex">
            <img
              src={ProfilePic}
              alt="shahrokh"
              className="rounded-full w-[170px] md:w-[400px] outline-4 md:outline-5 outline-background outline-offset-3"
            />
          </div>

          <div className="hidden md:flex glassmorphism transition duration-500 ">
            <div className="w-[80vw] md:max-w-[600px] opacity-100 md:p-3 p-1">
              <h1 className="text-text font-medium text-[1.6rem] md:text-5xl md:mt-4 md:mb-6 mb-2 text-nowrap">
                Dr. Shahrokh Heidari
              </h1>
              <h3 className="text-[1.4rem] md:mb-1 text-accent">About Me</h3>
              <p className="text-justify text-balance cursor-default font-light text-[0.8rem] md:text-[1rem]">
                <span className="hidden md:inline">
                  I am a computer vision researcher with over 5 years of
                  experience in developing and deploying advanced 2D and 3D
                  vision systems. My work lies at the intersection of artificial
                  intelligence, photogrammetry, and remote sensing, with a
                  growing specialization in marine and underwater environments.
                  <br />
                  <div className="hidden md:flex h-[.5rem]" />
                  Currently,{" "}
                </span>
                I am a Research Fellow on the Oceans of Change project at
                Institute of Marine Science (IMS), UoA, where I am advancing
                computer vision and underwater remote sensing methodologies to
                support the monitoring and analysis of benthic ecosystems. My
                expertise spans image classification, segmentation, object
                detection, depth estimation (mono/stereo), 3D reconstruction,
                camera calibration, and high-resolution microtopographic surface
                analysis.
              </p>
            </div>
          </div>
          <ExpandableCard />
        </div>
      </div>
    </>
  );
};

export default Hero;
