import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  let { lang, logo } = props;
  const LinkStyle = {
    textDecoration: "none",
  };
  return (
    <footer>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">
            © 2022{" "}
            <a href="https://marwan.gq/" style={LinkStyle}>
              {lang ? "Marwan Zayed" : "مروان زايد"}
            </a>
          </p>

          <Link
            to="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            {logo}
          </Link>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                {lang ? "Home" : "الرئيسيه"}
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/about" className="nav-link px-2 text-muted">
                {lang ? "About" : "عنا"}
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link to="/api" className="nav-link px-2 text-muted">
                API
              </Link>
            </li> */}
          </ul>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
