import React from "react";
import "./StylingSheets/FilterVideoButton.css";

function FilterButton() {
  return (
    <div className="FilterBar">
      <ul>
        <li className="main">All</li>
        <li>Cricket</li>
        <li>Comedy</li>
        <li>Naruto</li>
        <li>JavaScript</li>
        <li>Thrillers</li>
        <li>Trailer</li>
        <li>Netflix</li>
        <li>Game of Thrones</li>
        <li>Football</li>
        <li>Hotstar</li>
        <li>Recently Uploaded</li>
        <li>Live</li>
      </ul>
    </div>
  );
}

export default FilterButton;
