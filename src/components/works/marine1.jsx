import React from "react";
import NavbarProjects from "../NavbarProjects.jsx";
import MarineVid from "../../assets/works/marine/1/marine.mp4";
import Figure1 from "../../assets/works/marine/1/Figure1.png";
import Figure2 from "../../assets/works/marine/1/Figure2.jpg";
import Figure3 from "../../assets/works/marine/1/Figure3.png";
import Figure4 from "../../assets/works/marine/1/Figure4.png";
import Figure5 from "../../assets/works/marine/1/Figure5.jpg";
import Figure6 from "../../assets/works/marine/1/Figure6.jpg";
import { Link } from "react-router";
import { CiSaveDown1 } from "react-icons/ci";

const Marine1 = () => {
  return (
    <>
      <NavbarProjects />
      <div className="flex flex-col bg-white justify-center md:mt-35 mt-20 w-[90vw] md:w-[65vw] mx-auto text-text">
        <h1 className="md:text-4xl text-[1.4rem] font-semibold text-accent">
          Habibot: A Multi-Scale Framework for Automated Classification of Reef
          Habitats and Sea Urchin Impacts
        </h1>
        <span className="w-full bg-accent h-[4px] mt-3 rounded-3xl" />

        <video
          src={MarineVid}
          autoPlay
          muted
          loop
          className="md:w-[70%] md:mx-auto m-4 md:m-10"
        ></video>

        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          <span className="text-4xl inline-block">T</span>his research is part
          of the{" "}
          <a
            href="https://www.climatechange.ai/innovation_grants/2023/3"
            className="text-accent"
          >
            Climate Change AI (CCAI)
          </a>{" "}
          – 2023 initiative, spearheaded by{" "}
          <a
            href="https://profiles.auckland.ac.nz/arie-spyksma"
            className="text-accent"
          >
            Dr. Arie Spyksma
          </a>
          . The CCAI project addresses the ecological threats posed by
          climate-driven species redistributions, with a focus on the rapid
          proliferation of sea urchins and their impact on kelp-dominated reef
          systems across Australia and New Zealand. By leveraging machine
          learning, the project aims to deliver scalable tools for monitoring
          urchin expansion and kelp forest decline, providing actionable data
          for proactive reef management.
        </p>

        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          I had the honor of collaborating with{" "}
          <a
            href="https://profiles.auckland.ac.nz/katerina-taskova/about"
            className="text-accent"
          >
            Dr. Katerina Taskova
          </a>
          , Kelham Rawlinson, and{" "}
          <a
            href="https://profiles.auckland.ac.nz/arie-spyksma"
            className="text-accent"
          >
            Dr. Arie Spyksma
          </a>{" "}
          to develop advanced AI tools for automated habitat classification of
          shallow reef environments. This work aims to address a growing
          ecological crisis: the rapid transformation of kelp forests into
          urchin barrens. Despite the increasing availability of underwater
          imagery for reef monitoring, the manual annotation and analysis of
          these datasets remain labor-intensive, time-consuming, and spatially
          limited. Traditional monitoring methods are not scalable, especially
          given the urgency of climate-driven ecological change. Many prior
          studies focused on visually distinct and spatially uniform habitats
          like coral reefs or surface-emergent kelp, but these approaches fall
          short when dealing with heterogeneous, visually ambiguous, and
          transitional habitats. To address this, our study set out to develop
          an ensemble machine learning framework capable of providing accurate,
          interpretable, and scalable habitat classification. Our work builds
          upon pre-existing underwater imagery datasets annotated using the
          random point count method, in which ecologists place random markers
          across each image and label the species directly beneath those points.
        </p>
        <img className="m-4 md:m-10" src={Figure1} alt="" />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          While effective for species abundance estimation, this approach
          introduces several challenges for training machine learning models:
          <ul className="my-2">
            <li className="list-disc ml-10">
              Labels are sparse and localized, capturing only a limited portion
              of the ecological context.{" "}
            </li>
            <li className="list-disc ml-10">
              Important visual patterns like spatial zonation, structural
              continuity, or ecological transitions are often missed.
            </li>
            <li className="list-disc ml-10">
              Class imbalance is common, with underrepresented or visually
              ambiguous classes introducing noise or bias into the model.
            </li>
          </ul>
          To overcome these limitations, we adopted a multi-scale strategy that
          combines a <span className="font-normal">patch-level classifier</span>{" "}
          for fine-grained species identification, a{" "}
          <span className="font-normal">frame-level classifier</span> for
          capturing broader ecological patterns, and a{" "}
          <span className="font-normal">YOLOv5-based urchin detector</span> to
          quantify urchin presence, enabling accurate classification of both
          distinct and transitional reef habitats.
        </p>

        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          Our patch dataset, sourced from 113 sub-datasets across coastal
          Australia and New Zealand, was carefully refined to remove
          underrepresented, ambiguous, or visually overlapping classes,
          resulting in a curated set of{" "}
          <span className="font-normal">218,000 image patches</span> used for
          localized classification. In parallel, we assembled a frame dataset of{" "}
          <span className="font-normal">8,238 full-frame images</span>, labeled
          into five ecologically meaningful habitat types to capture large-scale
          spatial structure and mitigate annotation bias. To quantify urchin
          presence, a key driver of reef degradation, we integrated{" "}
          <span className="font-normal">Urchinbot</span> developed and trained
          by Kelham Rawlinson on{" "}
          <span className="font-normal">9,872 annotated images</span> of three
          urchin species, providing precise instance-level detections beyond
          what patch/frame classifiers could reliably offer.
        </p>
        <img
          className="m-4 md:m-10 md:w-[60%] md:mx-auto"
          src={Figure2}
          alt=""
        />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          For both patch and frame classification, we employed deep
          convolutional neural networks using a transfer learning approach.
          Pre-trained models were repurposed as feature extractors, with custom
          dense classification heads added for task-specific learning. Extensive
          benchmarking was conducted across multiple architectures, and based on
          validation performance, ConvNeXtBase was selected for the patch
          classifier, while InceptionV3 was chosen for the frame classifier for
          its robustness in modeling broader spatial and ecological patterns.
        </p>
        <img
          className="m-4 md:m-10 md:w-[60%] md:mx-auto"
          src={Figure3}
          alt=""
        />
        <img
          className="m-4 md:m-10 md:w-[60%] md:mx-auto"
          src={Figure4}
          alt=""
        />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          To integrate the strengths of both spatial and species-level
          information, we developed a rule-based habitat classifier that
          combines outputs from the frame classifier, patch classifier, and
          urchin detector to provide an ecologically meaningful classification
          for each frame. Given a single input image, the system first extracts
          three sets of information: (1) the frame classifier outputs a
          predicted habitat class along with a confidence score, (2) the patch
          classifier analyzes a fixed grid of patches across the image and
          provides the proportion of valid patches assigned to each habitat
          class (excluding those classified as urchin or deemed unscorable), and
          (3) the urchin detector (Urchinbot) returns the total number of
          urchins detected in the frame. The rule-based classifier then uses a
          series of logic conditions to refine or override the initial frame
          prediction based on these three inputs. The result is one of seven
          output classes:{" "}
          <span className="italic">
            Reef-Kelp, Reef-Vegetated, Reef-Grazed, Reef-Urchin-Barren,
            Reef-Partial-Grazed, Reef-Partial-Urchin-Barren, or Unconsolidated.
          </span>
        </p>
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-5 !font-normal">
          The full paper detailing this work is currently under review and will
          be available online soon.
        </p>
        <div className="flex flex-col md:flex-row w-full mx-auto">
          <img className="md:w-[40%] md:mx-auto m-4" src={Figure5} alt="" />
          <img className="md:w-[40%] md:mx-auto  m-4" src={Figure6} alt="" />
        </div>
        <div className="h-20" />
      </div>
    </>
  );
};

export default Marine1;
