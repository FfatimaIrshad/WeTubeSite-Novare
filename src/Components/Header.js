import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Search";
import SearchIcon from "@material-ui/icons/Menu";
import YtLogo from "../logo.svg";
import VideocamIcon from "@material-ui/icons/Videocam";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon className="search-icon" />

        <img alt="logo" src={YtLogo} className="logo" />
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
      </div>
    </div>
  );
}
export default Header;
