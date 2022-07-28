import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Book from "pages/Book";

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
    <BrowserRouter>
      <div dir={lang ? "ltr" : "rtl"}>
        <Header lang={lang} setLang={setLang} logo={name} />
        <Routes>
          <Route path="/" excite element={<Home lang={lang} logo={name} />} />
          <Route path="/book" element={<Book lang={lang} logo={name} />} />
          <Route path="/login" element={<Login lang={lang} logo={name} />} />
          <Route path="/signup" element={<Signup lang={lang} logo={name} />} />
        </Routes>
        <Footer lang={lang} logo={name} />
      </div>
    </BrowserRouter>
  );
};
export default App;
