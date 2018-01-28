import React from "react";
import { bool, string } from "prop-types";
import classnames from "classnames";

const Button = ({
  className,
  raised,
  compact,
  dense,
  unelevated,
  stroked,
  icon,
  children,
  ...other
}) => (
  <button
    className={classnames(
      "mdc-button",
      {
        "mdc-button--raised": raised,
        "mdc-button--compact": compact,
        "mdc-button--dense": dense,
        "mdc-button--unelevated": unelevated,
        "mdc-button--stroked": stroked
      },
      className
    )}
    {...other}
  >
    {icon && <i className="material-icons mdc-button__icon">{icon}</i>}
    {children}
  </button>
);

Button.propTypes = {
  raised: bool,
  compact: bool,
  dense: bool,
  unelevated: bool,
  stroked: bool,
  icon: string
};

export default Button;
