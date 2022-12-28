import React from "react";

import "./loader.scss";

const Loader = (props: any) => {
  return (
    <div className="loader">
      <img src={require("../../assets/sharingan.gif")} alt="loader" />
      <h4>{props.title || "Loading..."}</h4>
    </div>
  );
};

export default Loader;
