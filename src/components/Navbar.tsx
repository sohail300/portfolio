import { HashLink } from "react-router-hash-link";

const Navbar = () => {
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
        className=" w-56 top-0 right-0 z-10 hidden lg:block lg:w-screen"
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
            <HashLink to="#achievements">Achievements</HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink to="#skills">Skills</HashLink>
          </li>
          <li className=" cursor-pointer navbar-link font-heading mb-4 lg:mb-0">
            <HashLink to="#contact">Contact Me</HashLink>
          </li>
          <li className=" mb-2 lg:mb-0">
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
    </>
  );
};

export default Navbar;
