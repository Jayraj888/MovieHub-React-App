import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/popular ">
          MovieHub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedCocntent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link" to="/popular">
                Popular
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/top_rated">
                Top_Rated
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming">
                Upcoming
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/now_playing">
                Now_Playing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
