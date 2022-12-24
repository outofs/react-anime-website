import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import RoutesComponent from "./config/RoutesComponent";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail";

function App() {
  return (
    <div>
      {/* <Header props={props} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/:category" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
