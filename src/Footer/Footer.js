import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li>
          <a
            href="https://github.com/CoreenCooper"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a
            href="mailto:coreencooper@pursuit.org"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope"></i> For Hire
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
