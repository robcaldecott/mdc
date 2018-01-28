import React from "react";
import classnames from "classnames";

const ToolbarRow = ({ className, ...other }) => (
  <div className={classnames("mdc-toolbar__row", className)} {...other} />
);

export default ToolbarRow;
