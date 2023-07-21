import React from "react";
import { NavLink } from "react-router-dom";
import profileSVG from "../../assets/profile.svg";
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <div className="navbar-container">
      <div className="company-name">HRD Software</div>
      <div className="navigation-bar">
        <div className="navigation-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/" className="nav-link">About Us</NavLink>
        </div>
        <div className="user-profile">
          <img
            src={profileSVG}
            alt="User Profile"
            className="profile-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
