import React from "react";
import classnames from "classnames";

export const PermanentDrawer = ({ className, ...other }) => (
  <nav
    className={classnames(
      "mdc-drawer",
      "mdc-drawer--permanent",
      "mdc-typography",
      className
    )}
    {...other}
  />
);
