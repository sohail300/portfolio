import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { RESUME_LINK } from "../utils/links";

type CodeToken = { text: string; color?: string };

const codeLines: CodeToken[][] = [
  [{ text: "const", color: "#c586c0" }, { text: " developer = {" }],
  [{ text: "  name: " }, { text: "'Md Sohail Ansari'", color: "#34ff82" }, { text: "," }],
  [
    { text: "  role: " },
    { text: "'Full Stack Developer'", color: "#34ff82" },
    { text: "," },
  ],
  [
    { text: "  stack: [" },
    { text: "'React'", color: "#34ff82" },
    { text: ", " },
    { text: "'Node.js'", color: "#34ff82" },
    { text: ", " },
    { text: "'TypeScript'", color: "#34ff82" },
    { text: "]," },
  ],
  [
    { text: "  passion: " },
    { text: "'ideas → reality'", color: "#3dfff5" },
    { text: "," },
  ],
  [{ text: "};" }],
];

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872117/portfolio/hero-grid_jfaegn.svg)",
        backgroundPosition: "center",
      }}
      className=" flex items-center justify-center px-4 py-20 md:py-40 lg:px-8 large:py-64"
      id="home"
    >
      <div className="flex flex-col-reverse items-center justify-center w-full max-w-7xl mx-auto lg:flex-row lg:justify-between">
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
          <div className="type-animation-wrapper flex items-center justify-center text-white px-4 w-screen text-center lg:w-auto lg:px-0 lg:mx-0 lg:justify-start lg:text-left">
            <TypeAnimation
              sequence={[
                "Hey, I'm Sohail",
                1000,
                "Hey, I'm a Web Developer",
                1000,
                "Hey, I'm an App Developer",
                1000,
              ]}
              wrapper="h1"
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

          <div className=" flex flex-row items-center justify-center lg:justify-start lg:w-72 mb-4 lg:mb-8 navbar-link font-heading ">
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
          className="animate-upDown relative flex justify-center w-4/5 mb-16 sm:w-3/5 lg:w-[420px] lg:mb-0"
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
        >
          <div
            className="absolute -z-10 w-56 h-56 rounded-full opacity-30 blur-3xl lg:w-72 lg:h-72"
            style={{
              background: "linear-gradient(135deg, #3dfff5, #34ff82)",
            }}
          />

          <div
            className="w-full overflow-hidden rounded-md lg:rounded-3xl"
            style={{
              backgroundColor: "#1e1e1ecc",
              border: ".5px solid #5a5a5a",
              boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)",
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{
                backgroundColor: "#2b2b2bc6",
                borderBottom: ".5px solid #5a5a5a",
              }}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#ff5f57" }}
              />
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#febc2e" }}
              />
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#28c840" }}
              />
              <span className="ml-2 navbar-link text-12px">sohailcodes.xyz</span>
            </div>

            <pre className="p-5 font-mono leading-relaxed whitespace-pre-wrap break-words text-12px sm:text-14px">
              {codeLines.map((line, i) => (
                <div key={i}>
                  {line.map((token, j) => (
                    <span key={j} style={{ color: token.color ?? "#d4d4d4" }}>
                      {token.text}
                    </span>
                  ))}
                </div>
              ))}
              <span className="inline-block w-2 ml-1 h-4 -mb-1 bg-white/80 animate-pulse" />
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
