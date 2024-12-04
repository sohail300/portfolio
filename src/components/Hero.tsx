import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  async function copytoClipboard() {
    const blob = new Blob(["npx sohail"], { type: "text/plain" });
    const clipboardItem = new ClipboardItem({ "text/plain": blob });

    try {
      await navigator.clipboard.write([clipboardItem]);
      toast.success(
        <>
          <div className="text-base">Copied to clipboard!</div>
          <div className=" text-[12px]">
            Make sure you run this on your terminal.
          </div>
        </>,
        {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          style: { fontFamily: "Manrope" },
        }
      );
      console.log("Text copied to clipboard as ClipboardItem");
    } catch (err) {
      toast("Opsiee! Error occured.");
      console.error("Failed to copy: ", err);
    }
  }

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
              "Hey, I'm a Designer",
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
          I convert air💨 into code💻!
        </div>

        <div
          className=" mt-8 lg:mt-0 lg:self-start bg-black py-4 px-8 rounded-md flex flex-row items-center justify-between cursor-pointer"
          onClick={() => copytoClipboard()}
        >
          <div className=" text-green-500 text-2xl font-robot">
            👨🏻‍💻 npx sohail
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-clipboard text-green-500 ml-6"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          </svg>
        </div>
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
