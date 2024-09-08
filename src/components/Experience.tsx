import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const text = "Companies where I can applied my skills".split(" ");

  const data = [
    {
      title: {
        company: "Webyapar",
        period: "May 2024 - Jun 2024",
      },
      content: (
        <motion.div
          className=" m-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 font-manrope text-gray 
        border-t-[1px] border-solid border-l-[1px] px-8 py-4 rounded-xl shadow-[4px_6px_0px_1px_#ec3242] md:shadow-[6px_6px_0px_1px_#ec3242] md:w-[800px] w-fit flex flex-col"
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
          <div className=" flex justify-between items-center">
            <div className=" flex flex-row items-end justify-center">
              <span className=" text-heading font-space heading">Webyapar</span>
              {/* <img
                src="https://res.cloudinary.com/dwuzfbivo/image/upload/v1720098765/portfolio/companies/webyapar_ladowq.png"
                alt=""
                className=" w-auto h-5 ml-2 my-auto"
              /> */}
            </div>
            <span className="font-manrope hidden small:block">
              May 2024 - Jun 2024
            </span>
          </div>
          <div className=" flex justify-between mt-4 items-center">
            <span className=" text-base small:text-xl">
              Frontend Web Developer Intern
            </span>
            <span className="hidden small:block">Remote</span>
          </div>
          <div className=" flex mt-4 items-center text-xs small:hidden">
            <span className="font-manrope">May 2024 - Jun 2024</span>
            <span className=" mx-1">•</span>
            <span>Remote</span>
          </div>

          <ul className=" text-zinc-300 mt-4 text-sm small:text-base">
            <li>
              • Developed a static and responsive website using HTML5, CSS3,
              Javascript and Bootstrap to meet the requirements of the client.
            </li>
            <li className=" mt-2">
              • Collaborated with designers and stakeholders to translate client
              requirements into a polished, professional website, delivering the
              project 15% ahead of schedule.
            </li>
          </ul>
          <div className=" mt-4 text-sm small:text-base">
            Tech Stack: HTML5, CSS3, Bootstrap, Figma
          </div>
        </motion.div>
      ),
    },
    {
      title: {
        company: "Glocybs",
        period: "Feb 2024 - Apr 2024",
      },
      content: (
        <motion.div
          className=" m-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 font-manrope text-gray 
    border-t-[1px] border-solid border-l-[1px] px-8 py-4 rounded-xl shadow-[4px_6px_0px_1px_#06b6d4] md:shadow-[6px_6px_0px_1px_#06b6d4] md:w-[800px] w-fit flex flex-col"
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
          <div className=" flex justify-between items-center">
            <div className=" flex flex-row items-center justify-center">
              <span className=" text-heading font-space heading">Glocybs</span>
              {/* <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/v1711872070/portfolio/companies/Glocybs_hv9uux.png"
            alt=""
            className=" w-auto h-6 ml-2"
          /> */}
            </div>
            <span className="font-manrope hidden small:block">
              Feb 2024 - Apr 2024
            </span>
          </div>
          <div className=" flex justify-between mt-4 items-center">
            <span className=" text-base small:text-xl">
              Full Stack Web Developer Intern
            </span>
            <span className=" hidden small:block">Remote</span>
          </div>

          <div className=" flex mt-4 items-center text-xs small:hidden ">
            <span className="font-manrope">Feb 2024 - Apr 2024</span>
            <span className=" mx-1">•</span>
            <span>Remote</span>
          </div>

          <ul className=" text-zinc-300 mt-4 text-sm small:text-base">
            <li>
              • Developed a Document Generator using ReactJS and ExpressJS as an
              internal tool to automate the generation of documents like Offer
              Letters, Non-Disclosure Agreements, Bonds etc, in the
              organization.
            </li>
            <li className=" mt-2">
              • Directly communicated and worked for a client, building their
              website using ReactJS, ExpressJS, Google Sheets API.
            </li>
          </ul>
          <div className=" mt-4 text-sm small:text-base">
            Tech Stack: ReactJS, NodeJS, ExpressJS, MongoDB, HTML5, CSS3
          </div>
        </motion.div>
      ),
    },
    {
      title: {
        company: "Bhagalpur Police",
        period: "Aug 2023 - Jan 2024",
      },
      content: (
        <motion.div
          className=" m-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 font-manrope text-gray 
    border-t-[1px] border-solid border-l-[1px] px-8 py-4 rounded-xl shadow-[4px_6px_0px_1px_#A38F58] md:shadow-[6px_6px_0px_1px_#A38F58] md:w-[800px] w-fit flex flex-col"
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
          <div className=" flex justify-between items-center">
            <div className=" flex flex-row items-center justify-center">
              <span className=" text-heading font-space heading">
                Bhagalpur Police
              </span>
              {/* <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/v1711872071/portfolio/companies/locus-white_eadeih.png"
            alt=""
            className=" w-auto h-6 ml-2"
          /> */}
            </div>
            <span className="font-manrope hidden small:block">
              Aug 2023 - Jan 2024
            </span>
          </div>
          <div className=" flex justify-between mt-4 items-center">
            <span className=" text-base small:text-lg">
              UI/UX + Frontend Developer
            </span>
            <span className="hidden small:block">Bhagalpur, Bihar, India</span>
          </div>

          <div className=" flex mt-4 items-center text-xs small:hidden ">
            <span className="font-manrope">Aug 2023 - Jan 2024</span>
            <span className=" mx-1">•</span>
            <span>Remote</span>
          </div>

          <ul className=" text-zinc-300 mt-4 text-sm small:text-base">
            <li>
              • Received Project offer from Bhagalpur Police: Member of a team
              of 10+ students, collaborated with 6 officers to simplify the FIR
              progress tracking, multilevel reporting and analytics.
            </li>
            <li className=" mt-2">
              • Featured in Newspapers,
              <Link
                to={
                  "https://timesofindia.indiatimes.com/city/patna/iiit-bhagalpur-and-police-ink-mou-to-develop-ai-based-app/articleshow/102066581.cms"
                }
                className=" underline mx-1"
              >
                TimesofIndia
              </Link>
              and Youtube Channels,
              <Link
                to={
                  "https://timesofindia.indiatimes.com/city/patna/iiit-bhagalpur-and-police-ink-mou-to-develop-ai-based-app/articleshow/102066581.cms"
                }
                className=" underline mx-1"
              >
                The Bihar Bulletin
              </Link>
            </li>
          </ul>
          <div className=" mt-4 text-sm small:text-base">
            Tech Stack: ReactJS, HTML5, CSS3, Figma
          </div>
        </motion.div>
      ),
    },
    {
      title: {
        company: "Streeya",
        period: "Jul 2023 - Aug 2023",
      },
      content: (
        <motion.div
          className="m-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 font-manrope text-gray 
      border-t-[1px] border-solid border-l-[1px] px-8 py-4 rounded-xl shadow-[2px_6px_0px_1px_#a52241] md:shadow-[6px_6px_0px_1px_#a52241] md:w-[800px] w-fit flex flex-col"
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
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center justify-center">
              <span className="text-heading font-space heading">Streeya</span>
            </div>
            <span className="font-manrope hidden small:block">
              Jul 2023 - Aug 2023
            </span>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <span className="text-base small:text-lg">UI/UX Designer</span>
            <span className="hidden small:block">Remote</span>
          </div>

          <div className="flex mt-4 items-center text-xs small:hidden">
            <span className="font-manrope">Jul 2023 - Aug 2023</span>
            <span className="mx-1">•</span>
            <span>Remote</span>
          </div>

          <ul className="text-zinc-300 mt-4 text-sm small:text-base">
            <li>
              • Designed 50+ web pages for their website establishing a strong
              brand identity.
            </li>
            <li className="mt-2">
              • Crafted a responsive design strategy, ensuring a seamless user
              experience across various devices.
            </li>
          </ul>
          <div className="mt-4 text-sm small:text-base">Tech Stack: Figma</div>
        </motion.div>
      ),
    },
  ];

  return (
    <div
      className=" flex flex-col z-0 px-4 py-8 lg:py-12"
      id="experience"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Experience
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

      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Experience;
