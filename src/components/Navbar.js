import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const modeChanger = () => {
    if (document.body.style.backgroundColor === "rgb(4, 39, 67)") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "rgb(4, 39, 67)";
      document.body.style.color = "white";
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ height: "4rem" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ paddingLeft: "7rem" }}>
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
          <ul
            className="navbar-nav mb-2 mb-lg-0"
            style={{ paddingLeft: "2rem" }}
          >
            <li className="nav-item mx-2 ">
              <Link className="nav-link" to="/popular">
                Popular
              </Link>{" "}
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/top_rated">
                Top Rated
              </Link>{" "}
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/upcoming">
                Upcoming
              </Link>{" "}
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/now_playing">
                Now Playing
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        {/*black white mode */}
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            style={{ marginRight: "1rem" }}
            onClick={modeChanger}
          />
          <label
            class="form-check-label"
            for="flexSwitchCheckDefault"
            style={{ color: "white" }}
          >
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
