import React from "react";
import classnames from "classnames";

const DialogHeader = ({ className, children, ...other }) => (
  <header className={classnames("mdc-dialog__header", className)} {...other}>
    {children}
  </header>
);

export default DialogHeader;
