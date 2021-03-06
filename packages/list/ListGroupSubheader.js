import React from "react";
import classnames from "classnames";

export const ListGroupSubheader = ({ className, children, ...other }) => (
  <h3 className={classnames("mdc-list-group__subheader", className)} {...other}>
    {children}
  </h3>
);
