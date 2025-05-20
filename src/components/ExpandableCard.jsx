import React, { useState } from "react";
import "./ExpandableCard.css";
import ProfilePic from "../assets/ProfilePic.png";
import { motion } from "framer-motion";

const ExpandableCard = () => {
  const [isExpand, setIsExpand] = useState(false);

  const animate = {
    layout: "position",
    animate: { opacity: 1 },
    transform: { delay: 0.3 },
    initial: { opacity: 0 },
  };

  return (
    <motion.div
      className="card md:hidden glassmorphism delay-150 ease-in duration-150 w-[80vw] flex flex-col justify-center items-center"
      layout="position"
    >
      <motion.img
        layout="position"
        className={`${isExpand ? "hidden" : "flex"} absolute bottom-75 outline-4 outline-accent w-30 rounded-full`}
        src={ProfilePic}
        alt="ProfilePic"
      />
      <motion.div layout="position">
        <motion.h2
          layout="position"
          className="text-text mt-10 font-medium text-[1.6rem] md:text-5xl md:mt-4 md:mb-6 mb-2 text-nowrap"
        >
          Dr. Shahrokh Heidari
        </motion.h2>
        <motion.h3
          layout="position"
          className="justify-self-start text-[1.4rem] md:mb-1 text-accent"
        >
          About Me
        </motion.h3>
        <motion.p layout="position" className="w-full text-justify">
          I am a computer vision researcher with over 5 years of experience in
          developing and deploying advanced 2D and 3D vision systems. My work
          lies at the intersection of artificial intelligence, photogrammetry,
          and remote sensing, with a growing specialization in marine and
          underwater environments.
        </motion.p>
        {isExpand && (
          <>
            <motion.p {...animate} className="w-full text-justify">
              Currently I am a Research Fellow on the Oceans of Change project
              at Institute of Marine Science (IMS), UoA, where I am advancing
              computer vision and underwater remote sensing methodologies to
              support the monitoring and analysis of benthic ecosystems. My
              expertise spans image classification, segmentation, object
              detection, depth estimation (mono/stereo), 3D reconstruction,
              camera calibration, and high-resolution microtopographic surface
              analysis.
            </motion.p>
          </>
        )}
        <div
          onClick={() => {
            setIsExpand(!isExpand);
          }}
          className="btn-container p-1 rounded-4xl mt-2 bg-accent w-full flex justify-center items-center"
        >
          <button>{isExpand ? "Close" : "Expand"}</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExpandableCard;
