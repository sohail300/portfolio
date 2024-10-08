import React from "react";
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
  liveLink?: string;
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
      className="rounded-lg mb-8 font-manrope"
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
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt="" className="w-full rounded-lg object-cover" />
      </a>
      <div className="rounded-lg px-3 py-4">
        <div className="flex flex-row justify-between items-center text-14px md:text-20px">
          <div
            style={{ color: "#2bd3fd", fontWeight: "500" }}
            className="font-space"
          >
            {title}
          </div>
          <div className="flex flex-row justify-between items-center">
            <span
              className="rounded-2xl text-center py-1 px-2 text-8px md:text-10px"
              style={{
                backgroundColor: getStatusBackgroundColor(status),
                color: getStatusTextColor(status),
              }}
            >
              {status}
            </span>

            {gitLink && (
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ml-2"
              >
                <GitHubIcon />
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ml-2"
              >
                <OpenInNewIcon />
              </a>
            )}

            {youtubeLink && (
              <a
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ml-2"
              >
                <YoutubeIcon />
              </a>
            )}
          </div>
        </div>

        <div
          className="mt-2 description-container"
          style={{
            color: "#b6b6b6",
            fontSize: "12px",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "auto",
            textOverflow: "ellipsis",
            height: "6em", // Approximately 3 lines of text
            minHeight: "1.5em", // Minimum height for 1 line
          }}
        >
          {description}
        </div>
        <div className="grid grid-cols-4 gap-1 mt-4 text-center text-7px sm:text-10px md:text-12px">
          {techStack.map((item: string) => (
            <span
              key={item}
              className="rounded-md border text-white py-1.5 px-2 mx-0.5 my-0.5 text-center"
              style={{ color: "#b6b6b6", border: "1px solid #3ee5ff" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
