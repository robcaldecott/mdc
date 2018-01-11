import React from "react";
import classnames from "classnames";

const CardSubtitle = ({ className, children, ...other }) => (
  <h2 className={classnames("mdc-card__subtitle", className)} {...other}>
    {children}
  </h2>
);

export default CardSubtitle;
