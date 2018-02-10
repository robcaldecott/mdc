import React from "react";
import classnames from "classnames";

export const GridTileIcon = ({ className, ...other }) => (
  <i
    className={classnames("mdc-grid-tile__icon", "material-icons", className)}
    {...other}
  />
);
