import React from "react";

import "./loader.scss";

const Loader = (props: any) => {
  return (
    <div className="loader">
      <img
        src={require("../../assets/1200px-Sharingan_triple.png")}
        alt="loader"
      />
      <h4>{props.title || "Loading..."}</h4>
    </div>
  );
};

export default Loader;
