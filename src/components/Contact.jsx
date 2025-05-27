import { CiMail } from "react-icons/ci";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGoogleScholar } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaResearchgate, FaUniversity } from "react-icons/fa";
import { SiClarivate, SiOrcid } from "react-icons/si";
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
        <div className=" w-full md:w-[65vw] md:h-[65vh] h-[65vh]  md:mt-30 md:flex px-4 snap-x md:snap-none no-scrollbar mt-20 items-center">
          <div className="flex flex-col h-full ml-6 pb-30 justify-center font-extralight text-text text-xl">
            <div className="w-full h-full flex md:flex-row justify-center items-center gap-4">
              <ul className="flex flex-col w-full gap-3 h-full mt-15 justify-between text-2xl mb-[15vh]">
                <li className="text-accent">
                  <a
                    className="text-text"
                    href="https://scholar.google.com/citations?user=3qtK8QwAAAAJ&hl=en"
                  >
                    <FaGoogleScholar className="text-accent inline-block mr-2" />
                    Google Scholar
                  </a>
                </li>
                <li className="text-accent">
                  <a
                    className="text-text"
                    href="https://nz.linkedin.com/in/shahrokh-heidari-2a1338a7"
                  >
                    <FaLinkedin className="text-accent inline-block mr-2" />{" "}
                    Linkedin
                  </a>
                </li>
                <li className="text-accent">
                  <a
                    className="text-text"
                    href="https://profiles.auckland.ac.nz/shahrokh-heidari"
                  >
                    <FaUniversity className="text-accent inline-block mr-2" />{" "}
                    Auckland Univercity
                  </a>
                </li>
                <li className="text-accent">
                  <a
                    className="text-text"
                    href="https://orcid.org/0000-0002-1727-939X"
                  >
                    <SiOrcid className="text-accent inline-block mr-2" /> Orcid
                  </a>
                </li>
                <li className="text-accent">
                  <a
                    className="text-text"
                    href="https://www.researchgate.net/profile/Shahrokh-Heidari"
                  >
                    <FaResearchgate className="text-accent inline-block mr-2" />{" "}
                    ResearchGate
                  </a>
                </li>
                <li className="text-accent">
                  <a
                    className="text-text"
                    href="https://www.webofscience.com/wos/author/record/I-7935-2019"
                  >
                    <SiClarivate className="text-accent inline-block mr-2" />
                    Web Of Science
                  </a>
                </li>
                <span>
                  <IoIosMail className="text-accent inline-block mr-2" />
                  example@gmail.com
                </span>
              </ul>

              <form
                action=""
                method="POST"
                className="invisible md:visible max-w-6xl p-5 md:p-12"
                id="form"
              >
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name..."
                  className="mb-2 w-full rounded-xl border border-accent py-2 pl-2 pr-4"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email..."
                  className="mb-2 w-full rounded-xl border border-accent py-2 pl-2 pr-4"
                />
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="4"
                  placeholder="Your Message..."
                  className="mb-2 w-full rounded-xl border border-accent py-2 pl-2 pr-4"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-background font-medium text-xl bg-accent"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
