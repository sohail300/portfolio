import { motion } from "framer-motion";

const Education = () => {
  return (
      <div
        style={{
          backgroundImage: "url(./grid.svg)",
        }}
        className=" flex flex-col-reverse py-20 px-8 items-center"
        id="education"
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
        >
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872077/portfolio/education/about_ivy7bs.png"
            alt=""
            className=" h-80 "
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
        >
          <div className=" font-heading text-heading mb-8 heading">
            Education
          </div>
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872078/portfolio/education/svg_yywt4z.png"
            alt=""
            className=" h-32"
          />
        </motion.div>
      </div>
  );
};

export default Education;
