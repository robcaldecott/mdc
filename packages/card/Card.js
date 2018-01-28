import React from "react";
import classnames from "classnames";

const Card = ({ className, ...other }) => (
  <div className={classnames("mdc-card", className)} {...other} />
);

export default Card;
