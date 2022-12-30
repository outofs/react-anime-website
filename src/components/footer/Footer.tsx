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
            <Link to="/react-anime-website">Sanime</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/react-anime-website">Home</Link>
            <Link to="/react-anime-website">Contact us</Link>
            <Link to="/react-anime-website">Term of services</Link>
            <Link to="/react-anime-website">About us</Link>
          </div>

          <div className="footer__content__menu">
            <Link to="/react-anime-website">Live</Link>
            <Link to="/react-anime-website">FAQ</Link>
            <Link to="/react-anime-website">Premium</Link>
            <Link to="/react-anime-website">Privacy policy</Link>
          </div>

          <div className="footer__content__menu">
            <Link to="/react-anime-website">You must watch</Link>
            <Link to="/react-anime-website">Recent release</Link>
            <Link to="/react-anime-website">Top Anime</Link>
            <Link to="/react-anime-website"> About us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
