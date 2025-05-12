import React from "react";

const Expertise = () => {
  return (
    <>
      <div className="mx-auto snap-start h-screen flex items-center justify-center">
        <div className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth px-4 snap-x">
          <div className="ml-15 snap-center w-4/5 md:w-1/5 rounded-3xl h-[70vh] whitespace-normal card__ inline-block m-2 ">
            <div className="h-full w-full flex flex-col p-3">
              <h2 className="text-accent font-semibold text-2xl mb-3">
                Quantum Annealing & Energy Minimization
              </h2>
              <li className="list-disc text-accent">
                <span className="text-text text-[1.1rem]">
                  Linear Algebra, Calculus, Probability Theory, Graph Theory,
                  Combinatorial Optimization, Discrete Optimization, Constraint
                  Satisfaction Problems, Ising Models, QUBO (Quadratic
                  Unconstrained Binary Optimization), Adiabatic Theorem, D-Wave
                  Quantum Annealers, Minor Embedding, Chain Strength Tuning,
                  Hybrid Quantum-Classical Workflows, Problem Mapping
                  Techniques, Optimization Heuristics
                </span>
              </li>
            </div>
          </div>
          <div className="snap-center w-3/4 md:w-1/5 rounded-3xl h-[70vh] whitespace-normal card__ inline-block m-2 cursor-pointer">
            <div className="h-full w-full flex flex-col p-3">
              <h2 className="text-accent font-semibold text-2xl mb-3">
                Artificial Intelligence & Machine Learning
              </h2>
              <ul className="wrap-anywhere ml-2 text-justify text-[1.1rem]">
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Supervised, Unsupervised, Self-Supervised, and
                    Semi-Supervised Learning
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Transfer Learning, Few/Zero-Shot Learning
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Convolutional Neural Networks (CNNs), Vision Transformers
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Temporal Modeling: LRCN, ConvLSTM, RNN, GRU
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Metric Learning, Embedding Learning, Anomaly Detection
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Architecture optimization, domain adaptation, and
                    cross-modal fusion
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="snap-center w-3/4 md:w-1/5 rounded-3xl h-[70vh] whitespace-normal card__ inline-block m-2 cursor-pointer">
            <div className="h-full w-full flex flex-col p-3">
              <h2 className="text-accent font-semibold text-2xl mb-3">
                2D/3D Computer Vision & Scene Understanding
              </h2>
              <ul className="wrap-anywhere ml-2 text-justify text-[1.1rem]">
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Object Detection, Image Segmentation, Scene Classification
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Depth Estimation (Stereo and Monocular)
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Structure-from-Motion, Dense Reconstruction
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Integration of image-based 3D data with remote sensing for
                    environmental monitoring
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="snap-center w-3/4 md:w-1/5 rounded-3xl h-[70vh] whitespace-normal card__ inline-block m-2 cursor-pointer">
            <div className="h-full w-full flex flex-col p-3">
              <h2 className="text-accent font-semibold text-2xl mb-3">
                Image Processing
              </h2>
              <ul className="wrap-anywhere ml-2 text-justify text-[1.1rem]">
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Image Enhancement, Noise Reduction, Histogram Analysis,
                    Morphological Operations, Feature Extraction, Texture
                    Analysis, Connected Components, Edge Detection, Filtering,
                    and Color Space Transformations
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-15 snap-center w-3/4 md:w-1/5 rounded-3xl h-[70vh] whitespace-normal card__ inline-block m-2 cursor-pointer">
            <div className="h-full w-full flex flex-col p-3">
              <h2 className="text-accent font-semibold text-2xl mb-3">
                Photogrammetry & Remote Sensing
              </h2>
              <ul className="wrap-anywhere ml-2 text-justify text-[1.1rem]">
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Camera Calibration and Distortion Removal
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Epipolar Geometry, Stereo Rectification, Stereo Matching
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    3D Reconstruction from Mono/Stereo
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Point Cloud Generation and Processing
                  </span>
                </li>
                <li className="list-disc text-accent">
                  <span className="text-text text-[1.1rem]">
                    Surface Microtopography Analysis in Spatial and Frequency
                    Domains
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
