import React from "react";
import classnames from "classnames";

const TextFieldIcon = ({ className, children, ...other }) => (
  <i
    className={classnames("material-icons", "mdc-text-field__icon", className)}
    {...other}
  >
    {children}
  </i>
);

export default TextFieldIcon;
