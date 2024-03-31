import { TypeAnimation } from "react-type-animation";
import PlaceIcon from "@mui/icons-material/Place";
import ReactCountryFlag from "react-country-flag";

const Hero = () => {
  return (
    <div>
      <div
        className=" flex flex-row justify-between items-center z-0 px-48"
        style={{
          backgroundImage: "url(./hero-grid.svg)",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className=" text-white">
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
              fontSize: "44px",
              display: "inline-block",
              marginBottom: "16px",
              fontWeight: "800",
            }}
            repeat={Infinity}
            className="gradient-text"
          />
          <div className=" flex flex-row items-center w-72 mb-8">
            <PlaceIcon className=" mr-2" />
            Dhanbad, Jharkhand, India
            <ReactCountryFlag countryCode="IN" svg className=" ml-4" />
          </div>
          <a
            href="https://drive.google.com/file/d/1bVgqtiOsF9rqzj4ED7X_s1AhNL03_4dj/view?usp=drive_link"
            target="_blank"
            className=" px-20 py-2 bg-white text-black text-center rounded-md font-semibold"
            style={{ color: "#004632" }}
          >
            View CV ⚡
          </a>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872116/portfolio/hero_nd6kag.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
