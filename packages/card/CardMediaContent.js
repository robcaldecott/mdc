import React from "react";
import classnames from "classnames";

export const CardMediaContent = ({ className, ...other }) => (
  <div
    className={classnames("mdc-card__media-content", className)}
    {...other}
  />
);
