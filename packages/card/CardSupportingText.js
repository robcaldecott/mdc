import React from "react";
import classnames from "classnames";

const CardSupportingText = ({ className, ...other }) => (
  <section
    className={classnames("mdc-card__supporting-text", className)}
    {...other}
  />
);

export default CardSupportingText;
