import React from "react";
import classnames from "classnames";

const ListItemSecondaryText = ({ className, ...other }) => (
  <span
    className={classnames("mdc-list-item__secondary-text", className)}
    {...other}
  />
);

export default ListItemSecondaryText;
