import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header.js"; /* Header */
import Sidebar from "./Components/SideBar"; /* Side bar */
import FilterButton from "./Components/FilterVideoButton"; /* Filter Bar below header */
import VideoList from "./Components/VideosList"; /* Json file named as video list because all video data was in here :) */

function App() {
  return (
    <Router>
      <Header /> {/* Header section aka navbar */}
      <FilterButton /> {/* Video Filter Buttons */}
      <Sidebar /> {/*  Side static navbar without links but styled */}
      <VideoList /> {/*  Json data*/}
    </Router>
  );
}
export default App;
