import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const DropdownTab = ({ tabName, options, link, sublink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="tab">
      <div className="tab-header" onClick={toggleDropdown}>
        <div className="tab-name">
          <NavLink to={link}>{tabName}</NavLink>
        </div>
        {options.length > 0 && (
          <div className={`arrow ${isOpen ? "open" : ""}`}>&#x25B6;</div>
        )}
      </div>
      {isOpen && options.length > 0 && (
        <div className="sub-options">
          {options.map((option) => (
            <div key={option} className="sub-option">
              <NavLink to={`${sublink}`}>{option}</NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownTab;
