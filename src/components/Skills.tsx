import { skills } from "../utils/skills";
import { motion } from "framer-motion";

const Skills = () => {
  const text =
    "Skills in which I have invested significant time and have consistently applied its knowledge to real-time tasks.".split(
      " "
    );
  return (
    <div
      className=" flex flex-col z-0 px-8 py-8 lg:px-24"
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
      <div className=" lg:px-32">
        <motion.div
          className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between"
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
            className=" py-2 px-8 rounded-md md:mr-16"
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
          <div className=" flex flex-row w-full justify-between my-4 md:justify-center md:w-fit">
            {skills.language.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/language/${item}`}
                    alt=""
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between"
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
            className=" py-2 px-8 rounded-md md:mr-16"
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
          <div className=" flex flex-row w-full justify-between my-4 md:justify-center md:w-fit">
            {skills.frontend.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/frontend/${item}`}
                    alt=""
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between"
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
            className=" py-2 px-8 rounded-md md:mr-16"
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
          <div className=" flex flex-row w-full justify-between my-4 md:justify-center md:w-fit">
            {skills.backend.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/backend/${item}`}
                    alt=""
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between"
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
            className=" py-2 px-8 rounded-md md:mr-16"
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
          <div className=" flex flex-row w-full justify-between my-4 md:justify-center md:w-fit">
            {skills.app.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img src={`./skills/app/${item}`} alt="" className=" h-12" />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between"
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
            className=" py-2 px-8 rounded-md md:mr-16"
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
          <div className=" flex flex-row w-full justify-between my-4 md:justify-center md:w-fit">
            {skills.database.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/database/${item}`}
                    alt=""
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between"
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
            className=" py-2 px-8 rounded-md md:mr-16"
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
          <div className=" flex flex-row w-full justify-between mt-4 md:justify-center md:w-fit">
            {skills.devops.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/devops/${item}`}
                    alt=""
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between"
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
            className=" py-2 px-8 rounded-md md:mr-16"
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
          <div className=" flex flex-row w-full justify-between mt-4 md:justify-center md:w-fit">
            {skills.web3.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img src={`./skills/web3/${item}`} alt="" className=" h-12" />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between"
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
            className=" py-2 px-8 rounded-md md:mr-16"
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
          <div className=" flex flex-row w-full justify-between mt-4 md:justify-center md:w-fit">
            {skills.tools.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/tools/${item}`}
                    alt=""
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
