import React from "react";
import SearchIcon from "@material-ui/icons/Search";

function HomeActivitySearch() {
  return (
    <div className="home__search">
      <h2>Ready to Find Happiness</h2>
      <input className="home__searchInput" type="text" />
      <SearchIcon className="home__searchIcon" />
    </div>
  );
}

export default HomeActivitySearch;
