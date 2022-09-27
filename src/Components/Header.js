// importing material UI icons from ...... https://www.npmjs.com/package/@material-ui/icons.... installed using npm

import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Search";
import SearchIcon from "@material-ui/icons/Menu";
import VideocamIcon from "@material-ui/icons/Videocam";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";


// Header components starting

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon className="search-icon" />
      </div>
      <div>
        {/* Logo added */}
        <img src="./images/logo.svg" className="header-logo" />
      </div>
      <div className="header-search">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`} className="input-icon">
          <MenuIcon style={{ fontSize: 40 }} className="header-icon" />
        </Link>
      </div>

      <div className="header-right">
        <VideocamIcon style={{ fontSize: 30 }} className="header-icon" />
        <AppsIcon style={{ fontSize: 30 }} className="header-icon" />
        <NotificationsIcon style={{ fontSize: 28 }} className="header-icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          className="header-avatar"/>
          
        {/* Random avatar image from unsplash and can be load only via internet. offline not loaded*/}
        {/* End of header/navbar JSX */}
      </div>
    </div>
  );
}
export default Header;
