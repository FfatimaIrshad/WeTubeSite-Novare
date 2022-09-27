import "./App.css";
import React from "react";
import Header from "./Components/Header.js";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Sidebar from "./Components/SideBar";
import VideoList from "./Components/VideosList";

function App() {
  return (
    <Router>
      <Header />
      <VideoList/>
      <Sidebar/>
    </Router>
  );

}
export default App;
