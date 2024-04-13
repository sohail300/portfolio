import { TypeAnimation } from "react-type-animation";
import PlaceIcon from "@mui/icons-material/Place";
import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./hero-grid.svg)",
      }}
      className=" flex flex-col-reverse items-center justify-center py-20 "
      id="home"
    >
      <motion.div
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
        <div className=" text-white px-4" style={{ width: "100vw" }}>
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
            className="gradient-text "
          />
          <div className=" flex flex-row items-center w-72 mb-8">
            <PlaceIcon className=" mr-2" />
            Dhanbad, Jharkhand, India
            <ReactCountryFlag countryCode="IN" svg className=" ml-4" />
          </div>

          <div
            className=" border px-20 py-2 bg-white text-center rounded-md font-semibold"
          >
            <a
              href="https://drive.google.com/file/d/1bVgqtiOsF9rqzj4ED7X_s1AhNL03_4dj/view?usp=drive_link"
              target="_blank"
              style={{ color: "#004632" }}
            >
              View Resume ⚡
            </a>
          </div>
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
          className=" w-80 mb-16"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
