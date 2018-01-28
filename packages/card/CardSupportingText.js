import React from "react";
import classnames from "classnames";

export const CardSupportingText = ({ className, ...other }) => (
  <section
    className={classnames("mdc-card__supporting-text", className)}
    {...other}
  />
);
