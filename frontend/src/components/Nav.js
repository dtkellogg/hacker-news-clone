import React from "react";
import ThemeContext from "../contexts/theme";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "rgb(187, 46, 31)",
};

function Nav({ toggleTheme }) {
  const theme = React.useContext(ThemeContext);
  return (
    <div className="nav">
      <ul className="nav-links">
        <NavLink to="/" exact activeStyle={activeStyle} className="nav-link">
          Top
        </NavLink>

        <NavLink to="/new" activeStyle={activeStyle} className="nav-link">
          New
        </NavLink>
      </ul>
      <button className="nav-theme-icon btn-clear" onClick={toggleTheme}>
        {theme === "light" ? "🔦" : "💡"}
      </button>
    </div>
  );
}

export default Nav;
