import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const Contact = () => {
  return (
    <>
      <div
        className="relative mx-auto snap-start h-screen flex items-center justify-center no-scrollbar"
        id="contact"
      >
        <div className="absolute top-[12vh]">
          <h1 className="text-text font-medium text-[1.6rem] cursor-pointer">
            Contact
          </h1>
        </div>
        <div className=" w-full md:w-[65vw] md:h-[65vh] h-[55vh]  md:mt-30 md:flex px-4 snap-x md:snap-none no-scrollbar mt-20 items-center">
          <div className="flex flex-col h-full ml-7 md:ml-70 pb-30 justify-center font-extralight text-text text-xl">
            <div className="mb-4">
              <p className="!text-accent !text-2xl mb-2">
                <CiMail />
              </p>
              <h4>shei972@aucklanduni.ac.nz</h4>
            </div>
            <div className="mb-4">
              <p className="!text-accent !text-2xl mb-2">
                <CiPhone />
              </p>
              <h4>+64 2216 18058</h4>
            </div>
            <div className="mb-4">
              <p className="!text-accent !text-2xl mb-2">
                <CiLinkedin />
              </p>
              <h4>shahrokh-heidari-2a1338a7</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
