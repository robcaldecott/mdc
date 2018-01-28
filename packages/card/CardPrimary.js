import React from "react";
import classnames from "classnames";

export const CardPrimary = ({ className, ...other }) => (
  <section className={classnames("mdc-card__primary", className)} {...other} />
);
