import React from "react";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  // display submenu
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const temBtn = e.target.getBoundingClientRect();
    const center = (temBtn.left + temBtn.right) / 2;
    const bottom = temBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  // hide submenu
  const handleSubmenu = (e) => {
    const list = e.target.classList.contains("link-btn");

    if (!list) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
