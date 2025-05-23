import "./About.css";
import ProfilePic from "../assets/ProfilePic.png";
import BackgroundVertical from "../assets/BackgroundVertical.png";
import BackgroundHorizontal from "../assets/BackgroundHorizontal.png";

const About = () => {
  return (
    <>
      <div className="snap-start h-screen">
        <div className="flex md:flex-row flex-col-reverse w-full h-full bg-background text-text no-scrollbar">
          <div className="flex flex-col md:justify-center mt-0 md:mt-0  justify-start items-center md:w-[70vw] w-full h-[70vh] md:h-full  no-scrollbar">
            <div className="w-full h-full flex md:mb-0  flex-col gap-3 justify-center items-center no-scrollbar">
              <div className="flex justify-center no-scrollbar">
                <img
                  src={ProfilePic}
                  alt="shahrokh"
                  className="rounded-full w-[100px] md:w-[200px] outline-4 md:outline-5 outline-accent outline-offset-3"
                />
              </div>

              <div className="flex transition duration-500  no-scrollbar">
                <div className="w-[80vw] md:max-w-[600px] opacity-100 md:p-3 p-1 no-scrollbar">
                  <h1 className="text-text font-medium text-[1.6rem] md:text-5xl md:mt-4 md:mb-6 mb-2 text-nowrap no-scrollbar">
                    Dr. Shahrokh Heidari
                  </h1>
                  <h3 className="text-[1.4rem] md:mb-1 text-accent no-scrollbar">
                    About Me
                  </h3>
                  <p className="text-justify text-balance cursor-default font-light text-[0.8rem] md:text-[1rem] overflow-y-scroll no-scrollbar">
                    <span className="hidden md:inline">
                      I am a computer vision researcher with over 5 years of
                      experience in developing and deploying advanced 2D and 3D
                      vision systems. My work lies at the intersection of
                      artificial intelligence, photogrammetry, and remote
                      sensing, with a growing specialization in marine and
                      underwater environments.
                      <br />
                      <div className="hidden md:flex h-[.5rem]" />
                      Currently,{" "}
                    </span>
                    I am a Research Fellow on the Oceans of Change project at
                    Institute of Marine Science (IMS), UoA, where I am advancing
                    computer vision and underwater remote sensing methodologies
                    to support the monitoring and analysis of benthic
                    ecosystems. My expertise spans image classification,
                    segmentation, object detection, depth estimation
                    (mono/stereo), 3D reconstruction, camera calibration, and
                    high-resolution microtopographic surface analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:inline-block md:w-[30vw] w-full md:h-full h-[30vh]">
            <div
              className="w-full h-full snap-start md:bg-[image:var(--image-url-vertical)] bg-[image:var(--image-url-horizontal)] bg-center bg-cover bg-no-repeat "
              style={{
                "--image-url-vertical": `url(${BackgroundVertical})`,
                "--image-url-horizontal": `url(${BackgroundHorizontal})`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
