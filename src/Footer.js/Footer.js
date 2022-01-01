import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li>Email Me</li>
        <li>GitHub</li>
        <li>Portfolio</li>
      </ul>
    </footer>
  );
};

export default Footer;
