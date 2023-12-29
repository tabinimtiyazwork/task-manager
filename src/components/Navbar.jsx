import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarStyles from "../styles/NavbarStyles";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [tabs] = useState([
    { path: "/", label: "My Tasks" },
    { path: "/addTask", label: "Add Task" },
  ]);

  return (
    <div style={NavbarStyles.navbar}>
      <img src={logo} alt="Logo" style={NavbarStyles.logo} />
      {tabs.map((tab) => (
        <Link key={tab.path} to={tab.path} style={NavbarStyles.tabLink}>
          <div
            style={{
              ...NavbarStyles.tab,
              ...(location.pathname === tab.path ? NavbarStyles.activeTab : {}),
            }}
          >
            {tab.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
