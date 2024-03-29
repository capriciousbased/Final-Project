import React from "react";
import "./AboutUs.css";
import missionImg from "../../images/mission.svg";
import teamImg from "../../images/meet-team.png";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="mission">
        <img className="mission-img" src={missionImg} alt="" />
        <h2 className="mission-heading">
          We make the world happier, one activity at a time
        </h2>
        <p className="mission-text">
          We deeply believe that happiness is a highly valuable good, and
          everyone should have as much as possible of it. This is exactly why we
          have come together to give everyone the opportunity to find something
          that makes them happy, even against the odds and in weird times.
        </p>

        <p className="mission-text">
          Our mission is to erase boredom and not knowing what to do with your
          time completely! Time is valuable and none of it should be wasted,
          which is what happens when you spend hours wondering what you could do
          in your free time. This effect is even worse during the pandemic when
          lots of possibilities are not available. Motivity tells you which
          activities are available and gives you advice on what you might like
          most, considering your activity record and how happy you were after
          each activity.
        </p>

        <p className="mission-text">
          With that you can decide much more easily and faster on what your next
          adventure looks like and spend more time with things you actually like
          than with wondering what to do.
        </p>
      </div>
      <img className="team-img" src={teamImg} alt="" />

      <div className="team-text">
        <h2>The team</h2>
        <p>
          We are a team of five creative minds with different backgrounds but
          one commonality: We are truly convinced that happiness is highly
          valuable, and everyone deserves to be happy. We experienced ourselves
          how hard it is to stay motivated and active, even more so in the
          pandemic. And we definitely are not alone! That’s why we grouped up
          and created Motivity! An activity advisor to refill your own happiness
          reserves, to make the whole world a bit happier, one activity at a
          time.
        </p>
      </div>
    </div>
  );
}
