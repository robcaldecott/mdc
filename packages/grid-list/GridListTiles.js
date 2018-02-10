import React from "react";
import classnames from "classnames";

export const GridListTiles = ({ className, ...other }) => (
  <ul className={classnames("mdc-grid-list__tiles", className)} {...other} />
);
