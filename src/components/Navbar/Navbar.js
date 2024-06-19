import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-md fixed-top ${
          navColour ? "sticky" : "navbar"
        }`}
      >
        <div className="container">
          <a className="navbar-brand d-flex" href="/">
          𝓱𝓪𝓻𝓲𝓹𝓻𝓪𝓼𝓪𝓭
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="responsive-navbar-nav"
            aria-expanded={expand ? true : false}
            aria-label="Toggle navigation"
            onClick={() => {
              updateExpanded(expand ? false : true);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${expand ? "show" : ""}`}
            id="responsive-navbar-nav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/projects"
                  onClick={() => updateExpanded(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/skills"
                  onClick={() => updateExpanded(false)}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
