import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Stocks</a>
        </li>
        <li>
          <a href="#">Reports</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
