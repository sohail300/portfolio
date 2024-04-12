import { HashLink } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundImage:
            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))" /* Gradient background */,
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          zIndex: 10,
        }}
        className=" hidden"
      >
        <ul className="navbar w-4/5 flex flex-row justify-between mx-auto py-4">
          <li className=" cursor-pointer heading font-heading">
            <HashLink to="#home">Home</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading">
            <HashLink to="#education">Education</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading">
            <HashLink to="#experience">Experience</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading">
            <HashLink to="#projects">Projects</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading">
            <HashLink to="#designs">Designs</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading">
            <HashLink to="#achievements">Achievements</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading">
            <HashLink to="#skills">Skills</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading">
            <HashLink to="#contact">Contact Me</HashLink>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1bVgqtiOsF9rqzj4ED7X_s1AhNL03_4dj/view?usp=drive_link"
              target="_blank"
              className=" px-8 py-2 bg-white text-black text-center rounded-md font-semibold"
              style={{ color: "#004632" }}
            >
              View Resume ⚡
            </a>
          </li>
        </ul>
      </div>

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 10,
        }}
        className=" visible 2xl:hidden"
      >
        <MenuIcon />

      </div>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          backgroundImage:
            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))" /* Gradient background */,
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          zIndex: 10,
        }}
        className=" w-56 hidden 2xl:hidden"
      >
        <ul className="navbar w-4/5 flex flex-col justify-between mx-auto py-4">
          <li className=" cursor-pointer heading font-heading mb-4">
            <HashLink to="#home">Home</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading mb-4">
            <HashLink to="#education">Education</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading mb-4">
            <HashLink to="#experience">Experience</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading mb-4">
            <HashLink to="#projects">Projects</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading mb-4">
            <HashLink to="#designs">Designs</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading mb-4">
            <HashLink to="#achievements">Achievements</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading mb-4">
            <HashLink to="#skills">Skills</HashLink>
          </li>
          <li className=" cursor-pointer heading font-heading mb-4">
            <HashLink to="#contact">Contact Me</HashLink>
          </li>
          <li className=" cursor-pointer mb-2">
            <a
              href="https://drive.google.com/file/d/1bVgqtiOsF9rqzj4ED7X_s1AhNL03_4dj/view?usp=drive_link"
              target="_blank"
              className=" px-4 py-2 bg-white text-black text-center rounded-md font-semibold"
              style={{ color: "#004632" }}
            >
              View Resume ⚡
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
