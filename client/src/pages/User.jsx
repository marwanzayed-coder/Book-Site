import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/user.css";

const User = () => {
  let [books, setBooks] = useState([]);
  let [name, setName] = useState("");
  let footer = "Made With <3 By Book Site";

  useEffect(() => {
    const baseurl = `/api/${window.location.pathname.slice(6)}`;
    axios.get(baseurl).then((response) => {
      setBooks(response.data.books);
      setName(response.data.name);
    });
  }, []);

  return (
    <div>
      <header className="header">
        <div className="container">
          <a href="/" className="logo">
            {name}
          </a>
          <ul className="nav">
            <li>
              <a href="#book">Books</a>
            </li>
          </ul>
        </div>
      </header>

      <div className="book" id="book">
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="list">
            {books.map((e) => (
              <div className="box" key={e._id}>
                <div className="top" dir="auto">
                  {e.name}
                </div>
                <div className="bottom" dir="auto">
                  {e.writer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">{footer}</footer>
    </div>
  );
};

export default User;
