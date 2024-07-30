import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import YoutubeIcon from "@mui/icons-material/YouTube";
import {
  getStatusBackgroundColor,
  getStatusTextColor,
} from "../utils/statusColor";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  status: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  gitLink: string;
  liveLink: string;
  youtubeLink?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  status,
  description,
  imageUrl,
  techStack,
  gitLink,
  liveLink,
  youtubeLink = "",
}) => {
  return (
    <motion.div
      className=" rounded-lg mb-8 font-manrope"
      style={{ backgroundColor: "#2b2b2bc6", border: ".5px solid #5a5a5a" }}
      viewport={{ once: true }}
      initial={{
        opacity: 0,
        x: -100,
        scale: 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <a href={liveLink} target="_blank">
        <img
          src={imageUrl}
          alt=""
          className=" w-full rounded-lg object-cover"
        />
      </a>
      <div className=" rounded-lg px-3 py-4">
        <div className=" flex flex-row justify-between items-center text-14px md:text-20px">
          <div
            style={{ color: "#2bd3fd", fontWeight: "500" }}
            className=" font-space"
          >
            {title}
          </div>
          <div className=" flex flex-row justify-between items-center">
            <span
              className=" rounded-2xl text-center py-1 px-2 text-8px md:text-10px"
              style={{
                backgroundColor: getStatusBackgroundColor(status),
                color: getStatusTextColor(status),
              }}
            >
              {status}
            </span>
            <a href={gitLink} target="_blank" className=" text-white ml-2">
              <GitHubIcon />
            </a>
            <a href={liveLink} target="_blank" className=" text-white ml-2">
              <OpenInNewIcon />
            </a>
            {!(youtubeLink?.length === 0) && (
              <a
                href={youtubeLink}
                target="_blank"
                className=" text-white ml-2"
              >
                <YoutubeIcon />
              </a>
            )}
          </div>
        </div>

        <div className=" mt-2" style={{ color: "#b6b6b6", fontSize: "12px" }}>
          {description}
        </div>
        <div className=" grid grid-cols-4 gap-1 mt-4 text-center text-7px sm:text-10px md:text-12px">
          {techStack.map((item: string) => {
            return (
              <span
                key={item}
                className=" rounded-md border text-white py-1.5 px-2 mx-0.5 my-0.5 text-center"
                style={{ color: "#b6b6b6", border: "1px solid #3ee5ff" }}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
      {/* 
      background-color: rgba(62, 55, 103, .262); color: #8394ff;
      background-color: rgba(101, 55, 103, .262); color: #de83ff; -> Under Development
      background-color: rgba(55, 103, 81, .262); color: #83ffb1; -> SIH Project
      backgroundColor: "rgba(87, 103, 55, .262)"; color: "#dcff83", -> Deployed
      */}
    </motion.div>
  );
};

export default Card;
