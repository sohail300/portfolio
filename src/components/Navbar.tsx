import { Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { RESUME_LINK } from "../utils/links";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const navRef = useRef(null);
  const listRef = useRef<HTMLUListElement>(null);

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  useEffect(() => {
    if (listRef.current) {
      animate(
        listRef.current,
        {
          width: open ? 150 : 0,
          height: open ? 600 : 0,
          opacity: open ? 1 : 0,
        },
        {
          type: "spring",
          bounce: 0.3,
          duration: 0.4,
        }
      );
      animate(
        listRef.current.querySelectorAll("li"),
        open
          ? { opacity: 1, scale: 1, x: 0 }
          : { opacity: 0, scale: 0.3, x: -50 },
        {
          duration: 0.2,
          delay: open ? staggerList : 0,
        }
      );
    }
  }, [open, animate, staggerList]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          backgroundImage:
            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        className="w-56 top-0 right-0 z-10 hidden lg:block lg:w-screen"
      >
        <ul className="navbar w-4/5 flex flex-col justify-between mx-auto py-4 lg:flex-row ">
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink to="#home">Home</HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink to="#education">Education</HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink to="#experience">Experience</HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink to="#projects">Projects</HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink to="#designs">Designs</HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink to="#skills">Skills</HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink to="#achievements">Achievements</HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink to="#contact">Contact Me</HashLink>
          </li>
          <li className=" mb-2 lg:mb-0">
            <a
              href={RESUME_LINK}
              target="_blank"
              className=" px-8 py-2 bg-white text-black text-center rounded-md font-semibold"
              style={{ color: "#004632" }}
            >
              View Resume ⚡
            </a>
          </li>
        </ul>
      </div>

      {open === false ? (
        <span className="fixed top-4 right-4" ref={scope}>
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className=" text-red-500 text-lg z-50" size={30} />
          </motion.button>
        </span>
      ) : (
        <div
          style={{
            position: "fixed",
            backgroundImage:
              "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
            backdropFilter: "blur(10px)",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
          className={`w-56 top-0 right-0 z-10 flex flex-col transform transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          ref={navRef}
        >
          <ul
            className="navbar w-0 flex flex-col justify-between mx-auto py-4 lg:flex-row h-0 opacity-0"
            ref={listRef}
          >
            <motion.li className=" cursor-pointer font-heading mb-6 lg:mb-0 text-sm text-red-500">
              <HashLink to="#home" onClick={() => setOpen(false)}>
                Close
              </HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink to="#home">Home</HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink to="#education">Education</HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink to="#experience">Experience</HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink to="#projects">Projects</HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink to="#designs">Designs</HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink to="#skills">Skills</HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink to="#achievements">Achievements</HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink to="#contact">Contact Me</HashLink>
            </motion.li>
            <motion.li className=" mb-2 lg:mb-0">
              <a
                href="https://drive.google.com/file/d/1bVgqtiOsF9rqzj4ED7X_s1AhNL03_4dj/view?usp=drive_link"
                target="_blank"
                className=" px-4 py-2 bg-white text-black text-center rounded-md font-semibold"
                style={{ color: "#004632" }}
              >
                Resume ⚡
              </a>
            </motion.li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
