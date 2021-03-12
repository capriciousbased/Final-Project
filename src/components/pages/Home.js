import React from "react";
import "./Home.css";
import HomeImgUrl1 from "../../images/img-1.jpg";
import HomeImgUrl2 from "../../images/img-2.jpg";
import HomeActivitySearch from "./HomeActivitySearch";

function Home() {
  return (
    <div className="homeContainer">
      <div className="container">
        <div className="homeText">
          <h2>Bored at Home? </h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          delectus aut cupiditate ipsum quis odit est velit doloribus dolor
          fugit libero aliquam non perferendis, recusandae facere enim
          accusantium similique ex.
        </div>
        <img src={HomeImgUrl1} alt="img1" />
      </div>

      <div className="container">
        <img src={HomeImgUrl2} alt="img2" />
        <div className="homeText">
          <h2>we got you </h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, neque
          modi omnis dolor tempore architecto est consectetur, earum nostrum
          vero necessitatibus nam quidem quam fuga ipsa deleniti, odio soluta?
          Aliquid.
        </div>
      </div>
      <HomeActivitySearch />
    </div>
  );
}

export default Home;
