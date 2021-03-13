import React from "react";
import "./HomeActivitySearch.css";

function HomeActivitySearch() {
  return (
    <div className="home__search">
      <h2>Ready to Find Happiness</h2>
      <div className="searchArea">
        <input
          className="home__searchInput"
          type="text"
          placeholder="Find Activities"
        />
        <button type="submit" className="search__btn">Search</button>
      </div>
    </div>
  );
}

export default HomeActivitySearch;
