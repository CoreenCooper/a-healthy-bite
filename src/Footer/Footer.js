import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li>
          <i class="fab fa-github"></i>
          <a> GitHub</a>
        </li>
        <li>
          <i class="fas fa-envelope"></i>
          <a> For Hire</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
