import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = (props) => {
  let { lang, setLang, logo } = props;
  let cookies = useCookies();
  let data =
    cookies[0].user_data === undefined ? (
      <div className="d-flex justify-content-center">
        <Link
          to="/login"
          className={
            lang
              ? "btn btn-outline-primary me-2"
              : "btn btn-outline-primary ms-2"
          }
        >
          {lang ? "Sign In" : "تسجيل الدخول"}
        </Link>
        <Link
          to="/signup"
          className={
            lang
              ? "btn btn-outline-success me-2"
              : "btn btn-outline-success ms-2"
          }
        >
          {lang ? "Sign Up" : "انشاء حساب"}
        </Link>
        <button className="btn btn-lang" onClick={() => setLang(!lang)}>
          {lang ? "Arabic" : "أنجليزية"}
        </button>
      </div>
    ) : (
      <div className="d-flex justify-content-center">
        <Link
          to={"/user/" + cookies[0].user_data._id}
          className={
            lang
              ? "btn btn-outline-primary me-2"
              : "btn btn-outline-primary ms-2"
          }
        >
          {lang ? "Profile" : "الملف الشخصي"}
        </Link>
        <Link
          to="/book"
          className={
            lang
              ? "btn btn-outline-success me-2"
              : "btn btn-outline-success ms-2"
          }
        >
          {lang ? "Add Book" : "أضف كتاب"}
        </Link>
        <button className="btn btn-lang" onClick={() => setLang(!lang)}>
          {lang ? "Arabic" : "أنجليزية"}
        </button>
      </div>
    );
  return (
    <nav className="navbar navbar-expand-lg" dir={lang ? "ltr" : "rtl"}>
      <div className="container">
        <Link className="navbar-brand" to="/" dir="ltr">
          {logo}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                {lang ? "Home" : "الرئيسيه"}
              </NavLink>
            </li>
          </ul>
        </div>
        {data}
      </div>
    </nav>
  );
};
export default Header;
