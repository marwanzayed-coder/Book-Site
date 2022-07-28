import React from "react";
import "../assets/sass/pages/Login.css";

const Book = (props) => {
  let { lang } = props;
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" method="POST" action="/new_book">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">{lang ? "New Book" : "كتاب جديد"}</h3>
          <div className="form-group mt-3">
            <label>{lang ? "Book Name" : "اسم الكتاب"}</label>
            <input
              type="text"
              name="name"
              className="form-control mt-1"
              placeholder={lang ? "Enter Book Name" : "اسم الكتاب"}
            />
          </div>
          <div className="form-group mt-3">
            <label>{lang ? "The Name Of Author" : "اسم المؤلف"}</label>
            <input
              type="text"
              name="writer"
              className="form-control mt-1"
              placeholder={
                lang ? "Enter The Name Of Author" : "أدخل اسم المؤلف"
              }
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              {lang ? "New Book" : "كتاب جديد"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Book;
