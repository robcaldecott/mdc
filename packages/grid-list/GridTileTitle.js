import React from "react";
import classnames from "classnames";

export const GridTileTitle = ({ className, ...other }) => (
  <span className={classnames("mdc-grid-tile__title", className)} {...other} />
);
