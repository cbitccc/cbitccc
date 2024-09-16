import React, { useEffect, useState } from "react";
import Heropage from "../components/Heropage";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OurTeam from "../components/OurTeam";
import HomeEvents from "../components/HomeEvents";
import FAQ from "../components/FAQ";
import "./Home.css";

export default function Home() {


  return (
    <>
      <div className="herobg">
        <Navbar/>
        <Heropage className="heropage" />
      </div>
      <Content />
      <HomeEvents/>
      <FAQ/>
      <Footer />
    </>
  );
}
