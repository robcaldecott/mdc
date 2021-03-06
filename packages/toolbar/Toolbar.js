import React from "react";
import classnames from "classnames";

export const Toolbar = ({ fixed, className, ...other }) => (
  <header
    className={classnames(
      "mdc-toolbar",
      { "mdc-toolbar--fixed": fixed },
      className
    )}
    {...other}
  />
);
