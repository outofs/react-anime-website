import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import OutlineButton from "../button/OutlineButton";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__item">
        <div className="hero__item__content container">
          <div className="hero__item__content__info">
            <h2 className="title">So... It's my Anime Website</h2>
            <div className="ovrview">
              <h3>
                <p>
                  “I actually don’t think something like perfection exists. That
                  is I think why we are born able to absorb things… and by
                  comparing ourselves with something else we can finally head in
                  a good direction.”<br></br>
                  <br />
                </p>
                <p></p>
                <p> – Itachi Uchiha (Naruto)</p>
              </h3>
            </div>
            <div className="btns">
              <Link to="/react-anime-website/movie">
                <Button>Let's start!</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
