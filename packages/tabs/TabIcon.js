import React from "react";
import classnames from "classnames";

export const TabIcon = ({ className, children, ...other }) => (
  <i
    className={classnames("material-icons", "mdc-tab__icon", className)}
    {...other}
  >
    {children}
  </i>
);
