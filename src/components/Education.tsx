import { motion } from "framer-motion";

const Education = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
      className=" flex flex-col-reverse py-8 px-8 items-center lg:flex-row lg:justify-between large:justify-around lg:px-32 "
      id="education"
    >
      <motion.div
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
        <img
          src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1725573820/portfolio/education/Education_qvybxo.png"
          alt=""
          className=" w-full lg:h-80 large:h-96"
        />
      </motion.div>

      <motion.div
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
        <div className=" font-heading text-heading mb-8 heading">Education</div>
        <img
          src="/education.png"
          alt=""
          className=" w-full lg:h-64 large:h-72"
        />
      </motion.div>
    </div>
  );
};

export default Education;
