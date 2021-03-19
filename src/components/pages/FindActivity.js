import React, { useState } from "react";
import "../../App.css";
import CardList from "./CardList";
import SearchBar from "./SearchBar";

import EventSource from "../api/EventSource";

export default function FindActivity() {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await EventSource.get("/", {
      params: { q: text },
    });

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <div className="search">
      <div className="container searchApp">
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
}
