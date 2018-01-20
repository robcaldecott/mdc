import React from "react";
import classnames from "classnames";

const ToolbarTitle = ({ className, children, ...other }) => (
  <span className={classnames("mdc-toolbar__title", className)} {...other}>
    {children}
  </span>
);

export default ToolbarTitle;
