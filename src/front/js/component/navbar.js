import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../pages/global_context";
import logo from "../../img/profile-pic.png";
import "../../styles/styles.css";

export const Navbar = () => {
  const { auth, setAuth } = useContext(userContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <div className="ml-auto">
          <Link to="/Login">
            <span
              className={
                auth === true ? "hide" : "show" + " btn btn-primary texter"
              }
            >
              Login
            </span>
          </Link>

          {/* Right now this profile pic is importing it into logo up top
              Going forward we will need to refactor our code to make it 
              pull from the stored profile pic in the back end */}

          <div
            className={auth === false ? "hide" : "show" + " dropdown profile"}
          >
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={logo} />
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link to="/User/1">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
              </Link>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <button
                    onClick={() => {
                      setAuth(false);
                    }}
                  >
                    Log Out
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
