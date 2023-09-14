import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import './style.css'

const DataToggle = ({priceType,setPriceType,handlePriceTypeChange}) => {

  const style = {
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    "& .MuiToggleButtonGroup-grouped": {
      border: "1px solid !important",
      color: "var(--grey)",
    },
  };

  return (
    <div className="toggle">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={style}
      >
        <ToggleButton value="prices" className="toggle-btn">Price</ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default DataToggle;
