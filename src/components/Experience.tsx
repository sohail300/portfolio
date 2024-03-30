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
    console.log(event)
  };

  return (
    <div>
      <div
        className=" flex flex-col z-0 px-24 py-8"
        style={{
          backgroundImage: "url(./grid.svg)",
          width: "100vw",
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
              marginRight: "40px",
              marginLeft: "40px",
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
          <div className=" flex flex-row justify-around items-center">
             <img src="./experience1.png" alt="" className=" w-80" />
            <img src="./Glocybs.png" alt="" className=" h-40 w-40" />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className=" flex flex-row justify-around items-center">
          <img src="./experience2.png" alt="" className=" w-80" />
            <img src="./locus-white.png" alt="" className=" h-24" />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className=" flex flex-row justify-around items-center">
          <img src="./experience3.png" alt="" className=" w-80" />
            <img src="./Streeya.png" alt="" className=" h-20" />
          </div>
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default Experience;