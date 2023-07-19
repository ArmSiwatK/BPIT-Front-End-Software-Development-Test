import React from "react";
import "./Footer.scss";

const copyrightText = "Copyright © HRD";
const acknowledgements = "Acknowledgements";
const miscellaneousLinks = [
  { label: "Privacy Policy", url: "/privacy-policy" },
  { label: "Terms of Service", url: "/terms-of-service" },
  { label: "Contact Us", url: "/contact" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">{copyrightText}</div>
      <div className="middle">{acknowledgements}</div>
      <div className="right">
        {miscellaneousLinks.map((link, index) => (
          <a key={index} href={link.url} className="link">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
