import React from "react";
import DropdownTab from "./DropdownTab";
import "./SideMenu.scss";

const SideMenu: React.FC = () => {
  const sideMenuTabs: { name: string; options: string[] }[] = [
    { name: "Career Path", options: [] },
    {
      name: "Competency",
      options: ["Competency Report", "Competency List"],
    },
    {
      name: "IDP",
      options: ["IDP ของฉัน", "การประเมิน IDP"],
    },
    {
      name: "การฝึกอบรม",
      options: ["E-Learning ของฉัน", "ซื้อ E-Learning", "ประวัติการฝึกอบรม"],
    },
    { name: "Organization Chart", options: [] },
  ];

  return (
    <div className="side-menu">
      <div className="top-section">Main Menu</div>
      <div className="tabs">
        {sideMenuTabs.map((tabData) => (
          <DropdownTab
            key={tabData.name}
            tabName={tabData.name}
            options={tabData.options}
          />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
