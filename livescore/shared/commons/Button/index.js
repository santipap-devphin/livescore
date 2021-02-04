import React from 'react';
import PropTypes from 'prop-types';
import {ButtonStyle} from "./style"

const Button = ({ className, onClick, type, size, block, disabled, children }) => {
  return (
    <ButtonStyle
      type={type === "submit" ? "submit" : type === "reset" ? "reset" : "button"} 
      className={`btn ${className ? className : "btn-primary" + '' + size === "large" ? "btn-lg" : size === "small" ? "btn-sm" : "" + '' + block === "block" ? "btn-block" : ""}`}
      onClick={onClick}
      disabled={disabled === true ? disabled : ""}
    >
      {children}
    </ButtonStyle>
  );
};


Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  block: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool
};
Button.defaultProps = {
  className: "btn-primary",
  type: "button",
  block: "",
  size: "",
  disabled: false
};

export default Button;
