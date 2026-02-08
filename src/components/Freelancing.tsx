import React from "react";
import { motion } from "framer-motion";

interface FreelanceItem {
  company: string;
  period: string;
  position: string;
  location: string;
  description: string[];
  techStack: string;
  shadowColor: string;
}

const freelanceData: FreelanceItem[] = [
  {
    company: "Innew",
    period: "Aug 2025",
    position: "Frontend Web Developer",
    location: "Remote",
    description: [
      "Built the landing page using Next.js with smooth animations powered by Framer Motion.",
      "Improved website performance and accessibility based on Lighthouse audits.",
    ],
    techStack: "NextJS, Framer Motion, Lighthouse Audits",
    shadowColor: "#1432e0",
  },
  {
    company: "Career Charcha",
    period: "Jun 2024",
    position: "Full Stack Web Developer",
    location: "Remote",
    description: [
      "Rebuilt their website using ReactJS, ExpressJS and gave an improvement in performance.",
      "Integrated Google Sheets API to collect form data from the website.",
    ],
    techStack: "ReactJS, ExpressJS, Google Sheets API",
    shadowColor: "#057B80",
  },
  {
    company: "Webyapar",
    period: "May 2024 - Jun 2024",
    position: "Frontend Web Developer",
    location: "Remote",
    description: [
      "Developed a static and responsive website using HTML5, CSS3, Javascript and Bootstrap to meet the requirements of the client.",
    ],
    techStack: "HTML5, CSS3, Bootstrap, Figma",
    shadowColor: "#ec3242",
  },
  {
    company: "Streeya",
    period: "Jul 2023 - Aug 2023",
    position: "UI/UX Designer",
    location: "Remote",
    description: [
      "Designed 50+ web pages for their website establishing a strong brand identity.",
      "Crafted a responsive design strategy, ensuring a seamless user experience across various devices.",
    ],
    techStack: "Figma",
    shadowColor: "#a52241",
  },
];

function hexToRgba(hex: string, alpha: number): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return `rgba(66, 66, 66, ${alpha})`;
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function cardGradientFromShadowColor(shadowColor: string): string {
  return `linear-gradient(268.23deg, rgba(66, 66, 66, 0.5) 2.85%, ${hexToRgba(shadowColor, 0.25)} 94.71%)`;
}

const Freelancing = () => {
  const text = "Independent work that speaks for itself".split(" ");

  return (
    <div
      className="flex flex-col z-0 px-4 py-8 lg:py-12"
      id="experience"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className="font-heading text-heading heading text-center">
        Freelancing
      </div>
      <div className="heading text-center mb-8">
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

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {freelanceData.map((item, index) => (
          <FlipCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

interface FlipCardProps {
  item: FreelanceItem;
  index: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ item, index }) => {
  return (
    <motion.div
      className="flip-card h-[220px] min-h-[220px] w-full"
      style={{ perspective: "1000px", perspectiveOrigin: "center center" }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.08 },
      }}
    >
      <div
        className="flip-card-inner h-full w-full relative"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotateY(180deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotateY(0deg)";
        }}
      >
        {/* Front */}
        <div
          className="flip-card-front absolute inset-0 rounded-xl border border-gray-100 flex flex-col items-center justify-center px-6 py-4"
          style={{
            boxShadow: `4px 4px 0px 1px ${item.shadowColor}`,
            background: cardGradientFromShadowColor(item.shadowColor),
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg) translateZ(1px)",
          }}
        >
          <span className="text-heading font-space heading text-2xl sm:text-3xl text-center">
            {item.company}
          </span>
          <span className="font-manrope text-base sm:text-lg mt-2 text-zinc-300">
            {item.position}
          </span>
          <span className="font-manrope text-sm sm:text-base text-zinc-400 mt-1">
            {item.period}
          </span>
          <span className="text-sm text-zinc-400 mt-0.5">{item.location}</span>
        </div>

        {/* Back */}
        <div
          className="flip-card-back absolute inset-0 rounded-xl border border-gray-100 overflow-y-auto px-4 sm:px-5 py-4"
          style={{
            boxShadow: `4px 4px 0px 1px ${item.shadowColor}`,
            background: cardGradientFromShadowColor(item.shadowColor),
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(1px)",
          }}
        >
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
            What I did
          </p>
          <ul className="text-zinc-300 text-xs sm:text-sm space-y-2">
            {item.description.map((point, i) => (
              <li
                key={i}
                className="pl-3 border-l-2 border-zinc-600/80 leading-snug"
                style={{ borderLeftColor: item.shadowColor }}
              >
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-zinc-600/40">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Tech
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.techStack.split(", ").map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-medium text-zinc-300 bg-zinc-800/60 border border-zinc-600/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Freelancing;
