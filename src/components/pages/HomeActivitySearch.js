import React from "react";
import "./HomeActivitySearch.css";
import SearchImgUrl from "../../images/search.svg";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";

function HomeActivitySearch() {
  return (
    <div className="home__search">
      <img className="search_img" src={SearchImgUrl} alt="img1" />
      <p className="search_text">
        Feeling drained and unmotivated from months of home-alone lockdowns? You
        don’t know what to do and end up spending hours choosing? Don’t worry,
        we've got an easy fix for you! We have a vast collection of activities
        to choose from and looking for them is just so easy. We have sorted all
        activities to six categories, which are indoor vs. outdoor, with friends
        vs do by yourself and online vs. offline. For more details, visit our
        Activities page!
      </p>
      <p className="search_text">
        You could also just scroll through all of our suggestions individually,
        but you would probably get stuck and be overwhelmed by the insanely big
        collection of fun-filled activities Motivity has to offer.
      </p>
      <h2>What are you waiting for? Get, set, go!</h2>
      <div className="searchArea">
        <Link component={RouterLink} to="/find-activity">
          <Button className="searchButton" variant="contained" color="primary">
            Search
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomeActivitySearch;
