import React from "react";
import classnames from "classnames";

const Elevation = ({ z, transition, className, children, ...other }) => (
  <div
    className={classnames(
      { [`mdc-elevation--z${z}`]: z, "mdc-elevation-transition": transition },
      className
    )}
    {...other}
  >
    {children}
  </div>
);

export default Elevation;
