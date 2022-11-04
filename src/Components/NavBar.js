import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navl">
      <nav className="hom">
        <Link to="/">CustomHook</Link>
        <Link to="/CountTwo">Counter</Link>
      </nav>
    </div>
  );
};

export default NavBar;
