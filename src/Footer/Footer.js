import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li>
          <i className="fab fa-github"></i>
          <a href="https://github.com/CoreenCooper"> GitHub</a>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="mailto:coreencooper@pursuit.org" target="_blank" rel="noreferrer"> For Hire</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
