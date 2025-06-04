import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaLinkedin, FaResearchgate, FaUniversity } from "react-icons/fa";
import { SiClarivate, SiOrcid } from "react-icons/si";
import { Link } from "react-router";

const NavbarProjects = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };
  return (
    <>
      <div className="flex bg-white text-xl justify-between fixed top-0 w-full text-black items-center px-6 mx-auto h-18 z-30">
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-accent h-3 w-3 rounded-lg" />
          <a
            className="font-semibold cursor-pointer"
            href="/example-portfolio/"
          >
            Dr. Shahrokh Heidari
          </a>
        </div>
        <ul className="hidden font-extralight md:flex gap-12 z-30 cursor-pointer">
          <li className="relative group">
            <a href="/example-portfolio/#about">About</a>
            <span className="underline_" />
          </li>

          <li className="relative group">
            <a href="/example-portfolio/#background" className="scroll-smooth">
              Background
            </a>
            <span className="underline_" />
          </li>
          <li className="relative group">
            <a href="/example-portfolio/#expertise" className="scroll-smooth">
              Expertise
            </a>
            <span className="underline_" />
          </li>

          <li className="relative group">
            <a href="/example-portfolio/#projects" className="scroll-smooth">
              Projects
            </a>
            <span className="underline_" />
          </li>

          <li className="relative group">
            <a href="/example-portfolio/#photos" className="scroll-smooth">
              Photos
            </a>
            <span className="underline_" />
          </li>

          <li className="relative group">
            <a href="/example-portfolio/#awards" className="scroll-smooth">
              Awards
            </a>
            <span className="underline_" />
          </li>
          <li className="relative group">
            <a href="/example-portfolio/#contact" className="scroll-smooth">
              Contact
            </a>
            <span className="underline_" />
          </li>
        </ul>
        <div onClick={toggleNav} className="md:hidden z-30">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div
          className={
            nav
              ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-white"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex flex-col justify-between h-screen">
            <ul className="font-extralight text-left ml-15 text-3xl space-y-8 mt-24">
              <li className="cursor-pointer">
                <a href="/example-portfolio/#about" onClick={closeNav}>
                  About
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="/example-portfolio/#background" onClick={closeNav}>
                  Background
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="/example-portfolio/#expertise" onClick={closeNav}>
                  Expertise
                </a>
              </li>

              <li className="cursor-pointer">
                <a href="/example-portfolio/#projects" onClick={closeNav}>
                  Projects
                </a>
              </li>

              <li className="cursor-pointer">
                <a href="/example-portfolio/#photos" onClick={closeNav}>
                  Photos
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="/example-portfolio/#awards" onClick={closeNav}>
                  Awards
                </a>
              </li>

              <li className="cursor-pointer">
                <a href="/example-portfolio/#contact" onClick={closeNav}>
                  Contact
                </a>
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
                <a href="https://www.webofscience.com/wos/author/record/I-7935-2019">
                  <SiClarivate />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* icons  */}
        <ul className="hidden md:flex gap-4">
          <li className="cursor-pointer text-black transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://scholar.google.com/citations?user=3qtK8QwAAAAJ&hl=en">
              <FaGoogleScholar />
            </a>
          </li>
          <li className="cursor-pointer text-black transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://nz.linkedin.com/in/shahrokh-heidari-2a1338a7">
              <FaLinkedin />
            </a>
          </li>
          <li className="cursor-pointer text-black transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://profiles.auckland.ac.nz/shahrokh-heidari">
              <FaUniversity />
            </a>
          </li>
          <li className="cursor-pointer text-black transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://orcid.org/0000-0002-1727-939X">
              <SiOrcid />
            </a>
          </li>
          <li className="cursor-pointer text-black transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://www.researchgate.net/profile/Shahrokh-Heidari">
              <FaResearchgate />
            </a>
          </li>
          <li className="cursor-pointer text-black transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent">
            <a href="https://www.webofscience.com/wos/author/record/I-7935-2019">
              <SiClarivate />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarProjects;
