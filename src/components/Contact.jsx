import { CiMail } from "react-icons/ci";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGoogleScholar } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaResearchgate, FaUniversity } from "react-icons/fa";
import { SiClarivate, SiOrcid } from "react-icons/si";
import { CiPhone } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { section } from "framer-motion/client";

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
        <div className=" w-full md:w-[65vw] md:h-[65vh] h-[65vh]  md:mt-30 md:flex px-6 snap-x md:snap-none no-scrollbar mt-20 items-center">
          <div className="flex flex-col h-full w-full pb-30 justify-center items-center font-extralight text-text text-xl">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <ul className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 w-full gap-3 h-full  mt-15 justify-between text-2xl mb-20 md:mb-0">
                <li className="text-accent">
                  <a
                    className="text-text w-full text-center md:block hover:text-accent transition duration-100 delay-100"
                    href="https://scholar.google.com/citations?user=3qtK8QwAAAAJ&hl=en"
                  >
                    <FaGoogleScholar className="text-accent inline-block md:text-4xl md:mr-4 mr-2" />
                    Google Scholar
                  </a>
                </li>
                <li className="text-accent">
                  <a
                    className="text-text w-full text-center md:block hover:text-accent transition duration-100 delay-100"
                    href="https://nz.linkedin.com/in/shahrokh-heidari-2a1338a7"
                  >
                    <FaLinkedin className="text-accent inline-block md:text-4xl md:mr-4 mr-2" />{" "}
                    LinkedIn
                  </a>
                </li>
                <li className="text-accent">
                  <a
                    className="text-text w-full text-center md:block hover:text-accent transition duration-100 delay-100"
                    href="https://profiles.auckland.ac.nz/shahrokh-heidari"
                  >
                    <FaUniversity className="text-accent inline-block md:text-4xl md:mr-4 mr-2" />{" "}
                    Auckland University
                  </a>
                </li>
                <li className="text-accent">
                  <a
                    className="text-text w-full text-center md:block hover:text-accent transition duration-100 delay-100"
                    href="https://orcid.org/0000-0002-1727-939X"
                  >
                    <SiOrcid className="text-accent inline-block md:text-4xl md:mr-4 mr-2" />{" "}
                    ORCID
                  </a>
                </li>
                <li className="text-accent">
                  <a
                    className="text-text w-full text-center md:block hover:text-accent transition duration-100 delay-100"
                    href="https://www.researchgate.net/profile/Shahrokh-Heidari"
                  >
                    <FaResearchgate className="text-accent inline-block md:text-4xl md:mr-4 mr-2" />{" "}
                    ResearchGate
                  </a>
                </li>
                <li className="text-accent">
                  <a
                    className="text-text w-full text-center md:block hover:text-accent transition duration-100 delay-100"
                    href="https://www.webofscience.com/wos/author/record/I-7935-2019"
                  >
                    <SiClarivate className="text-accent inline-block md:text-4xl md:mr-4 mr-2" />
                    Web Of Science
                  </a>
                </li>
              </ul>

              <section className="hidden contact">
                {" "}
                <form
                  action=""
                  method="POST"
                  className="hidden md:block hover:text-accent transition duration-100 delay-100 max-w-6xl p-5 md:p-12"
                  id="form"
                  required
                >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mb-2 w-full rounded-xl border border-accent py-2 pl-2 pr-4"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email..."
                    className="mb-2 w-full rounded-xl border border-accent py-2 pl-2 pr-4"
                  />
                  <textarea
                    name="message"
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
              </section>
            </div>
            <div className="w-full mx-auto">
              <span className="text-accent w-full text-center block">
                Shahrokh.Heidari@auckland.ac.nz
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
