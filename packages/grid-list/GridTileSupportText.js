import React from "react";
import classnames from "classnames";

export const GridTileSupportText = ({ className, ...other }) => (
  <span
    className={classnames("mdc-grid-tile__support-text", className)}
    {...other}
  />
);
