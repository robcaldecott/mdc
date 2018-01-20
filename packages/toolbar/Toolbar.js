import React from "react";
import classnames from "classnames";

const Toolbar = ({ fixed, className, children, ...other }) => (
  <header
    className={classnames(
      "mdc-toolbar",
      { "mdc-toolbar--fixed": fixed },
      className
    )}
    {...other}
  >
    {children}
  </header>
);

export default Toolbar;
