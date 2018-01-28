import React from "react";
import classnames from "classnames";

export const TextFieldIcon = ({ className, children, ...other }) => (
  <i
    className={classnames("material-icons", "mdc-text-field__icon", className)}
    {...other}
  >
    {children}
  </i>
);
