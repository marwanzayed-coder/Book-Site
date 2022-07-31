import React from "react";
import { Link } from "react-router-dom";
import "assets/sass/pages/Home/home.css";
import Logo from "assets/images/logo.png";
import Header from "components/Header";
import Footer from "components/Footer";

const Home = (props) => {
  let { lang, logo } = props;
  return (
    <div className="home">
      <Header {...props} />
      <div className="container">
        <div className="px-4 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src={Logo}
            alt=""
            width="128"
            height="128"
          />
          <h1 className="display-5 fw-bold">{logo}</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              {lang
                ? logo +
                  " is a site where you display the books you've read for people to visit via your account link and it's completely free."
                : logo +
                  " هو موقع تعرض فيه الكتب التي قرأتها حتى يزورها الأشخاص عبر رابط حسابك وهو مجاني تمامًا."}
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/signup" className="btn btn-primary btn-lg px-4 gap-3">
                {lang ? "Start it's free" : "أبدا انه مجانى"}
              </Link>
            </div>
          </div>
        </div>
        <div className="px-4 my-5 text-center mt-5">
          <div className="main-header">
            <h2 className="">{lang ? "Feature" : "المميزات"}</h2>
          </div>
          <div className="row gap-5">
            <div className="col-sm-6 col-md-3 item">
              <i className="bi bi-1-square fs-2"></i>{" "}
              <h3>{lang ? "Easy" : "سهل"}</h3>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <i className="bi bi-2-square fs-2"></i>
              <h3>{lang ? "Security" : "محمى"}</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props}></Footer>
    </div>
  );
};

export default Home;
