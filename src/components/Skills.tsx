import { skills } from "../utils/skills";

const Skills = () => {
  return (
    <div
      className=" flex flex-col z-0 px-8 py-8 lg:px-24"
      id="skills"
      style={{
        backgroundImage: "url(./grid.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Skills That Matters
      </div>
      <div className=" heading text-center mb-8">
        Skills in which I have invested significant time and have consistently
        applied its knowledge to real-time tasks.
      </div>
      <div className=" lg:px-32">
        <div className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between">
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
        </div>

        <div className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between">
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
            Frameworks/Libraries
          </span>
          <div className=" flex flex-row w-full justify-between my-4 md:justify-center md:w-fit">
            {skills.framework.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
                  style={{ backgroundColor: "#0d0d0d9d" }}
                >
                  <img
                    src={`./skills/framework/${item}`}
                    alt=""
                    className=" h-12"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between">
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
        </div>

        <div className=" flex flex-col items-center justify-between mb-6 md:flex-row md:w-full md:justify-between">
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
        </div>
      </div>
    </div>
  );
};

export default Skills;
