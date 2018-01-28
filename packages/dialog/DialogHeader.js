import React from "react";
import classnames from "classnames";

export const DialogHeader = ({ className, ...other }) => (
  <header className={classnames("mdc-dialog__header", className)} {...other} />
);
