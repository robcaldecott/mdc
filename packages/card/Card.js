import React from "react";
import classnames from "classnames";

export const Card = ({ className, ...other }) => (
  <div className={classnames("mdc-card", className)} {...other} />
);
