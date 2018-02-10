import React from "react";
import classnames from "classnames";

export const GridTile = ({ className, ...other }) => (
  <li className={classnames("mdc-grid-tile", className)} {...other} />
);
