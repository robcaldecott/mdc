import React from "react";
import classnames from "classnames";

export const GridTilePrimary = ({ className, ...other }) => (
  <div className={classnames("mdc-grid-tile__primary", className)} {...other} />
);
