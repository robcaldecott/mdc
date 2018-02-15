import React from "react";
import classnames from "classnames";

export const DrawerContent = ({ className, ...other }) => (
  <div className={classnames("mdc-drawer__content", className)} {...other} />
);
