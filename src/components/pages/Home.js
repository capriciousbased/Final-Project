import React from "react";
import "./Home.css";
import HomeImgUrl1 from "../../images/img-1.svg";
import HomeImgUrl2 from "../../images/img-2.svg";
import HomeActivitySearch from "./HomeActivitySearch";

function Home() {
  return (
    <div className="homeContainer">
      <div className="main-container">
        <div className="homeText">
          <h2 className="home-header">The Motivity Factor… </h2>
          <p>
            After over a year of lockdowns, restrictions and social guidelines,
            the majority of us is still stuck at home. And yes, yes, we get it -
            it is extremely important to keep ourselves and others safe by being
            patient and practicing social distancing. But that doesn’t mean we
            can’t have fun and make the most of our time! Motivity provides you
            with the ultimate guide for what to do when, where and with who
            during this pandemic!
          </p>
        </div>
        <img className="home-img1" src={HomeImgUrl1} alt="img1" />
      </div>

      <div className="main-container">
        <img className="home-img2" src={HomeImgUrl2} alt="img2" />
        <div className="homeText">
          <h2 className="home-header"> ...we got you covered!</h2>
          <p>
            Depending on your mood and personal preference, choose between our
            six main activity categories and get inspired. Regardless of whether
            you feel like hanging out by yourself or with others, you’d rather
            stay at home or get some fresh air in, or whether you cannot get
            enough of your electronic devices or would love a break from the
            online world - Motivity got your back. Get inspired and stuck into
            our epic list of recommendations, events and activities near you!
          </p>
        </div>
      </div>

      <HomeActivitySearch />
    </div>
  );
}

export default Home;
