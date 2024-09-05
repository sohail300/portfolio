import Card from "./Card";
import { motion } from "framer-motion";
import web3Projects, { noOfWeb3Projects } from "../utils/web3Projects";

const Web3 = () => {
  const text =
    "Revolutionizing industries through decentralized technologies".split(" ");

  return (
    <div
      className=" flex flex-col z-0 px-4 py-8 lg:px-24"
      id="projects"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Web3 Projects
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

      <div className=" flex flex-col sm:flex-row sm:flex-wrap">
        {web3Projects.map((item) => {
          return (
            <div
              key={item.title}
              className={`w-full sm:w-1/2 pt-2 px-0 sm:px-4 lg:w-1/3 ${
                noOfWeb3Projects % 4 == 0 ? "large:w-1/4" : ""
              }`}
            >
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                status={item.status}
                imageUrl={item.imageUrl}
                techStack={item.techStack}
                gitLink={item.gitLink}
                liveLink={item.liveLink}
                youtubeLink={item.youtubeLink}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Web3;
