import React from "react";
import profileSVG from "../../assets/profile.svg";
import "./NavigationBar.scss";

const NavigationBar: React.FC = () => {
  return (
    <div className="navbar-container">
      <div className="company-name">HRD Software</div>
      <div className="navigation-bar">
        <div className="navigation-links">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About Us
          </a>
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
