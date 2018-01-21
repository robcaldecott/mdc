import React from "react";
import classnames from "classnames";

const ListGroup = ({ className, children, ...other }) => (
  <div className={classnames("mdc-list-group", className)} {...other}>
    {children}
  </div>
);

export default ListGroup;
