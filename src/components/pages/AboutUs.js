import React from "react";
import "./AboutUs.css";
import missionImg from "../../images/mission.svg";
import teamImg from "../../images/meet-team.png";

export default function AboutUs() {
  return (
    <div class="about-us">
      <div className="mission">
        <img className="mission-img" src={missionImg} alt="" />
        <h2 className="mission-heading"> Our Mission </h2>
        <p className="mission-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          necessitatibus velit debitis reiciendis unde voluptatibus quae a
          delectus, eum, magni consectetur asperiores. Facere debitis ducimus,
          eaque consequuntur quam ipsum maiores.
        </p>
      </div>
      <img className="team-img" src={teamImg} alt="" />
    </div>
  );
}
