import React from "react";
import Button from "../button/Button";
import OutlineButton from "../button/OutlineButton";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__item">
        <div className="hero__item__content container">
          <div className="hero__item__content__info">
            <h2 className="title">Welcome to my Anime Website!</h2>
            <div className="ovrview">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              sequi, voluptates obcaecati incidunt cupiditate vero rerum autem
              eveniet voluptas architecto delectus illo inventore! Magni
              molestiae obcaecati nesciunt, tempora deserunt provident!
            </div>
            <div className="btns">
              <Button>Get Started!</Button>
              <OutlineButton onClick={() => console.log("Go!")}>
                Go!
              </OutlineButton>
            </div>
            {/* <div className="hero__item__content"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
