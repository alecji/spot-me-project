import React from "react";
import { Link } from "react-router-dom";
import image from "../../../src/gym-near.png";

const NavTabs = () => (
  <div className="navBar">
  <ul className="nav nav-tabs" >
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
      <img src={image} alt="logo" />
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/home"
        className={
          window.location.pathname === "/chat" ? "nav-link active" : "nav-link"
        }
      >
       Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/about"
        className={
          window.location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        About Us
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/contact"
        className={
          window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/blog"
        className={
          window.location.pathname === "/blog" ? "nav-link active" : "nav-link"
        }
      >
        My Blog
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/chat"
        className={
          window.location.pathname === "/chat" ? "nav-link active" : "nav-link"
        }
      >
        Live Chat!
      </Link>
    </li>
  </ul>
  <div></div>
  </div>

);

export default NavTabs;
