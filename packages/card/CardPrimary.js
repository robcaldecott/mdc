import React from "react";
import classnames from "classnames";

const CardPrimary = ({ className, ...other }) => (
  <section className={classnames("mdc-card__primary", className)} {...other} />
);

export default CardPrimary;
