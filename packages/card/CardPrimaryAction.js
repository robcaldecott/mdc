import React from "react";
import classnames from "classnames";

export const CardPrimaryAction = ({ className, ...other }) => (
  <div
    className={classnames("mdc-card__primary-action", className)}
    {...other}
  />
);
