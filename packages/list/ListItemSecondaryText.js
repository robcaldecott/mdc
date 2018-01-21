import React from "react";
import classnames from "classnames";

const ListItemSecondaryText = ({ className, children, ...other }) => (
  <span
    className={classnames("mdc-list-item__secondary-text", className)}
    {...other}
  >
    {children}
  </span>
);

export default ListItemSecondaryText;
