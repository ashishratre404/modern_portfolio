import React from "react";
import "./home.css";

import Profile from "../../components/Profile";
import About from "../../components/About";
import Education from "../../components/Education";
import LatestWork from "../../components/LatestWork";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Profile />
      <About />
      <Education />
      <LatestWork />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
