import React from "react";
import classnames from "classnames";

const DialogBody = ({ className, children, ...other }) => (
  <footer className={classnames("mdc-dialog__body", className)} {...other}>
    {children}
  </footer>
);

export default DialogBody;
