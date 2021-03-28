import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logos.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link
          to="/"
          title={"Motivity"}
          className="navbar-logo"
          onClick={closeMobileMenu}
        >
          <img alt={"Logo"} src={logo} className="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/find-activity"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <FontAwesomeIcon icon={faSearchengin} />
              Find Activity
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/About-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
