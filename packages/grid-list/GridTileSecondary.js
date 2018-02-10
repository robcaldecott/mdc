import React from "react";
import classnames from "classnames";

export const GridTileSecondary = ({ className, ...other }) => (
  <span
    className={classnames("mdc-grid-tile__secondary", className)}
    {...other}
  />
);
