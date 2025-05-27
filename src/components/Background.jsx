import React from "react";
import { Link } from "react-router";
const Background = () => {
  return (
    <>
      <div
        className="relative mx-auto snap-start h-screen flex items-center justify-center no-scrollbar"
        id="background"
      >
        <div className="absolute top-[12vh]">
          <h1 className="text-text font-medium text-[1.6rem] cursor-pointer">
            Background
          </h1>
        </div>
        <div className="w-full md:w-[65vw] md:h-[70vh] md:mt-30 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5 md:justify-items-stretch  md:items-center overflow-x-scroll md:overflow-auto scroll whitespace-nowrap scroll-smooth px-4 snap-x md:snap-none no-scrollbar mt-20">
          <div className="ml-15 md:m-0 snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ inline-block m-2  no-scrollbar"></div>
          <div className="md:m-0 snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ inline-block m-2  no-scrollbar"></div>
          <div className="mr-15 md:m-0  snap-center w-4/5 md:w-auto rounded-3xl whitespace-normal card_ inline-block m-2 no-scrollbar"></div>
        </div>
      </div>
    </>
  );
};

export default Background;
