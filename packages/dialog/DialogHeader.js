import React from "react";
import classnames from "classnames";

const DialogHeader = ({ className, ...other }) => (
  <header className={classnames("mdc-dialog__header", className)} {...other} />
);

export default DialogHeader;
