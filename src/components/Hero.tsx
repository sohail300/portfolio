import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { RESUME_LINK } from "../utils/links";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872117/portfolio/hero-grid_jfaegn.svg)",
        backgroundPosition: "center",
      }}
      className=" flex flex-col-reverse items-center justify-center py-20 md:py-40 lg:flex-row lg:justify-evenly large:py-64"
      id="home"
    >
      <motion.div
        className=" flex flex-col items-center justify-center lg:w-2/5 lg:items-start"
        viewport={{ once: true }}
        initial={{
          opacity: 0,
          y: -100,
          scale: 1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        <div className=" text-white px-4 w-screen text-center lg:w-auto lg:px-0 lg:mx-0 lg:text-left">
          <TypeAnimation
            sequence={[
              "Hey, I'm Sohail",
              1000,
              "Hey, I'm a Web Developer",
              1000,
              "Hey, I'm an App Developer",
              1000,
            ]}
            wrapper="div"
            speed={50}
            style={{
              fontSize: "28px",
              display: "inline-block",
              marginBottom: "16px",
              fontWeight: "800",
            }}
            repeat={Infinity}
            className="gradient-text text-animation"
          />
        </div>

        <div className=" flex flex-row items-center justify-center lg:justify-start lg:w-72 lg:mb-8 navbar-link font-heading ">
          Engineering ideas 💡 into reality 🚀
        </div>
        <a
          href={RESUME_LINK}
          target="_blank"
          className=" px-8 py-2 bg-white text-black text-center rounded-md font-semibold"
          style={{ color: "#004632" }}
        >
          View Resume ⚡
        </a>
      </motion.div>

      <motion.div
        className="animate-upDown"
        viewport={{ once: true }}
        initial={{
          opacity: 0,
          y: 100,
          scale: 1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1,
          },
        }}
        style={{
          transform:
            "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
        }}
      >
        <img
          src="https://res.cloudinary.com/dwuzfbivo/image/upload//v1720037749/portfolio/hero_ituxzz.jpg"
          alt=""
          className=" w-2/4 m-auto rounded-md mb-16 lg:rounded-3xl lg:w-[360px] lg:mb-0"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
