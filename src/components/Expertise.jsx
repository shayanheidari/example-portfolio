import React from "react";

const Expertise = () => {
  return (
    <>
      <div
        className="relative mx-auto snap-start h-screen flex items-center justify-center no-scrollbar"
        id="expertise"
      >
        <div className="absolute top-[12vh]">
          <h1 className="text-text font-medium text-[1.6rem] cursor-pointer">
            Core Skills and Technical Expertise
          </h1>
        </div>
        <div className="w-full md:w-[65vw] md:h-[70vh] md:mt-30 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5 md:justify-items-stretch  md:items-center overflow-x-scroll md:overflow-auto scroll whitespace-nowrap scroll-smooth px-4 snap-x md:snap-none no-scrollbar mt-20">
          <div className="ml-15 md:m-0 snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ inline-block m-2  no-scrollbar">
            <h3 className="font-semibold text-2xl text-accent pb-3">
              Artificial Intelligence & Machine Learning
            </h3>
            <p className="text-pretty text-text  md:h-auto h-[calc(100%-70px)] overflow-y-scroll no-scrollbar">
              <ul className="wrap-anywhere ml-2 text-left ">
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text ">
                    Supervised, Unsupervised, Self-Supervised, and
                    Semi-Supervised, Weakly Supervised Learning
                  </span>
                </li>
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text ">
                    Transfer Learning, Few/Zero-Shot Learning
                  </span>
                </li>
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text">
                    Convolutional Neural Networks (CNNs), Vision Transformers
                    (ViTs), Graph Neural Networks (GNN){" "}
                  </span>
                </li>
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text">
                    Temporal Modeling: LRCN, ConvLSTM, RNN, GRU
                  </span>
                </li>
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text">
                    Metric Learning, Embedding Learning, Anomaly Detection,
                    Architecture Optimization, Domain Adaptation, and
                    Cross-modal Fusion
                  </span>
                </li>
              </ul>
            </p>
          </div>
          <div className="md:m-0 snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ inline-block m-2  no-scrollbar">
            <h3 className="font-semibold text-2xl text-accent pb-3">
              2D/3D Computer Vision & Image Processing
            </h3>
            <p className="text-pretty text-text md:h-auto w-full h-[calc(100%-70px)] overflow-y-scroll no-scrollbar">
              <ul className="wrap-anywhere ml-2 text-left ">
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text ">
                    Object Detection, Image Segmentation, Scene Classification,
                    Depth Estimation (Stereo and Monocular), Point Cloud
                    Processing
                  </span>
                </li>
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text ">
                    Image Enhancement, Noise Reduction, Histogram Analysis,
                    Morphological Operations, Feature Extraction, Texture
                    Analysis, Connected Components, Edge Detection, Filtering,
                    and Color Space Transformations
                  </span>
                </li>
              </ul>
            </p>
          </div>
          <div className="md:m-0 snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ inline-block m-2  no-scrollbar">
            <h3 className="font-semibold text-2xl text-accent pb-3">
              Photogrammetry & Remote Sensing
            </h3>
            <p className="text-pretty text-text md:h-auto w-full h-[calc(100%-70px)] overflow-y-scroll no-scrollbar">
              <ul className="wrap-anywhere ml-2 text-left">
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text ">
                    Camera Calibration and Distortion Remova
                  </span>
                </li>
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text ">
                    Epipolar Geometry, Stereo Rectification, Stereo Matching,
                    Structure-from-Motion, Dense Reconstruction
                  </span>
                </li>
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text ">
                    3D Reconstruction from Mono/Stereo
                  </span>
                </li>
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text ">
                    Neural Radiance Fields (NeRF)
                  </span>
                </li>
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text ">
                    Surface Microtopography Analysis in Spatial and Frequency
                    Domains
                  </span>
                </li>
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text ">Orthomosaic Generation</span>
                </li>
                <li className="ml-2 list-disc text-accent">
                  <span className="text-text ">
                    Underwater, UAV-Based, Infrared Photogrammetry
                  </span>
                </li>
              </ul>
            </p>
          </div>
          <div className="mr-15 md:m-0  snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ inline-block m-2 no-scrollbar">
            <h3 className="font-semibold text-2xl text-accent pb-3">
              Quantum Annealing & Energy Minimization
            </h3>
            <p className="text-pretty text-text  md:h-auto h-[calc(100%-70px)] overflow-y-scroll no-scrollbar">
              <li className="ml-3 list-disc text-accent">
                <span className="text-text">
                  Linear Algebra, Calculus, Probability Theory, Graph Theory,
                  Combinatorial Optimization, Discrete Optimization, Constraint
                  Satisfaction Problems, Ising Models, QUBO (Quadratic
                  Unconstrained Binary Optimization), Adiabatic Theorem, D-Wave
                  Quantum Annealers, Minor Embedding, Chain Strength Tuning,
                  Hybrid Quantum-Classical Workflows, Problem Mapping
                  Techniques, Optimization Heuristics
                </span>
              </li>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
