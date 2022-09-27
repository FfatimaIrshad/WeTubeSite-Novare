import "./App.css";
import React from "react";
import Header from "./Components/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/SideBar";
import FilterButton from "./Components/FilterVideoButton";

// import VideoList from "./Components/VideosList"; .....This is importing json file from VideosList folder >> VideosListData.json

function App() {
  return (
    <Router>
      <Header />                         {/* Header section aka navbar */}
      <FilterButton />                   {/* Video Filter Buttons */}
      <Sidebar />                        {/*  Side static navbar without links but styled */}
    </Router>
  );
}
export default App;
