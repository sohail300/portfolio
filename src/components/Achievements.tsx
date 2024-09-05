import { achievements } from "../utils/achievements";
import { motion } from "framer-motion";

const Achievements = () => {
  const text =
    "Effectively translated my skills into tangible results through real-world accomplishments".split(
      " "
    );

  return (
    <div
      className=" flex flex-col z-0 px-8 py-8"
      id="achievements"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Achievements
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

      <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap lg:mx-auto lg:justify-between lg:px-32">
        {achievements.map((item, index) => {
          return (
            <motion.a
              viewport={{ once: true }}
              initial={{
                opacity: 0,
                y: 100,
                scale: 1,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.5 * index,
                },
              }}
              key={index}
              className="w-full sm:w-1/2 px-0 py-4 sm:px-4 lg:w-1/3 "
            >
              <img
                src={item.imageLink}
                alt=""
                className=" w-full rounded-lg cursor-pointer lg:rounded-sm lg:filter lg:grayscale lg:hover:filter-none "
              />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
