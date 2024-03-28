import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  getStatusBackgroundColor,
  getStatusTextColor,
} from "../utils/statusColor";

interface CardProps {
  title: string;
  status: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  gitLink: string;
  liveLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  status,
  description,
  imageUrl,
  techStack,
  gitLink,
  liveLink,
}) => {
  return (
    <div
      className=" w-96 rounded-lg"
      style={{ backgroundColor: "#2b2b2bc6", border: ".5px solid #5a5a5a" }}
    >
      <a href={liveLink} target="_blank">
        <img
          src={imageUrl}
          alt=""
          className=" h-48 w-96 rounded-lg object-cover"
        />
      </a>
      <div className=" w-96 rounded-lg px-3 py-4">
        <div className=" flex flex-row justify-between items-center">
          <div
            style={{ color: "#2bd3fd", fontWeight: "500", fontSize: "20px" }}
          >
            {title}
          </div>
          <div className=" flex flex-row justify-between items-center">
            <span
              className=" rounded-2xl text-center py-1 px-2"
              style={{
                backgroundColor: getStatusBackgroundColor(status),
                color: getStatusTextColor(status),
                fontSize: "10px",
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
          </div>
        </div>

        <div className=" mt-2" style={{ color: "#b6b6b6", fontSize: "12px" }}>
          {description}
        </div>
        <div
          className=" grid grid-cols-4 gap-1 mt-4 text-center"
          style={{ fontSize: "12px" }}
        >
          {techStack.map((item: string) => {
            return (
              <span
                key={item}
                className=" rounded-md border text-white py-1.5 px-2 mx-0.5 my-0.5"
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
    </div>
  );
};

export default Card;
