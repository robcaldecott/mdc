import React from "react";
import classnames from "classnames";

export const CardActions = ({ className, ...other }) => (
  <section className={classnames("mdc-card__actions", className)} {...other} />
);
