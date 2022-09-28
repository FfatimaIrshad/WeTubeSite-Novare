import React from "react";
import "./StylingSheets/FilterVideoButton.css";

function FilterButton() {
  return (
    <div className="FilterBar">
      <ul>
        <li className="main">All</li>
        <li>Code Academy</li>
        <li>Movies</li>
        <li>Svenska Spel</li>
        <li>Super mario</li>
        <li>Thrillers</li>
        <li>Trailer</li>
        <li>Netflix</li>
        <li>Game of Thrones</li>
        <li>Football</li>
        <li>Justin Timber Lake</li>
        <li>Dua Lipa</li>
        <li>Live</li>
      </ul>
    </div>
  );
}

export default FilterButton;
