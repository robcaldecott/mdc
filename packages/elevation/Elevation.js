import React from "react";
import classnames from "classnames";

const Elevation = ({ z, transition, className, ...other }) => (
  <div
    className={classnames(
      { [`mdc-elevation--z${z}`]: z, "mdc-elevation-transition": transition },
      className
    )}
    {...other}
  />
);

export default Elevation;
