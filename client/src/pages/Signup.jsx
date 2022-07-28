import React from "react";
import "../assets/sass/pages/Login.css";

const signup = (props) => {
  let { lang } = props;
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" action="/signup-back" method="POST">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">{lang ? "Sign Up" : "اشتراك"}</h3>
          <div className="form-group mt-3">
            <label>{lang ? "Username" : "اسم المستخدم"}</label>
            <input
              type="text"
              className="form-control mt-1"
              name="username"
              placeholder={lang ? "Enter Username" : "أدخل اسم المستخدم"}
            />
          </div>
          <div className="form-group mt-3">
            <label>{lang ? "Name" : "اسم"}</label>
            <input
              type="text"
              className="form-control mt-1"
              name="name"
              placeholder={lang ? "Enter Name" : "أدخل اسم"}
            />
          </div>
          <div className="form-group mt-3">
            <label>{lang ? "Email address" : "عنوان البريد الالكترونى"}</label>
            <input
              type="email"
              className="form-control mt-1"
              name="email"
              placeholder={lang ? "Enter Email" : "أدخل البريد الإلكتروني"}
            />
          </div>
          <div className="form-group mt-3">
            <label>{lang ? "Password" : "كلمة المرور"}</label>
            <input
              type="password"
              className="form-control mt-1"
              name="password"
              placeholder={lang ? "Enter Password" : "أدخل كلمة المرور"}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              {lang ? "Sign Up" : "اشتراك"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default signup;
