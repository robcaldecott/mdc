import React from "react";
import classnames from "classnames";

const CardTitle = ({ className, large, children, ...other }) => (
  <h1
    className={classnames(
      "mdc-card__title",
      { "mdc-card__title--large": large },
      className
    )}
    {...other}
  >
    {children}
  </h1>
);

export default CardTitle;
