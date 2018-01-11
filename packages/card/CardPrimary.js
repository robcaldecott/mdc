import React from "react";
import classnames from "classnames";

const CardPrimary = ({ className, children, ...other }) => (
  <section className={classnames("mdc-card__primary", className)} {...other}>
    {children}
  </section>
);

export default CardPrimary;
