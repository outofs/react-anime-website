import React from "react";
import "./button.scss";

const OutlineButton = (props: any) => {
  return (
    <button
      className={`btn btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : () => {}}
    >
      {props.children}
    </button>
  );
};

export default OutlineButton;
