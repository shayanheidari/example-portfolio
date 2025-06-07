import React from "react";
import NavbarProjects from "../NavbarProjects.jsx";
import Video1 from "../../assets/works/others/1/Video1.mp4";
import Figure1 from "../../assets/works/others/1/Figure1.jpg";
import Figure2 from "../../assets/works/others/1/Figure2.jpg";
import Figure3 from "../../assets/works/others/1/Figure3.jpg";
import Figure4 from "../../assets/works/others/1/Figure4.jpg";
import Figure5 from "../../assets/works/others/1/Figure5.jpg";
import Figure6 from "../../assets/works/others/1/Figure6.jpg";
import { Link } from "react-router";
import { CiSaveDown1 } from "react-icons/ci";

const Others1 = () => {
  return (
    <>
      <NavbarProjects />
      <div className="flex flex-col bg-white justify-center md:mt-35 mt-20 w-[90vw] md:w-[65vw] mx-auto text-text">
        <h1 className="md:text-4xl text-[1.4rem] font-semibold text-accent">
          Heat Signatures and Hidden Threats: Temporal Deep Learning for
          Biosecurity-Driven Predator Detection
        </h1>
        <span className="w-full bg-accent h-[4px] mt-3 rounded-3xl" />

        <video
          src={Video1}
          autoPlay
          muted
          loop
          playsInline
          className="md:w-[70%] md:mx-auto m-4 md:m-10"
        ></video>

        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          <span className="text-4xl inline-block">T</span>his project was
          conducted as part of the Science for Technological Innovation (SfTI)
          National Science Challenge, under the Biosecurity Spearhead Project
          (2023) led by{" "}
          <a
            href="https://profiles.auckland.ac.nz/katerina-taskova/about"
            className="text-accent"
          >
            Dr.Katerina Taskova
          </a>
          {""}. I had the honor of contributing to the development of AI models
          alongside{" "}
          <a
            href="https://profiles.auckland.ac.nz/liam-brydon/about"
            className="text-accent"
          >
            Liam Brydon
          </a>
          ,{" "}
          <a
            href="https://profiles.auckland.ac.nz/sandra-gomez-galvez"
            className="text-accent"
          >
            Sandra Gómez Gálvez
          </a>
          , and{" "}
          <a href="https://profiles.auckland.ac.nz/katerina-taskova/about">
            Dr. Taskova
          </a>
          . Together, we focused on advancing predator detection in thermal
          wildlife videos, aiming to support New Zealand’s Predator-Free 2050
          vision through efficient, real-time deep learning solutions.
        </p>
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          New Zealand’s unique biodiversity faces an existential threat from
          introduced predators, which are responsible for the death of over 25
          million native birds each year. As part of the country's ambitious
          Predator-Free 2050 initiative, effective and reliable detection of
          these pests, particularly in remote, nocturnal environments, is
          critical. Traditional RGB-based monitoring systems fall short in
          low-light conditions, making thermal imaging a vital tool for
          capturing the presence of warm-bodied predators in dense bush
          settings. However, detecting and classifying animal species from
          low-resolution thermal videos presents significant technical
          challenges. Most existing approaches focus on single-frame
          classification and struggle to generalize due to poor resolution,
          domain shifts from RGB-trained models, and a lack of temporal context.
          Furthermore, many of these models are computationally intensive and
          unsuitable for real-time deployment in resource-constrained ecological
          settings.
        </p>

        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          To address these challenges, our study investigates lightweight
          AI-models that combines spatial feature extraction from Convolutional
          Neural Networks (CNNs) with temporal modeling using Recurrent Neural
          Networks (RNNs), specifically Gated Recurrent Units (GRUs). Our
          approach leverages the temporal dynamics of thermal video sequences to
          enhance classification accuracy without compromising efficiency. We
          demonstrate the effectiveness of our method on a large-scale thermal
          wildlife dataset, achieving state-of-the-art results in both
          whole-frame and cropped-frame classification settings.
        </p>
        <img
          className="m-4 md:m-10 md:w-[60%] md:mx-auto"
          src={Figure1}
          alt=""
        />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-2">
          Our study utilized a large-scale collection of over 120,000
          low-resolution thermal videos captured by The Cacophony Project. The
          dataset features a wide range of species, which we grouped into two
          main categories: predators (rodent, mustelid, ferret, stoat, mouse,
          rat, hare, rabbit, leporidae, hedgehog, cat, dog, wallaby, possum,
          predator) and non-predators (bird, human, insect, sheep, chicken,
          penguin, false-positive). Visually similar species were consolidated
          into higher-level classes e.g., rodent (rodent, rat, mouse) to reduce
          intra-class variability, followed by filtering out rare species. To
          support both ecological monitoring and practical deployment, we
          employed a two-stage classification strategy: a multi-class model to
          predict among 12 species-level categories, followed by a binary
          classification that maps these predictions into predator vs.
          non-predator classes for real-time alerting and downstream
          conservation decisions. We also explored and tested multiple
          preprocessing strategies, double background subtraction, min-max
          normalization, and global temperature normalization. Among these,
          double background subtraction proved especially effective for
          isolating animals by removing dynamic background noise.
        </p>
        <img
          className="m-4 md:m-10 md:w-[60%] md:mx-auto"
          src={Figure2}
          alt=""
        />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-5">
          To address the challenges of species classification in low-resolution
          thermal videos, we designed a lightweight deep learning pipeline that
          integrates both spatial and temporal information. The pipeline begins
          with frame-level spatial feature extraction using a CNN. This CNN
          generates a compact feature representation for each frame, preserving
          essential spatial characteristics relevant to species identification.
          To model movement and behavior across frames, we passed the
          CNN-derived features into a temporal module, comparing GRUs with
          Transformers.
        </p>

        <img
          className="m-4 md:m-10 md:w-[70%] md:mx-auto"
          src={Figure3}
          alt=""
        />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-5">
          GRUs were ultimately selected for their low computational cost and
          effective handling of sequential dependencies. We further tested
          different temporal pooling mechanisms, including last-frame, max, and
          attention pooling. The final output was passed through a fully
          connected layer and softmax function to predict the species class,
          which was then mapped to predator or non-predator. This architecture,
          referred to as CNN-GRU, was trained end-to-end using cross-entropy
          loss and optimized with Adam, with hyperparameters fine-tuned in a
          multi-phase training strategy.
        </p>

        <img className="m-4 md:w-[60%] md:mx-auto" src={Figure4} alt="" />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-5">
          To evaluate how spatial context influences classification performance,
          we developed and compared two settings: whole-frame classification and
          cropped-frame classification. In the whole-frame setup, the model
          processes the entire thermal frame, allowing it to leverage background
          and contextual cues but also requiring it to distinguish animals from
          potentially noisy surroundings. In contrast, the cropped-frame setting
          uses ground-truth bounding boxes to isolate only the animal region in
          each frame, enabling the model to focus solely on the subject. Both
          configurations were trained using the same CNN-GRU architecture and
          evaluated under identical conditions. The cropped-frame model
          (CropCNN-GRU) achieved superior performance.
        </p>
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-5">
          To further benchmark our approach, we trained a non-temporal object
          detection model using Faster R-CNN on single thermal frames.
          Predictions were then aggregated across frames using a majority vote
          strategy to assign video-level labels. This baseline, referred to as
          FRCNN-MjV, allowed us to compare our temporal modeling approach
          against a frame-wise detector commonly used in ecological monitoring.
          While FRCNN-MjV performed reasonably well, it lacked the temporal
          context needed for accurate predictions in challenging sequences. This
          comparison emphasized the importance of incorporating temporal
          dynamics, especially in low-resolution thermal footage where
          single-frame information is often insufficient.
        </p>
        <img className="m-4 md:w-[60%] md:mx-auto" src={Figure5} alt="" />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-5">
          To further visualize the impact of incorporating temporal modelling
          for decision-making across a sequence of frames, we employed
          Gradient-weighted Class Activation Mapping (Grad-CAM). Grad-CAM
          highlights the most relevant regions of an input frame that contribute
          to the model’s predictions by utilizing the gradients of the target
          class flowing into one of its convolutional layers. However, in the
          case of a temporal classifier like CNN-GRU, these gradients are
          computed over an entire sequence of frames rather than individual
          images. This allows us to analyze how the CNN-GRU model shifts its
          attention patterns compared to a frame-wise CNN classifier, where each
          frame is processed independently. Such a shift is particularly
          important in scenarios where animals are only partially visible in
          certain frames, making individual frames insufficient for frame-level
          classification. By leveraging temporal dependencies, the CNN-GRU model
          can integrate contextual information across frames, potentially
          improving robustness in cases where crucial visual cues are
          intermittently occluded or absent.
        </p>

        <img className="m-4 md:w-[60%] md:mx-auto" src={Figure6} alt="" />
        <p className="!text-black text-justify tracking-normal md:text-[1.2rem] text-[1.1rem] my-5 !font-normal">
          The full paper detailing this work is currently under review and will
          be available online soon.
        </p>
        <div className="h-20" />
      </div>
    </>
  );
};

export default Others1;
