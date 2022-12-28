import React, { useRef, useState, useEffect } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import OutlineButton from "../button/OutlineButton";

import "../../scss/_variables.scss";
import "../../scss/_mixin.scss";

const headerNav = [
  { display: "Home", path: "/" },
  { display: "Catalog", path: "/catalog" },
];

const Header = () => {
  const date = new Date();
  const currentHour = date.getHours();

  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  const [darkMode, setDarkMode] = useState(false);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    if (currentHour >= 18 || currentHour < 6) {
      setDarkMode(true);
    } else setDarkMode(false);
  }, []);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current?.classList.add("shrink");
      } else {
        headerRef.current?.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  useEffect(() => {
    if (!darkMode) {
      document.documentElement.style.setProperty("--bg--color", "white");
      document.documentElement.style.setProperty(
        "--text--color",
        "rgb(0, 0, 0)"
      );
      document.documentElement.style.setProperty(
        "--box--shadow",
        "rgba(166, 166, 183, 0.2) 0px 7px 29px 0px"
      );
      document.documentElement.style.setProperty(
        "--overlay--color",
        "255, 255,255"
      );
      document.documentElement.style.setProperty(
        "--white--var",
        "rgb(0, 0, 0)"
      );
      document.documentElement.style.setProperty(
        "--white--var--gradient",
        "0, 0, 0"
      );
      document.documentElement.style.setProperty(
        "--black--var",
        "rgb(255, 255, 255)"
      );
      document.documentElement.style.setProperty(
        "--black--var--gradient",
        "255, 255, 255"
      );
    } else {
      document.documentElement.style.setProperty("--bg--color", "#000000");
      document.documentElement.style.setProperty(
        "--text--color",
        "rgb(255, 255, 255)"
      );
      document.documentElement.style.setProperty(
        "--box--shadow",
        "100, 100, 111, 0.2 0px 7px 29px 0px"
      );
      document.documentElement.style.setProperty("--overlay--color", "0, 0, 0");
      document.documentElement.style.setProperty(
        "--white--var",
        "rgb(255, 255, 255)"
      );
      document.documentElement.style.setProperty(
        "--white--var--gradient",
        "255, 255, 255"
      );
      document.documentElement.style.setProperty(
        "--black--var",
        "rgb(0, 0, 0)"
      );
      document.documentElement.style.setProperty(
        "--black--var--gradient",
        "0, 0, 0"
      );
    }
  }, [darkMode]);

  return (
    <header ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img
            src={require("../../assets/1200px-Sharingan_triple.png")}
            alt=""
          />
          <Link to="/">Sanime</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
          <li>
            <OutlineButton
              className="small"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {darkMode ? "Light " : "Dark "}Mode
            </OutlineButton>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
