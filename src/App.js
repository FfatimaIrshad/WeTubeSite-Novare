import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}
export default App;
