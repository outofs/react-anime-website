import React from "react";
import "./footer.scss";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img
              src={require("../../assets/1200px-Sharingan_triple.png")}
              alt=""
            />
            <Link to="/">Sanime</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>

          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </div>

          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top Anime</Link>
            <Link to="/"> About us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
