import React from "react";
import classnames from "classnames";

const Card = ({ className, children, ...other }) => (
  <div className={classnames("mdc-card", className)} {...other}>
    {children}
  </div>
);

export default Card;
