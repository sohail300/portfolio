import { designs } from "../utils/designs";
import { motion } from "framer-motion";

const Designs = () => {
  const text =
    "As an element of design, I've crafted several minimal user interfaces.".split(
      " "
    );
  return (
    <div
      id="designs"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
      className=" flex flex-col z-0 px-8 pb-8 lg:px-24"
    >
      <div className=" font-heading text-heading heading text-center">
        Hello Designers
      </div>
      <div className=" heading text-center mb-8">
        {text.map((el, i) => (
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
      <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap lg:px-32">
        {designs.map((item, index) => {
          return (
            <motion.a
              viewport={{ once: true }}
              initial={{
                opacity: 0,
                x: -100,
                scale: 1,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.5 * index,
                },
              }}
              href={item.figmaLink}
              target="_blank"
              key={index}
              className="w-full sm:w-1/2 px-0 py-4 sm:px-4 lg:w-1/3"
            >
              <img
                src={item.imageLink}
                alt=""
                className=" w-full rounded-lg cursor-pointer lg:rounded-sm lg:filter lg:grayscale lg:hover:filter-none"
              />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Designs;
