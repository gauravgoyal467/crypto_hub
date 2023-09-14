import React from "react";
import MainSection from "../components/LandingPage/MainSection";
import Footer from "../components/Common/Footer";
import '../App.css'

const Home = () => {
  return (
    <div>
      <div className="separate">
        <MainSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
