import React from "react";
import classnames from "classnames";

export const ListItemText = ({ className, ...other }) => (
  <span className={classnames("mdc-list-item__text", className)} {...other} />
);
