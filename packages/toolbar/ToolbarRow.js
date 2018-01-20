import React from "react";
import classnames from "classnames";

const ToolbarRow = ({ className, children, ...other }) => (
  <div className={classnames("mdc-toolbar__row", className)} {...other}>
    {children}
  </div>
);

export default ToolbarRow;
