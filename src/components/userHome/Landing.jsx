/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineBook } from "react-icons/md";
import { LuPuzzle } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import SideBarItem from "./SideBarItem";

import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Projects from "./Projects";
import Learning from "./Learning";

const sideBarButtons = [
  { name: "Dashboard", icon: "fa-solid fa-border-all", path: "dashboard" },
  {
    name: "My Learning",
    icon: "fa-solid fa-book-open-reader",
    path: "learning"
  },
  { name: "Projects", icon: "fa-solid fa-puzzle-piece", path: "projects" },
  { name: "Settings", icon: "fa-solid fa-gears", path: "settings" }
];

const Landing = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");

  const gotoPage = (path) => {
    setSearchParams({ page: path });
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-one-quarter">
          <aside className="menu">
            <p className="menu-label">Actions</p>
            <ul className="menu-list">
              {sideBarButtons.map((button, index) => (
                <li key={index}>
                  <SideBarItem
                    name={button.name}
                    icon={button.icon}
                    gotoPage={gotoPage}
                    path={button.path}
                    pagePath={page}
                  />
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="column">
          {page === "dashboard" && <Dashboard />}
          {page === "learning" && <Learning />}
          {page === "projects" && <Projects />}
          {page === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default Landing;
