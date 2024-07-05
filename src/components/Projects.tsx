import Card from "./Card";
import megaProjects from "../utils/megaProjects";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import petProjects from "../utils/petProjects";
import { noOfMegaProjects } from "../utils/megaProjects";
import { noOfPetProjects } from "../utils/petProjects";
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
const Projects = () => {
  const [value, setValue] = useState(0);
  const text =
    "What value does that skill hold if you're unable to apply it to the project?".split(
      " "
    );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

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
        Projects
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
          justifyContent: "space-between",
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
          label="Mega Projects"
          {...a11yProps(0)}
          sx={{
            flexGrow: 1,
            border: "1px solid rgba(66, 66, 66, .623)",
            color: "#fff",
            borderRadius: "4px",
            fontWeight: "500",
            marginRight: "20px",
            boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.8)",
          }}
        />
        <Tab
          label="Pet Projects"
          {...a11yProps(1)}
          sx={{
            flexGrow: 1,
            border: "1px solid rgba(66, 66, 66, .623)",
            color: "#fff",
            borderRadius: "4px",
            fontWeight: "500",
            marginLeft: "20px",
            boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.8)",
          }}
        />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <div className=" flex flex-col sm:flex-row sm:flex-wrap">
          {megaProjects.map((item) => {
            return (
              <div
                key={item.title}
                className={`w-full sm:w-1/2 pt-2 px-0 sm:px-4 lg:w-1/3 ${
                  noOfMegaProjects % 4 == 0 ? "large:w-1/4" : ""
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
                />
              </div>
            );
          })}
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <div className=" flex flex-col sm:flex-row sm:flex-wrap">
          {petProjects.map((item) => {
            return (
              //
              <div
                key={item.title}
                className={`w-full sm:w-1/2 pt-2 px-0 sm:px-4 lg:w-1/3 ${
                  noOfPetProjects % 4 == 0 ? "large:w-1/4" : ""
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
                />
              </div>
            );
          })}
        </div>
      </CustomTabPanel>
    </div>
  );
};

export default Projects;
