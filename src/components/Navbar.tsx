import { Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { RESUME_LINK } from "../utils/links";
import { HashLink } from "react-router-hash-link";

function smoothTo(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  const lenis = (
    window as unknown as {
      __lenis?: { scrollTo: (t: HTMLElement | string, o?: unknown) => void };
    }
  ).__lenis;
  if (el && lenis) {
    lenis.scrollTo(el, { offset: 0 });
  } else if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scope, animate] = useAnimate();
  const navRef = useRef(null);
  const listRef = useRef<HTMLUListElement>(null);

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // Top progress bar: scroll progress (0–1), bar grows from center
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        setProgress(0);
        return;
      }

      const scrolled = scrollTop / docHeight;
      setProgress(scrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initialWidth = 0.2;
  const finalScale = initialWidth + (1 - initialWidth) * progress;

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
        },
      );
      animate(
        listRef.current.querySelectorAll("li"),
        open
          ? { opacity: 1, scale: 1, x: 0 }
          : { opacity: 0, scale: 0.3, x: -50 },
        {
          duration: 0.2,
          delay: open ? staggerList : 0,
        },
      );
    }
  }, [open, animate, staggerList]);

  const progressBar = (
    <div
      className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden"
      style={{ backgroundColor: "transparent" }}
      aria-hidden
    >
      <div
        className="h-full"
        style={{
          position: "absolute",
          left: "50%",
          transform: `translateX(-50%) scaleX(${finalScale})`,
          transformOrigin: "center",
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(212,175,55,0.4) -25%, #D4AF37 54.33%, rgba(212,175,55,0.4) 125%)",
          boxShadow:
            "0 0 8px rgba(212,175,55,0.7), 0 0 16px rgba(212,175,55,0.4)",
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );

  return (
    <>
      {/* Progress bar on mobile (at top when nav is just the menu icon) */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 overflow-hidden lg:hidden">
        {progressBar}
      </div>

      <div
        style={{
          position: "fixed",
          backgroundImage:
            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        className="w-56 top-0 right-0 z-10 hidden lg:block lg:w-screen relative"
      >
        <ul className="navbar w-4/5 flex flex-col justify-between mx-auto py-4 lg:flex-row ">
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink
              to="#home"
              onClick={(e) => {
                e.preventDefault();
                smoothTo("#home");
              }}
            >
              Home
            </HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink
              to="#education"
              onClick={(e) => {
                e.preventDefault();
                smoothTo("#education");
              }}
            >
              Education
            </HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink
              to="#experience"
              onClick={(e) => {
                e.preventDefault();
                smoothTo("#experience");
              }}
            >
              Experience
            </HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink
              to="#projects"
              onClick={(e) => {
                e.preventDefault();
                smoothTo("#projects");
              }}
            >
              Projects
            </HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink
              to="#designs"
              onClick={(e) => {
                e.preventDefault();
                smoothTo("#designs");
              }}
            >
              Designs
            </HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink
              to="#skills"
              onClick={(e) => {
                e.preventDefault();
                smoothTo("#skills");
              }}
            >
              Skills
            </HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink
              to="#achievements"
              onClick={(e) => {
                e.preventDefault();
                smoothTo("#achievements");
              }}
            >
              Achievements
            </HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink
              to="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothTo("#contact");
              }}
            >
              Contact Me
            </HashLink>
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
        {/* Progress bar at bottom of navbar (desktop) */}
        {progressBar}
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
              <HashLink
                to="#home"
                onClick={(e) => {
                  e.preventDefault();
                  smoothTo("#home");
                  setOpen(false);
                }}
              >
                Close
              </HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink
                to="#home"
                onClick={(e) => {
                  e.preventDefault();
                  smoothTo("#home");
                  setOpen(false);
                }}
              >
                Home
              </HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink
                to="#education"
                onClick={(e) => {
                  e.preventDefault();
                  smoothTo("#education");
                  setOpen(false);
                }}
              >
                Education
              </HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink
                to="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  smoothTo("#experience");
                  setOpen(false);
                }}
              >
                Experience
              </HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink
                to="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  smoothTo("#projects");
                  setOpen(false);
                }}
              >
                Projects
              </HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink
                to="#designs"
                onClick={(e) => {
                  e.preventDefault();
                  smoothTo("#designs");
                  setOpen(false);
                }}
              >
                Designs
              </HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink
                to="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  smoothTo("#skills");
                  setOpen(false);
                }}
              >
                Skills
              </HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink
                to="#achievements"
                onClick={(e) => {
                  e.preventDefault();
                  smoothTo("#achievements");
                  setOpen(false);
                }}
              >
                Achievements
              </HashLink>
            </motion.li>
            <motion.li className=" cursor-pointer navbar-link font-heading mb-6 lg:mb-0">
              <HashLink
                to="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothTo("#contact");
                  setOpen(false);
                }}
              >
                Contact Me
              </HashLink>
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
