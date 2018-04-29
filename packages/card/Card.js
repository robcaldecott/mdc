import React from "react";
import classnames from "classnames";

export const Card = ({ className, outlined, ...other }) => (
  <div
    className={classnames(
      "mdc-card",
      { "mdc-card--outlined": outlined },
      className
    )}
    {...other}
  />
);
