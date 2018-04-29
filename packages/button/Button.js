import React from "react";
import { bool, string } from "prop-types";
import classnames from "classnames";

export const Button = ({
  className,
  raised,
  dense,
  unelevated,
  outlined,
  icon,
  children,
  ...other
}) => (
  <button
    className={classnames(
      "mdc-button",
      {
        "mdc-button--raised": raised,
        "mdc-button--dense": dense,
        "mdc-button--unelevated": unelevated,
        "mdc-button--outlined": outlined
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
  dense: bool,
  unelevated: bool,
  outlined: bool,
  icon: string
};
