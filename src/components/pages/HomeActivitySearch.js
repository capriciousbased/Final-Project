import React from "react";
import "./HomeActivitySearch.css";
import SearchImgUrl from "../../images/search.svg";
import Button from '@material-ui/core/Button';

function HomeActivitySearch() {
  return (
    <div className="home__search">
      <img className="search_img" src={SearchImgUrl} alt="img1" />
      <h2>What are you waiting for? Get, set, go!</h2>
      <div className="searchArea">
        {/* <input
          className="home__searchInput"
          type="text"
          placeholder="Find Activities"
        />
        <button type="submit" className="search__btn">
          Search
        </button> */}
        <Button variant="contained" color="primary" href="/find-activity">
        Search
      </Button>
      </div>
    </div>
  );
}

export default HomeActivitySearch;
