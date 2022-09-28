import React from "react";
import "./StylingSheets/SideBarRow.css";

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebar-icon" /> {/* Sidebar icon*/}
      <h2 className="sidebar-title">{title}</h2> {/* Sidebar titles*/}
    </div>
  );
}

export default SidebarRow;
