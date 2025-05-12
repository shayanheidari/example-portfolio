import React from "react";
import ProfilePic from "../assets/ProfilePic.png";
import Background from "../assets/Background.png";

const Hero = () => {
  return (
    <>
      <div
        style={{ "--image-url": `url(${Background})` }}
        className="snap-start bg-[image:var(--image-url)] bg-center bg-cover bg-no-repeat "
        id="about"
      >
        <div className="relative flex flex-col md:flex-row-reverse items-center md:justify-around justify-center md:gap-10 gap-10 content-between max-w-[1250px] mx-auto h-screen">
          <div>
            <img
              src={ProfilePic}
              alt="shahrokh"
              className="rounded-full w-[200px] md:w-[400px] outline-4 md:outline-5 outline-background outline-offset-3"
            />
          </div>

          <div className="glassmorphism transition duration-500 " opacity-100>
            <div className="max-w-[350px] md:max-w-[600px] opacity-100 p-3">
              <h1 className="text-text font-bold text-3xl md:text-5xl md:mt-4 md:mb-6 mb-2 ">
                Dr. Shahrokh Heidari
              </h1>
              <h3 className="font-semibold text-2xl md:mb-1 text-accent">
                About Me
              </h3>
              <p className="text-text text-justify tracking-normal text-base/6.5 md:text-[1.2rem] text-[1.1rem] h-60 md:h-auto overflow-y-scroll md:overflow-auto cursor-default">
                I am a computer vision researcher with over 5 years of
                experience in developing and deploying advanced 2D and 3D vision
                systems. My work lies at the intersection of artificial
                intelligence, photogrammetry, and remote sensing, with a growing
                specialization in marine and underwater environments. <br />{" "}
                Currently, I am a Research Fellow on the Oceans of Change
                project at Institute of Marine Science (IMS), UoA, where I am
                advancing computer vision and underwater remote sensing
                methodologies to support the monitoring and analysis of benthic
                ecosystems. My expertise spans image classification,
                segmentation, object detection, depth estimation (mono/stereo),
                3D reconstruction, camera calibration, and high-resolution
                microtopographic surface analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
