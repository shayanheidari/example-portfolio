import React from "react";
import NavbarProjects from "../NavbarProjects.jsx";
import Video1 from "../../assets/works/marine/2/Video1.mp4";
import Video2 from "../../assets/works/marine/2/Video2.mp4";
import Figure1 from "../../assets/works/marine/2/Figure1.jpg";
import Figure2 from "../../assets/works/marine/2/Figure2.jpg";
import Figure3 from "../../assets/works/marine/2/Figure3.jpg";
import Figure4 from "../../assets/works/marine/2/Figure4.jpg";
import Figure5 from "../../assets/works/marine/2/Figure5.jpg";
import Figure6 from "../../assets/works/marine/2/Figure6.jpg";
import { Link } from "react-router";
import { CiSaveDown1 } from "react-icons/ci";

const Marine1 = () => {
  return (
    <>
      <NavbarProjects />
      <div className="flex flex-col bg-white justify-center md:mt-35 mt-20 w-[90vw] md:w-[65vw] mx-auto text-text">
        <h1 className="md:text-4xl text-[1.4rem] font-semibold text-accent">
          Zero-Shot Seafloor Sediment Microtopography Characterization Using
          Stereo from a Drifting Monocular Camera
        </h1>
        <span className="w-full bg-accent h-[4px] mt-3 rounded-3xl" />

        <div className="mt-5 flex gap-2 justify-center md:justify-start">
          <div className="border border-accent py-1 px-3 w-full md:w-auto rounded-3xl text-center">
            <Link
              to="ACIVS_2025_Sediment_Microtopography.pdf"
              target="_blank"
              download
            >
              <p className="!text-accent">
                <CiSaveDown1 className="inline-block text-xl" /> Paper
              </p>
            </Link>
          </div>
        </div>

        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          <span className="text-4xl inline-block">T</span>his research was
          funded by the Oceans of Change project, led by{" "}
          <a
            href="https://profiles.auckland.ac.nz/simon-thrush"
            className="text-accent"
          >
            Prof. Simon Thrush
          </a>
          . We developed a novel framework for characterizing seafloor sediment
          microtopography using underwater video footage. The primary goal of
          this work is to enable scalable, non-invasive methods for both
          retrospective and in-situ sediment analysis in support of ecological
          monitoring and seabed habitat assessment.
        </p>

        <div className="flex flex-col md:flex-row md:w-[90%] md:mx-auto">
          <video
            src={Video1}
            autoPlay
            muted
            loop
            className="md:w-[40%] m-4 md:m-10 md:mx-auto"
          ></video>
          <video
            src={Video2}
            autoPlay
            muted
            loop
            className="md:w-[40%] m-4 md:m-10 md:mx-auto"
          ></video>
        </div>
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          Accurately characterizing the fine-scale structure of sediment
          surfaces is critical for understanding key ecological processes such
          as bioturbation, nutrient cycling, sediment-water exchange, and
          organic matter degradation. Traditional methods, including sediment
          core sampling and diver-based photogrammetry, provide valuable
          insights but are constrained by high operational costs, limited
          spatial coverage, and logistical challenges, especially in deep or
          turbid waters. While recent advances in structure-from-motion (SfM)
          and stereo-vision systems have improved spatial resolution, they often
          rely on stable lighting, controlled deployment conditions, or
          specialized hardware. To address these limitations, our goal was to
          develop a cost- effective, scalable, and non-invasive framework that
          extracts meaningful microtopographic metrics from monocular underwater
          video footage.
        </p>
        <img
          className="m-4 md:m-10 md:w-[60%] md:mx-auto"
          src={Figure1}
          alt=""
        />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          To achieve this, we developed a zero-shot framework that leverages{" "}
          <a
            href="https://github.com/princeton-vl/RAFT-Stereo"
            className="text-accent"
          >
            RAFT-Stereo
          </a>
          , a deep learning-based stereo matching model, applied to pairs of
          frames extracted from a drifting monocular camera. Rather than relying
          on labeled sediment datasets or precise depth calibration, the
          framework estimates dense disparity maps directly from temporally
          spaced frames. These maps are then processed through a surface
          detrending technique to derive unit-invariant descriptors of sediment
          roughness and microtopography. The framework includes six core
          components: camera calibration, data acquisition, distortion removal,
          preprocessing, depth estimation, and microtopographic feature
          extraction.
        </p>
        <img
          className="m-4 md:m-10 md:w-[60%] md:mx-auto"
          src={Figure2}
          alt=""
        />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          The above figure shows the depth estimation on the sediment data
          examples: (a) two sequential video frames as a pair of stereo images,
          (b) undistorted video frames, (c), selected regions of interest (d)
          preprocessed frames, (e) feature matching, (f) stereo rectification
          results, (g) the first/left frame and the corresponding depth map
          computed using RAFT-Stereo. We also provide 3D meshes constructed from
          the depth map in (h)- (j) for visualization purposes.
        </p>
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          To evaluate ecological relevance, we applied the pipeline to a case
          study using video footage from a Bay Dynamics MK2 drop camera,
          comparing microtopographic features of Sand and Shell-Hash substrates
          at two known locations around Te Hauturu-o-Toi / Little Barrier
          Island.
        </p>
        <img
          className="m-4 md:m-10 md:w-[60%] md:mx-auto"
          src={Figure3}
          alt=""
        />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-5">
          To ensure realistic underwater imaging conditions, calibration for the
          same camera was performed in a seawater-filled tank at the Goat Island
          Marine Discovery Centre using Zhang’s method.
        </p>

        <img
          className="m-4 md:m-10 md:w-[40%] md:mx-auto"
          src={Figure4}
          alt=""
        />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-5">
          Our results showed that Shell-Hash substrates consistently exhibited
          higher microtopographic variability, as captured by spatial and
          spectral roughness features. The method proved robust across different
          virtual stereo baselines and overlapping regions, highlighting its
          potential for generalizable sediment analysis.
        </p>

        <img className="m-4 md:w-[60%] md:mx-auto" src={Figure5} alt="" />
        <img className="m-4 md:w-[60%] md:mx-auto" src={Figure6} alt="" />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-5">
          Although the proposed framework is cost-effective, it has specific
          limitations. We observed that the camera must remain close enough to
          the seafloor to capture fine-scale details effectively. Moreover, the
          success of feature matching and stereo rectification is highly
          dependent on the presence of distinctive texture features in the
          sediment. In ideal conditions, the proposed pipeline can produce
          distinct microtopographic signatures valuable for differentiating
          between sediment types. When integrated with other marine data sources
          (e.g., macrofaunal community data, measures of ecosystem function and
          biogeochemical properties), the microtopographic information can
          support a more holistic understanding of seafloor characteristics.
        </p>
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-5">
          We encourage interested readers to explore the full{" "}
          <Link
            to="ACIVS_2025_Sediment_Microtopography.pdf"
            target="_blank"
            download
            className="text-accent underline"
          >
            paper
          </Link>{" "}
          for detailed methodology, implementation, and experimental results.
        </p>
        <div className="h-20" />
      </div>
    </>
  );
};

export default Marine1;
