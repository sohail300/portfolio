import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Experience = () => {
  const [value, setValue] = useState(0);
  const text = "Companies where I can applied my skills".split(" ");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

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

      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          display: "flex",
          // justifyContent: "space-between",
          outline: "none",
          margin: "auto",
          marginBottom: "16px",
          "& button.Mui-selected": {
            background:
              "linear-gradient(268.23deg, rgba(66, 66, 66, .4) 2.85%, rgba(66, 66, 66, .6) 94.71%)",
            color: "#fff",
          },
        }}
        TabIndicatorProps={{
          style: {
            background: "none",
          },
        }}
      >
        <Tab
          label="WEBYAPAR"
          {...a11yProps(0)}
          sx={{
            flexGrow: 1,
            border: "1px solid rgba(66, 66, 66, .623)",
            color: "#fff",
            borderRadius: "4px",
            fontWeight: "500",
            boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.8)",
          }}
        />

        <Tab
          label="GLOCYBS"
          {...a11yProps(1)}
          sx={{
            flexGrow: 1,
            border: "1px solid rgba(66, 66, 66, .623)",
            color: "#fff",
            borderRadius: "4px",
            fontWeight: "500",
            marginRight: "20px",
            marginLeft: "20px",
            boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.8)",
          }}
        />
        <Tab
          label="BHAGALPUR POLICE"
          {...a11yProps(2)}
          sx={{
            flexGrow: 1,
            border: "1px solid rgba(66, 66, 66, .623)",
            color: "#fff",
            borderRadius: "4px",
            fontWeight: "500",
            boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.8)",
          }}
        />
        {/* <Tab
          label="STREEYA"
          {...a11yProps(3)}
          sx={{
            flexGrow: 1,
            width: 4,
            border: "1px solid rgba(66, 66, 66, .623)",
            color: "#fff",
            borderRadius: "4px",
            fontWeight: "500",
            boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.8)",
          }}
        /> */}
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <motion.div
          className=" m-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 font-manrope text-gray 
        border-t-[1px] border-solid border-l-[1px] px-8 py-4 rounded-xl shadow-[4px_6px_0px_1px_#a52241] md:shadow-[6px_6px_0px_1px_#a52241] md:w-[800px] w-fit flex flex-col"
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
              May 2024 - June 2024
            </span>
          </div>
          <div className=" flex justify-between mt-4 items-center">
            <span className=" text-base small:text-xl">
              Frontend Web Developer Intern
            </span>
            <span className="hidden small:block">Remote</span>
          </div>
          <div className=" flex mt-4 items-center text-xs small:hidden">
            <span className="font-manrope">May 2024 - June 2024</span>
            <span className=" mx-1">•</span>
            <span>Remote</span>
          </div>

          <ul className=" text-zinc-300 mt-4 text-sm small:text-base">
            <li>
              • Developed a static and responsive website using HTML5, CSS3,
              Javascript and Bootstrap to meet the requirements of the client.
            </li>
          </ul>
          <div className=" mt-4 text-sm small:text-base">
            Tech Stack: HTML5, CSS3, Bootstrap, Figma
          </div>
        </motion.div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
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
              February 2024 - April 2024
            </span>
          </div>
          <div className=" flex justify-between mt-4 items-center">
            <span className=" text-base small:text-xl">
              Full Stack Web Developer Intern
            </span>
            <span className=" hidden small:block">Remote</span>
          </div>

          <div className=" flex mt-4 items-center text-xs small:hidden ">
            <span className="font-manrope">February 2024 - April 2024</span>
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
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
              August 2023 - January 2024
            </span>
          </div>
          <div className=" flex justify-between mt-4 items-center">
            <span className=" text-base small:text-lg">
              UI/UX + Frontend Developer
            </span>
            <span className="hidden small:block">Bhagalpur, Bihar, India</span>
          </div>

          <div className=" flex mt-4 items-center text-xs small:hidden ">
            <span className="font-manrope">August 2023 - January 2024</span>
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
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={3}>
        <div
          className=" m-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 font-manrope text-gray 
        border-t-[1px] border-solid border-l-[1px] px-8 py-4 rounded-xl shadow-[2px_6px_0px_1px_#a52241] md:shadow-[6px_6px_0px_1px_#a52241] md:w-[800px] w-fit flex flex-col"
        >
          <div className=" flex justify-between items-center">
            <div className=" flex flex-row items-end justify-center">
              <span className=" text-heading font-space heading">Streeya</span>
              <img
                src="https://res.cloudinary.com/dwuzfbivo/image/upload/v1711872072/portfolio/companies/Streeya_ltbp0q.png"
                alt=""
                className=" w-auto h-5 ml-2 my-auto"
              />
            </div>
            <span className="font-manrope">July 2023 - August 2023</span>
          </div>
          <div className=" flex justify-between mt-4 items-center">
            <span className=" text-xl">UI/UX Designer</span>
            <span>Remote</span>
          </div>

          <ul className=" text-zinc-300 mt-4">
            <li>
              • Designed 50+ web pages for their website establishing a strong
              brand identity.
            </li>
            <li className=" mt-2">
              • Crafted a responsive design strategy, ensuring a seamless user
              experience across various devices.
            </li>
          </ul>
          <div className=" mt-4">Tech Stack: Figma</div>
        </div>
      </CustomTabPanel> */}
    </div>
  );
};

export default Experience;
