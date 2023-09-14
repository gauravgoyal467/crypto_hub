import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import {IconButton} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavLink } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton style={{color:"var(--white)"}}onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link"/>
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-list">
          <NavLink to="/" className="link">
            <p>Home</p>
          </NavLink>

          <NavLink to="/compare" className="link">
            <p>Compare</p>
          </NavLink>

          <NavLink to="/wishList" className="link">
            <p>WishList</p>
          </NavLink>

          <NavLink to="/dashboard" className="link">
            <p>DashBoard</p>
          </NavLink>

        </div>
      </Drawer>
    </div>
  );
}
