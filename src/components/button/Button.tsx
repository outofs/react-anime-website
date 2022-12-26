import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = (props: any) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : () => {}}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
};

export default Button;
