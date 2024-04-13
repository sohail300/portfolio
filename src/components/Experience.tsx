import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <div
      className=" flex flex-col z-0 px-8 py-8"
      id="experience"
      style={{
        backgroundImage: "url(./grid.svg)",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Experience
      </div>
      <div className=" heading text-center mb-8">
        Companies where I can applied my skills
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
          label="GLOCYBS"
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
          label="BHAGALPUR POLICE"
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
          label="STREEYA"
          {...a11yProps(2)}
          sx={{
            flexGrow: 1,
            width: 4,
            border: "1px solid rgba(66, 66, 66, .623)",
            color: "#fff",
            borderRadius: "4px",
            fontWeight: "500",
            boxShadow: "0px 7px 7px -5px rgba(255, 255, 255, 0.8)",
          }}
        />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <div className=" flex flex-col justify-between items-center sm:flex-row sm:justify-around w-full">
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872079/portfolio/experience/experience1_jvofke.png"
            alt=""
            className=" w-60 sm:w-80"
          />
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872070/portfolio/companies/Glocybs_hv9uux.png"
            alt=""
            className=" h-40 w-40 mt-8 sm:mt-0"
          />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className=" flex flex-col justify-around items-center sm:flex-row sm:justify-around w-full">
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872080/portfolio/experience/experience2_qkjx4b.png"
            alt=""
            className=" w-60 sm:w-80"
          />
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872071/portfolio/companies/locus-white_eadeih.png"
            alt=""
            className=" h-24 mt-8 sm:mt-0"
          />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className=" flex flex-col justify-around items-center sm:flex-row sm:justify-around w-full">
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872081/portfolio/experience/experience3_n2ji1u.png"
            alt=""
            className=" w-60 sm:w-80"
          />
          <img
            src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872072/portfolio/companies/Streeya_ltbp0q.png"
            alt=""
            className=" h-20 mt-8"
          />
        </div>
      </CustomTabPanel>
    </div>
  );
};

export default Experience;
