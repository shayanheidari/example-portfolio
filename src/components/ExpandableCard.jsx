import React, { useState } from "react";
import "./ExpandableCard.css";
import ProfilePic from "../assets/ProfilePic.jpg";
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
    <motion.div className="flex flex-col md:hidden justify-center items-center">
      <motion.img
        layout="position"
        className={`${isExpand ? "invisible" : "visible"} absolute top-[100px] mx-auto outline-4 outline-accent w-30 rounded-full`}
        src={ProfilePic}
        alt="ProfilePic"
      />

      {isExpand && (
        <>
          <motion.div
            {...animate}
            className={`card md:hidden glassmorphism w-[80vw] flex flex-col justify-center items-center  ${isExpand ? "mb-0" : "mb-150"}`}
            layout="position"
          >
            <motion.div
              layout="position"
              className={`${isExpand ? "mt-0" : "mt-10"}`}
            >
              <motion.p
                {...animate}
                className="w-full text-justify text-balance"
              >
                I am a Research Fellow on the Oceans of Change project at
                Institute of Marine Science (IMS), UoA, where I am advancing
                computer vision and underwater remote sensing methodologies to
                support the monitoring and analysis of benthic ecosystems. My
                expertise spans image classification, segmentation, object
                detection, depth estimation (mono/stereo), 3D reconstruction,
                camera calibration, and high-resolution microtopographic surface
                analysis.
              </motion.p>
            </motion.div>
            <motion.div
              {...animate}
              onClick={() => {
                setIsExpand(!isExpand);
              }}
              className="btn-container p-1 rounded-4xl mt-2 bg-accent w-[100%] flex justify-center items-center"
            >
              <button className="w-full">
                {isExpand ? "Close" : "About Me"}
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
      <motion.div
        onClick={() => {
          setIsExpand(!isExpand);
        }}
        className={`btn-container absolute top-[230px]  p-1 rounded-4xl mt-2 bg-accent  p-3 ${isExpand ? "invisible" : "visible"}`}
      >
        <button className="w-full">{isExpand ? "Close" : "About Me"}</button>
      </motion.div>
    </motion.div>
  );
};

export default ExpandableCard;
