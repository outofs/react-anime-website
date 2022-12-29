import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <div>
      {/* <Header props={props} /> */}
      <Header />
      <Routes>
        <Route path="/react-anime-website/" element={<Home />} />
        <Route
          path="/react-anime-website/:category/search/:keyword"
          element={<Catalog />}
        />
        <Route path="/react-anime-website/:category/:id" element={<Detail />} />
        <Route path="/react-anime-website/:category" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
