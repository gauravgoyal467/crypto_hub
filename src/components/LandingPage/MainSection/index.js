import React from "react";
import Button from "../../Common/Button";
import "./style.css";
import iphone from "../../../assets/iphone.png";
import grad from "../../../assets/grad.png";
import { easeIn, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
// import { RWebShare } from "react-web-share";

const MainSection = () => {
  return (
    <div className="mainSection">
      <div className="leftSection">
        <motion.h1
          className="section-heading"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: easeIn, duration: 1 }}
        >
          Real Time.
        </motion.h1>
        <h2 className="section-heading-2">Crypto</h2>
        <h1 className="section-heading-2"> Tracking</h1>
        <p>
          Uses API to track crypto in real time.Click on dashboard for more
          info.{" "}
        </p>
        <div className="button">
          <NavLink to="/dashboard">
            <Button
              text={"Dashboard"}
              outlined={false}
            />
          </NavLink>
          {/* <RWebShare
            data={{
              text: "CryptoHub made using React JS.",
              url: "https://crypto-dashboard-dec.netlify.app/",
              title: "CryptoHub.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share App" outlined={true} />
          </RWebShare> */}
        </div>
      </div>
      <div className="rightSection">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: +20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            repeat: Infinity,
            duration: 2,
          }}
          src={iphone}
          className="phone-img"
          alt=""
        />
        <img src={grad} className="gradient-img" alt="" />
      </div>
    </div>
  );
};

export default MainSection;
