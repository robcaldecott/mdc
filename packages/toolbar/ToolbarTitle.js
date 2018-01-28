import React from "react";
import classnames from "classnames";

export const ToolbarTitle = ({ className, ...other }) => (
  <span className={classnames("mdc-toolbar__title", className)} {...other} />
);
