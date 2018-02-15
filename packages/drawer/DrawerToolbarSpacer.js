import React from "react";
import classnames from "classnames";

export const DrawerToolbarSpacer = ({ className, ...other }) => (
  <div
    className={classnames("mdc-drawer__toolbar-spacer", className)}
    {...other}
  />
);
