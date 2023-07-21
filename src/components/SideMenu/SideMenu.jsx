import React from "react";
import DropdownTab from "./DropdownTab";
import "./SideMenu.scss";
import sideMenuTabsData from "../../assets/SideMenuTabs.json";

const SideMenu = () => {
  const sideMenuTabs = sideMenuTabsData;
  const tabOptions = sideMenuTabs.map((tabData) => tabData.options.map((option) => option.name));
  const tabSublinks = sideMenuTabs.flatMap((tabData) => tabData.options.map((option) => option.link));

  return (
    <div className="side-menu">
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
  );
};

export default SideMenu;
