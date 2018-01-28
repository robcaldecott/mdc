import React from "react";
import classnames from "classnames";

export const TabIconText = ({ className, children, ...other }) => (
  <span className={classnames("mdc-tab__icon-text", className)} {...other}>
    {children}
  </span>
);
