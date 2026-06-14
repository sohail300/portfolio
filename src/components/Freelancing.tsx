import React, { useRef, useState } from "react";
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
    company: "Webyapar",
    period: "May 2024 – Jun 2024",
    position: "Frontend Web Developer",
    location: "Remote",
    description: [
      "Developed a static and responsive website using HTML5, CSS3, Javascript and Bootstrap to meet the requirements of the client.",
    ],
    techStack: "HTML5, CSS3, Bootstrap, Figma",
    shadowColor: "#ec3242",
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
    company: "Streeya",
    period: "Jul 2023 – Aug 2023",
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
  return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`;
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
      <div className="heading text-center mb-10">
        {text.map((el, i) => (
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: i / 10 }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {freelanceData.map((item, index) => (
          <FreelanceCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

interface FreelanceCardProps {
  item: FreelanceItem;
  index: number;
}

const FreelanceCard: React.FC<FreelanceCardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((s) => ({ ...s, active: false }))}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] },
      }}
      whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
    >
      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          opacity: spotlight.active ? 1 : 0,
          transition: "opacity 0.3s ease",
          background: `radial-gradient(340px circle at ${spotlight.x}px ${spotlight.y}px, ${hexToRgba(item.shadowColor, 0.13)}, transparent 68%)`,
        }}
      />

      {/* Card body */}
      <div
        className="relative h-full flex flex-col px-6 py-5 rounded-2xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
        style={{
          border: "1px solid rgba(255,255,255,0.1)",
          borderTop: `2px solid ${item.shadowColor}`,
        }}
      >
        {/* Watermark index */}
        <span
          className="absolute right-3 -top-1 font-space font-bold select-none pointer-events-none leading-none"
          style={{ fontSize: "88px", color: item.shadowColor, opacity: 0.065 }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-4 relative">
          <div className="flex flex-col min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold font-space text-white/90 leading-tight">
              {item.company}
            </h3>
            <span
              className="text-sm font-semibold font-manrope mt-1"
              style={{ color: item.shadowColor }}
            >
              {item.position}
            </span>
          </div>
          <div className="text-right shrink-0 mt-0.5">
            <span className="text-xs text-zinc-400 block font-manrope">{item.period}</span>
            <span className="text-xs text-zinc-500 block mt-0.5 font-manrope">{item.location}</span>
          </div>
        </div>

        {/* Accent divider */}
        <div
          className="h-px mb-4"
          style={{
            background: `linear-gradient(to right, ${hexToRgba(item.shadowColor, 0.5)}, ${hexToRgba(item.shadowColor, 0.05)} 60%, transparent)`,
          }}
        />

        {/* Description */}
        <ul className="flex-1 space-y-2.5 mb-5">
          {item.description.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed font-manrope">
              <span
                className="mt-[7px] h-[5px] w-[5px] rounded-full shrink-0"
                style={{ backgroundColor: item.shadowColor }}
              />
              {point}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {item.techStack.split(", ").map((tech, i) => (
            <span
              key={i}
              className="text-[11px] px-2.5 py-[3px] rounded-full font-medium font-manrope text-zinc-300 bg-zinc-800/70 border border-zinc-700/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Freelancing;
