import React from "react";
import "../assets/sass/pages/Login.css";

const Login = (props) => {
  let { lang } = props;
  return (
    <div className="Auth-form-container">
      <form
        className="Auth-form"
        method="POST"
        action="http://localhost:5000/login"
      >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">{lang ? "Sign In" : "تسجيل دخول"}</h3>
          <div className="form-group mt-3">
            <label>{lang ? "Email address" : "عنوان البريد الالكترونى"}</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder={lang ? "Enter Email" : "أدخل البريد الإلكتروني"}
            />
          </div>
          <div className="form-group mt-3">
            <label>{lang ? "Password" : "كلمة المرور"}</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder={lang ? "Enter Password" : "أدخل كلمة المرور"}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              {lang ? "Login" : "تسجيل دخول"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
