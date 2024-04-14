import { TypeAnimation } from "react-type-animation";
import PlaceIcon from "@mui/icons-material/Place";
import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./hero-grid.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" flex flex-col-reverse items-center justify-center py-20 md:py-40 lg:flex-row lg:justify-evenly "
      id="home"
    >
      <motion.div
        className=" flex flex-col items-center justify-center lg:w-2/5 lg:items-start"
        initial={{
          opacity: 0,
          y: 100,
          scale: 0,
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
              "Hey, I'm a Web Designer",
              1000,
              "Hey, I'm a Web App Tester",
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
          <div className=" flex flex-row items-center justify-center lg:justify-start lg:w-72 lg:mb-8">
            <PlaceIcon className=" mr-2" />
            Dhanbad, Jharkhand, India
            <ReactCountryFlag countryCode="IN" svg className=" ml-4" />
          </div>
        </div>

        <div className=" mt-8 lg:mt-0 lg:self-start">
          <a
            className=" py-2 px-28 bg-white rounded-md text-center font-semibold w-full lg:px-20 "
            href="https://drive.google.com/file/d/1bVgqtiOsF9rqzj4ED7X_s1AhNL03_4dj/view?usp=drive_link"
            target="_blank"
            style={{ color: "#004632" }}
          >
            View Resume ⚡
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
      >
        <img
          src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872116/portfolio/hero_nd6kag.png"
          alt=""
          className=" w-80 md:w-auto lg:w-auto mb-16 md:mb-32 lg:mb-0"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
