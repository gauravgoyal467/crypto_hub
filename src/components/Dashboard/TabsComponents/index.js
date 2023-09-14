import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import GridLayout from "../GridLayout";
import ListLayout from "../ListLayout";
import "./style.css";

const TabsComponents = ({ cryptoList,currency,isWishList }) => {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const attr = {
    color: "var(--white)",
    fontSize: "1.2rem",
    padding: "1rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={attr} />
          <Tab label="List" value="list" sx={attr} />
        </TabList>
        <TabPanel value="grid">
          <div className="grid_flex">
            {cryptoList &&
              cryptoList.map((element) => (
                <GridLayout coin={element} currency={currency} key={element.id} isWishList={isWishList} />
              ))}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list_flex">
            {cryptoList &&
              cryptoList.map((element) => (
                <ListLayout coin={element} currency={currency} key={element.id} isWishList={isWishList}/>
              ))
            }
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
};

export default TabsComponents;
