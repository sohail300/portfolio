import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const text = "Companies where I applied my skills".split(" ");

  const data = [
    {
      title: {
        company: "Sociolinq",
        period: "Nov 2024 - Apr 2025",
      },
      content: (
        <ExperienceCard
          company="Sociolinq"
          period="Nov 2024 - Apr 2025"
          position="Frontend Web Developer Intern"
          location="Remote"
          description={[
            "Developed a robust HRMS frontend for the company using React, MUI, TailwindCSS ensuring a responsive and user-friendly interface as part of an agile development process.",
            "Worked on the backend using FastAPI, PostgreSQL, SQLAlchemy for building APIs for features like employee profiles, attendance, and leaves and so on.",
          ]}
          techStack="ReactJS, Typescript, MUI, Figma"
          shadowColor="#004AAC"
        />
      ),
    },
    {
      title: {
        company: "Glocybs",
        period: "Feb 2024 - Apr 2024",
      },
      content: (
        <ExperienceCard
          company="Glocybs"
          period="Feb 2024 - Apr 2024"
          position="Full Stack Web Developer Intern"
          location="Remote"
          description={[
            "Developed a Document Generator using ReactJS and ExpressJS as an internal tool to automate the generation of documents like Offer Letters, Non-Disclosure Agreements, Bonds etc, in the organization.",
          ]}
          techStack="ReactJS, NodeJS, ExpressJS, MongoDB"
          shadowColor="#06b6d4"
        />
      ),
    },
    {
      title: {
        company: "Bhagalpur Police",
        period: "Aug 2023 - Jan 2024",
      },
      content: (
        <ExperienceCard
          company="Bhagalpur Police"
          period="Aug 2023 - Jan 2024"
          position="UI/UX + Frontend Developer"
          location="Bhagalpur, Bihar, India"
          description={[
            "Received Project offer from Bhagalpur Police: Member of a team of 10+ students, collaborated with 6 officers to simplify the FIR progress tracking, multilevel reporting and analytics.",
            <>
              Featured in Newspapers,
              <Link
                to="https://timesofindia.indiatimes.com/city/patna/iiit-bhagalpur-and-police-ink-mou-to-develop-ai-based-app/articleshow/102066581.cms"
                className="underline mx-1"
              >
                TimesofIndia
              </Link>
              and Youtube Channels,
              <Link
                to="https://timesofindia.indiatimes.com/city/patna/iiit-bhagalpur-and-police-ink-mou-to-develop-ai-based-app/articleshow/102066581.cms"
                className="underline mx-1"
              >
                The Bihar Bulletin
              </Link>
            </>,
          ]}
          techStack="ReactJS, HTML5, CSS3, Figma"
          shadowColor="#A38F58"
        />
      ),
    },
  ];

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
        Experience
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

      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
};

interface ExperienceCardProps {
  company: string;
  period: string;
  position: string;
  location: string;
  description: (string | React.ReactNode)[];
  techStack: string;
  shadowColor: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  period,
  position,
  location,
  description,
  techStack,
  shadowColor,
}) => (
  <motion.div
    className="m-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 font-manrope text-gray 
    border-t-[1px] border-solid border-l-[1px] px-4 sm:px-6 md:px-8 py-4 rounded-xl shadow-[4px_4px_0px_1px] md:shadow-[6px_6px_0px_1px] w-full max-w-[800px] flex flex-col"
    style={{ boxShadow: `4px 4px 0px 1px ${shadowColor}` }}
    viewport={{ once: true }}
    initial={{
      opacity: 0,
      y: -100,
      scale: 1,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.2,
        ease: "easeInOut",
        bounce: 0.7,
      },
    }}
  >
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="flex flex-col">
        <span className="text-heading font-space heading text-xl sm:text-2xl md:text-3xl">
          {company}
        </span>
        <span className="text-sm sm:text-base md:text-lg mt-1 sm:mt-2">
          {position}
        </span>
      </div>
      <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0">
        <span className="font-manrope text-sm sm:text-base">{period}</span>
        <span className="text-sm mt-1">{location}</span>
      </div>
    </div>

    <ul className="text-zinc-300 mt-4 text-sm sm:text-base">
      {description.map((item, index) => (
        <li key={index} className={index > 0 ? "mt-2" : ""}>
          • {item}
        </li>
      ))}
    </ul>
    <div className="mt-4 text-sm sm:text-base">Tech Stack: {techStack}</div>
  </motion.div>
);

export default Experience;
