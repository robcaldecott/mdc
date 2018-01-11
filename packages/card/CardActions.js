import React from "react";
import classnames from "classnames";

const CardActions = ({ className, children, ...other }) => (
  <section className={classnames("mdc-card__actions", className)} {...other}>
    {children}
  </section>
);

export default CardActions;
