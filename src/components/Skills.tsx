import { skills } from "../utils/skills";
import { motion } from "framer-motion";

const skillAlt = (filename: string) =>
  `${filename.replace(/\.\w+$/, "")} logo`;

const Skills = () => {
  const text =
    "Skills in which I have invested significant time and have consistently applied its knowledge to real-time tasks.".split(
      " "
    );
  return (
    <div
      className=" flex flex-col z-0 px-4 py-8 lg:px-8"
      id="skills"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Skills That Matters
      </div>
      <div className=" heading text-center mb-8">
        {text.map((el, i) => (
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className=" flex flex-col items-center gap-4 mb-6 md:flex-row md:items-center md:justify-between md:w-full"
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: -100,
            scale: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <span
            className=" py-2 px-6 rounded-md md:w-36 md:shrink-0 md:text-center"
            style={{
              background:
                "linear-gradient(268.23deg, rgba(66, 66, 66, .4) 2.85%, rgba(66, 66, 66, .6) 94.71%)",
              color: "#fff",
              outline: "none",
              border: "1px solid rgba(66, 66, 66, .623)",
              fontWeight: "500",
              boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.1)",
            }}
          >
            Languages
          </span>
          <div className=" flex flex-row flex-wrap items-center justify-center gap-3">
            {skills.language.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/language/${item}`}
                    alt={skillAlt(item)}
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center gap-4 mb-6 md:flex-row md:items-center md:justify-between md:w-full"
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: -100,
            scale: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <span
            className=" py-2 px-6 rounded-md md:w-36 md:shrink-0 md:text-center"
            style={{
              background:
                "linear-gradient(268.23deg, rgba(66, 66, 66, .4) 2.85%, rgba(66, 66, 66, .6) 94.71%)",
              color: "#fff",
              outline: "none",
              border: "1px solid rgba(66, 66, 66, .623)",
              fontWeight: "500",
              boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.1)",
            }}
          >
            Frontend
          </span>
          <div className=" flex flex-row flex-wrap items-center justify-center gap-3">
            {skills.frontend.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/frontend/${item}`}
                    alt={skillAlt(item)}
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center gap-4 mb-6 md:flex-row md:items-center md:justify-between md:w-full"
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: -100,
            scale: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <span
            className=" py-2 px-6 rounded-md md:w-36 md:shrink-0 md:text-center"
            style={{
              background:
                "linear-gradient(268.23deg, rgba(66, 66, 66, .4) 2.85%, rgba(66, 66, 66, .6) 94.71%)",
              color: "#fff",
              outline: "none",
              border: "1px solid rgba(66, 66, 66, .623)",
              fontWeight: "500",
              boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.1)",
            }}
          >
            Backend
          </span>
          <div className=" flex flex-row flex-wrap items-center justify-center gap-3">
            {skills.backend.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/backend/${item}`}
                    alt={skillAlt(item)}
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center gap-4 mb-6 md:flex-row md:items-center md:justify-between md:w-full"
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: -100,
            scale: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <span
            className=" py-2 px-6 rounded-md md:w-36 md:shrink-0 md:text-center"
            style={{
              background:
                "linear-gradient(268.23deg, rgba(66, 66, 66, .4) 2.85%, rgba(66, 66, 66, .6) 94.71%)",
              color: "#fff",
              outline: "none",
              border: "1px solid rgba(66, 66, 66, .623)",
              fontWeight: "500",
              boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.1)",
            }}
          >
            App Development
          </span>
          <div className=" flex flex-row flex-wrap items-center justify-center gap-3">
            {skills.app.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img src={`./skills/app/${item}`} alt={skillAlt(item)} className=" h-12" />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center gap-4 mb-6 md:flex-row md:items-center md:justify-between md:w-full"
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: -100,
            scale: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <span
            className=" py-2 px-6 rounded-md md:w-36 md:shrink-0 md:text-center"
            style={{
              background:
                "linear-gradient(268.23deg, rgba(66, 66, 66, .4) 2.85%, rgba(66, 66, 66, .6) 94.71%)",
              color: "#fff",
              outline: "none",
              border: "1px solid rgba(66, 66, 66, .623)",
              fontWeight: "500",
              boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.1)",
            }}
          >
            Databases
          </span>
          <div className=" flex flex-row flex-wrap items-center justify-center gap-3">
            {skills.database.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/database/${item}`}
                    alt={skillAlt(item)}
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center gap-4 mb-6 md:flex-row md:items-center md:justify-between md:w-full"
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: -100,
            scale: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <span
            className=" py-2 px-6 rounded-md md:w-36 md:shrink-0 md:text-center"
            style={{
              background:
                "linear-gradient(268.23deg, rgba(66, 66, 66, .4) 2.85%, rgba(66, 66, 66, .6) 94.71%)",
              color: "#fff",
              outline: "none",
              border: "1px solid rgba(66, 66, 66, .623)",
              fontWeight: "500",
              boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.1)",
            }}
          >
            Devops
          </span>
          <div className=" flex flex-row flex-wrap items-center justify-center gap-3">
            {skills.devops.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/devops/${item}`}
                    alt={skillAlt(item)}
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* <motion.div
          className=" flex flex-col items-center gap-4 mb-6 md:flex-row md:items-center md:justify-between md:w-full"
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: -100,
            scale: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <span
            className=" py-2 px-6 rounded-md md:w-36 md:shrink-0 md:text-center"
            style={{
              background:
                "linear-gradient(268.23deg, rgba(66, 66, 66, .4) 2.85%, rgba(66, 66, 66, .6) 94.71%)",
              color: "#fff",
              outline: "none",
              border: "1px solid rgba(66, 66, 66, .623)",
              fontWeight: "500",
              boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.1)",
            }}
          >
            Web3
          </span>
          <div className=" flex flex-row flex-wrap items-center justify-center gap-3">
            {skills.web3.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img src={`./skills/web3/${item}`} alt={skillAlt(item)} className=" h-12" />
                </div>
              );
            })}
          </div>
        </motion.div> */}

        <motion.div
          className=" flex flex-col items-center gap-4 mb-6 md:flex-row md:items-center md:justify-between md:w-full"
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: -100,
            scale: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <span
            className=" py-2 px-6 rounded-md md:w-36 md:shrink-0 md:text-center"
            style={{
              background:
                "linear-gradient(268.23deg, rgba(66, 66, 66, .4) 2.85%, rgba(66, 66, 66, .6) 94.71%)",
              color: "#fff",
              outline: "none",
              border: "1px solid rgba(66, 66, 66, .623)",
              fontWeight: "500",
              boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.1)",
            }}
          >
            Tools
          </span>
          <div className=" flex flex-row flex-wrap items-center justify-center gap-3">
            {skills.tools.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/tools/${item}`}
                    alt={skillAlt(item)}
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
