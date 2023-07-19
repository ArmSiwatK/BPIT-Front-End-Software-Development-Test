import React, { useState } from "react";

const DropdownTab = ({ tabName, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="tab">
      <div className="tab-header" onClick={toggleDropdown}>
        <div className="tab-name">
          <a href={`${tabName}`}>{tabName}</a>
        </div>
        {options.length > 0 && (
          <div className={`arrow ${isOpen ? "open" : ""}`}>&#x25B6;</div>
        )}
      </div>
      {isOpen && options.length > 0 && (
        <div className="sub-options">
          {options.map((option) => (
            <div key={option} className="sub-option">
              <a href={`#${option}`}>{option}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownTab;
