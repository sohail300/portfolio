import { motion } from "framer-motion";

const Education = () => {
  return (
      <div
        style={{
          backgroundImage: "url(./grid.svg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" flex flex-col-reverse py-8 px-8 items-center sm:flex-row sm:justify-between "
        id="education"
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, 
            transition: {
              duration: 1, 
            },
          }}
        >
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872077/portfolio/education/about_ivy7bs.png"
            alt=""
            className=" w-full sm:h-72"
          />
        </motion.div>

        <motion.div
        className=" "
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, 
            transition: {
              duration: 1, 
            },
          }}
        >
          <div className=" font-heading text-heading mb-8 heading">
            Education
          </div>
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872078/portfolio/education/svg_yywt4z.png"
            alt=""
            className=" w-full sm:h-48"
          />
        </motion.div>
      </div>
  );
};

export default Education;
