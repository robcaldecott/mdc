import React from "react";
import classnames from "classnames";

export const DrawerContainer = ({ className, ...other }) => (
  <nav className={classnames("mdc-drawer__drawer", className)} {...other} />
);
