const Skills = () => {
  return (
    <div
      className=" flex flex-col z-0 px-24 py-8"
      id="skills"
      style={{
        backgroundImage: "url(./grid.svg)",
        width: "100vw",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Skills That Matters
      </div>
      <div className=" heading text-center mb-8">
        Skills in which I have invested significant time and have consistently
        applied its knowledge to real-time tasks.
      </div>
      <div>
        <div className=" flex flex-row items-center justify-between mx-auto px-32 mb-6">
          <span
            className=" py-2 px-8 rounded-md"
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
          <div className=" flex flex-row">
            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img src="./skills/lang/java.png" alt="" className=" h-14" />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img
                src="./skills/lang/javascript.png"
                alt=""
                className=" h-14 "
              />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img
                src="./skills/lang/typescript.png"
                alt=""
                className=" h-14"
              />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img src="./skills/lang/python.png" alt="" className=" h-14" />
            </div>
          </div>
        </div>

        <div className=" flex flex-row items-center justify-between mx-auto px-32 mb-6">
          <span
            className=" py-2 px-8 rounded-md"
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
          <div className=" flex flex-row">
            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img
                src="./skills/frameworks/nodejs.png"
                alt=""
                className=" h-14"
              />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img
                src="./skills/frameworks/react.png"
                alt=""
                className=" h-14 "
              />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img
                src="./skills/frameworks/next.webp"
                alt=""
                className=" h-14"
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-row items-center justify-between mx-auto px-32 mb-6">
          <span
            className=" py-2 px-8 rounded-md"
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
          <div className=" flex flex-row">
            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img src="./skills/db/mongo.png" alt="" className=" h-14" />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img src="./skills/db/firebase.webp" alt="" className=" h-14 " />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img src="./skills/db/postgresql.webp" alt="" className=" h-14" />
            </div>
          </div>
        </div>

        <div className=" flex flex-row items-center justify-between mx-auto px-32 mb-6">
          <span
            className=" py-2 px-8 rounded-md"
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
          <div className=" flex flex-row">
            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img src="./skills/tools/figma.png" alt="" className=" h-14" />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img src="./skills/tools/git.png" alt="" className=" h-14 " />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img src="./skills/tools/github.png" alt="" className=" h-14" />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img src="./skills/tools/linux.png" alt="" className=" h-14" />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img src="./skills/tools/api.webp" alt="" className=" h-14" />
            </div>

            <div
              className=" rounded-md h-20 w-20 flex flex-row justify-center items-center mr-4"
              style={{ backgroundColor: "#0d0d0d9d" }}
            >
              <img src="./skills/tools/docker.webp" alt="" className=" h-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
