import React from "react";
import classnames from "classnames";

const IconToggle = ({ className, disabled, children, ...other }) => (
  <i
    className={classnames(
      "mdc-icon-toggle",
      "material-icons",
      { "mdc-icon-toggle--disabled": disabled },
      className
    )}
    {...other}
  >
    {children}
  </i>
);

export default IconToggle;
