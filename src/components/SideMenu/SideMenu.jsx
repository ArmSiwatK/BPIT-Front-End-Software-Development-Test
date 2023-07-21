import React, { useState, useEffect } from "react";
import DropdownTab from "./DropdownTab";
import sideMenuTabsData from "../../assets/SideMenuTabs.json";
import "./SideMenu.scss";

const SideMenu = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const sideMenuTabs = sideMenuTabsData;
  const tabOptions = sideMenuTabs.map((tabData) => tabData.options.map((option) => option.name));
  const tabSublinks = sideMenuTabs.flatMap((tabData) => tabData.options.map((option) => option.link));

  const handleToggleShrink = () => {
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (isHidden && !isMobileView) {
        handleToggleShrink();
      }
    };

    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [isHidden, isMobileView]);

  return (
    <div className={`side-menu ${isHidden ? "shrink" : ""}`}>
      <div className={`menu-content ${isHidden ? "hidden" : ""}`}>
        <div className="top-section">Main Menu</div>
        <div className="tabs">
          {sideMenuTabs.map((tabData, index) => (
            <DropdownTab
              key={tabData.name}
              tabName={tabData.name}
              options={tabOptions[index]}
              link={tabData.link}
              sublink={tabSublinks[index]}
            />
          ))}
        </div>
      </div>
      {isMobileView && (
        <div className="hide-button" onClick={handleToggleShrink}>
          {isHidden ? ">>>" : "<<<"}
        </div>
      )}
    </div>
  );
};

export default SideMenu;
