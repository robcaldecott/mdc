import React from "react";
import classnames from "classnames";

const ListGroup = ({ className, ...other }) => (
  <div className={classnames("mdc-list-group", className)} {...other} />
);

export default ListGroup;
