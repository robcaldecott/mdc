import React from "react";
import classnames from "classnames";

export const ListGroup = ({ className, ...other }) => (
  <div className={classnames("mdc-list-group", className)} {...other} />
);
