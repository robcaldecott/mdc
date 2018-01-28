import React from "react";
import classnames from "classnames";

export const IconToggle = ({ className, disabled, ...other }) => (
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
