import React from "react";
import classnames from "classnames";

const ListItemText = ({ className, children, ...other }) => (
  <span className={classnames("mdc-list-item__text", className)} {...other}>
    {children}
  </span>
);

export default ListItemText;
