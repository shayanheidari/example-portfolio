import React, { useState } from "react";
import photo1_1 from "../../public/photos/1/photo1.jpg";
import photo1_2 from "../../public/photos/1/photo2.jpg";
import photo1_3 from "../../public/photos/1/photo3.jpg";
import photo1_4 from "../../public/photos/1/photo4.jpg";
import photo1_5 from "../../public/photos/1/photo5.jpg";
import photo1_6 from "../../public/photos/1/photo6.jpg";
import photo2_1 from "../../public/photos/2/photo1.jpg";
import photo2_2 from "../../public/photos/2/photo2.jpg";
import photo2_3 from "../../public/photos/2/photo3.jpg";
import photo2_4 from "../../public/photos/2/photo4.jpg";
import photo3_1 from "../../public/photos/3/1.jpg";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";

const galleries = [
  {
    images: [photo1_1, photo1_2, photo1_3, photo1_4, photo1_5, photo1_6],
    title: "PhD Graduation Ceremony",
    date: "20th September 2024",
    icon: {
      deactive: <FaRegCircle />,
      active: <FaRegCircleDot />,
    },
  },
  {
    images: [photo2_1, photo2_2, photo2_3, photo2_4],
    title:
      "Advanced Concepts for Intelligent Vision Systems: 21st International Conference, ACIVS 2023 ",
    date: "Kumamoto, Japan, 21st-23rd August 2023",
    icon: {
      deactive: <FaRegCircle />,
      active: <FaRegCircleDot />,
    },
  },

  {
    images: [photo3_1],
    title: "Brain/MINDS Data Portal Hackathon",
    date: "Saitama, Japan, 2023",
    icon: {
      deactive: <FaRegCircle />,
      active: <FaRegCircleDot />,
    },
  },
];

const Photos = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentPic, setCurrentPic] = useState(0);
  const handleClick = (index) => {
    setCurrentProject(index);
    setCurrentPic(0);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentPic === 0;
    const newIndex = isFirstSlide
      ? galleries[currentProject].images.length - 1
      : currentPic - 1;
    setCurrentPic(newIndex);
  };
  const goToNext = () => {
    const isLastSlide =
      currentPic === galleries[currentProject].images.length - 1;
    const newIndex = isLastSlide ? 0 : currentPic + 1;
    setCurrentPic(newIndex);
  };

  return (
    <>
      <div
        className="snap-start bg-background relative mx-auto h-screen flex justify-center items-center no-scrollbar"
        id="photos"
      >
        <div className="absolute top-[12vh]">
          <h1 className="text-text font-medium cursor-pointer text-[1.6rem]">
            Photo Gallery
          </h1>
        </div>
        <div className="w-full md:w-[65vw] md:h-[65vh] h-[65vh] md:mt-0 mt-10 flex flex-col md:flex-row justify-center items-center content-center md:pt-0 pt-5 px-5">
          <div className="flex flex-col gap-4 justify-center mb-10">
            <div className="relative w-full md:w-full max-h-[50vh] md:h-[50vh]  rounded-2xl">
              <img
                src={galleries[currentProject].images[currentPic]}
                alt={galleries[currentProject].title}
                className=" w-full h-full object-cover mb-4 rounded-2xl"
              />
              <div
                className={`${galleries[currentProject].images.length === 1 ? "invisible" : "visible"}  absolute text-2xl bg-white rounded-full left-5 cursor-pointer top-[50%]`}
                onClick={goToPrevious}
              >
                <MdNavigateBefore />
              </div>
              <div
                className={`${galleries[currentProject].images.length === 1 ? "invisible" : "visible"} absolute text-2xl bg-white rounded-full right-5 cursor-pointer top-[50%]`}
                onClick={goToNext}
              >
                <MdNavigateNext />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between mt-2 ml-4">
              <div>
                <h3 className="text-text font-light text-xl max-w-[650px]">
                  {galleries[currentProject].title}
                </h3>
                <p className="!text-accent italic mt-2 max-w-[450px]">
                  {galleries[currentProject].date}
                </p>
              </div>
              <ul className="ml-6 absolute bottom-[15vh] md:bottom-auto md:relative flex flex-row items-center md:h-full gap-6 justify-center mt-4 md:gap-3 self-center md:mt-2 md:ml-4">
                {galleries.map((project, index) => (
                  <li
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`text-lg cursor-pointer ${currentProject === index ? "text-accent" : "text-text"}`}
                  >
                    {currentProject === index
                      ? project.icon.active
                      : project.icon.deactive}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
