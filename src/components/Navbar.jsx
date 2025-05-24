import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaLinkedin, FaResearchgate, FaUniversity } from "react-icons/fa";
import { SiClarivate, SiOrcid } from "react-icons/si";
import { Link } from "react-router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };
  return (
    <>
      <div className="flex text-xl justify-between fixed top-0 w-full text-text items-center px-6 mx-auto h-18 z-10">
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-accent h-3 w-3 rounded-lg" />
          <a className="font-semibold cursor-pointer" href="#about">
            Dr. Shahrokh Heidari
          </a>
        </div>
        <ul className="hidden font-extralight md:flex gap-12 z-10 cursor-pointer">
          <li className="relative group">
            <Link to="#about">About</Link>
            <span className="underline_" />
          </li>

          <li className="relative group">
            <Link to="#background" className="scroll-smooth">
              Background
            </Link>
            <span className="underline_" />
          </li>
          <li className="relative group">
            <Link to="#expertise" className="scroll-smooth">
              Expertise
            </Link>
            <span className="underline_" />
          </li>

          <li className="relative group">
            <Link to="#works" className="scroll-smooth">
              Works
            </Link>
            <span className="underline_" />
          </li>

          <li className="relative group">
            <Link to="#awards" className="scroll-smooth">
              Awards
            </Link>
            <span className="underline_" />
          </li>
          <li className="relative group">
            <Link to="#contact" className="scroll-smooth">
              Contact
            </Link>
            <span className="underline_" />
          </li>
        </ul>
        <div onClick={toggleNav} className="md:hidden z-30">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div
          className={
            nav
              ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-background"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex flex-col justify-between h-screen">
            <ul className="font-extralight text-left ml-15 text-3xl space-y-8 mt-24">
              <li className="cursor-pointer">
                <Link to="about" onClick={closeNav}>
                  About
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="#background" onClick={closeNav}>
                  Background
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="expertise" onClick={closeNav}>
                  Expertise
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link to="#works" onClick={closeNav}>
                  Works
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link to="#awards" onClick={closeNav}>
                  Awards
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link to="#contact" onClick={closeNav}>
                  Contact
                </Link>
              </li>
            </ul>

            <ul className="flex justify-between mx-20 text-2xl mb-[15vh]">
              <li className="text-accent">
                <a href="https://scholar.google.com/citations?user=3qtK8QwAAAAJ&hl=en">
                  <FaGoogleScholar />
                </a>
              </li>
              <li className="text-accent">
                <a href="https://nz.linkedin.com/in/shahrokh-heidari-2a1338a7">
                  <FaLinkedin />
                </a>
              </li>
              <li className="text-accent">
                <a href="https://profiles.auckland.ac.nz/shahrokh-heidari">
                  <FaUniversity />
                </a>
              </li>
              <li className="text-accent">
                <a href="https://orcid.org/0000-0002-1727-939X">
                  <SiOrcid />
                </a>
              </li>
              <li className="text-accent">
                <a href="https://www.researchgate.net/profile/Shahrokh-Heidari">
                  <FaResearchgate />
                </a>
              </li>
              <li className="text-accent">
                <a href="https://www.auckland.ac.nz/en/students/academic-information/postgraduate-students/doctoral/thesis-and-examination/dean-s-list/deans-list-2024.html">
                  <SiClarivate />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* icons  */}
        <ul className="hidden md:flex gap-4">
          <li className="cursor-pointer text-text transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://scholar.google.com/citations?user=3qtK8QwAAAAJ&hl=en">
              <FaGoogleScholar />
            </a>
          </li>
          <li className="cursor-pointer text-text transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://nz.linkedin.com/in/shahrokh-heidari-2a1338a7">
              <FaLinkedin />
            </a>
          </li>
          <li className="cursor-pointer text-text transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://profiles.auckland.ac.nz/shahrokh-heidari">
              <FaUniversity />
            </a>
          </li>
          <li className="cursor-pointer text-text transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://orcid.org/0000-0002-1727-939X">
              <SiOrcid />
            </a>
          </li>
          <li className="cursor-pointer text-text transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://www.researchgate.net/profile/Shahrokh-Heidari">
              <FaResearchgate />
            </a>
          </li>
          <li className="cursor-pointer text-text transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://www.auckland.ac.nz/en/students/academic-information/postgraduate-students/doctoral/thesis-and-examination/dean-s-list/deans-list-2024.html">
              <SiClarivate />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
