import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Book from "pages/Book";
import User from "pages/User";

const App = () => {
  /*
    lang
    True: English
    False: Arabic
  */
  let [lang, setLang] = useState(true);
  window.localStorage.setItem("lang", lang);
  let name = lang ? "Book Site" : "موقع كتاب";

  return (
    <div>
      <BrowserRouter>
        <div dir={lang ? "ltr" : "rtl"}>
          <Routes>
            <Route
              path="/"
              exact
              element={<Home lang={lang} setLang={setLang} logo={name} />}
            />
            <Route
              path="/book"
              element={<Book lang={lang} setLang={setLang} logo={name} />}
            />
            <Route
              path="/login"
              element={<Login lang={lang} setLang={setLang} logo={name} />}
            />
            <Route
              path="/signup"
              element={<Signup lang={lang} setLang={setLang} logo={name} />}
            />
            <Route path="/user/:id" element={<User lang={lang} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
