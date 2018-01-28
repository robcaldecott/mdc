import React from "react";
import classnames from "classnames";

const IconToggle = ({ className, disabled, ...other }) => (
  <i
    className={classnames(
      "mdc-icon-toggle",
      "material-icons",
      { "mdc-icon-toggle--disabled": disabled },
      className
    )}
    {...other}
  />
);

export default IconToggle;
