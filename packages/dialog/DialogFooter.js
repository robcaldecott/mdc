import React from "react";
import classnames from "classnames";

const DialogFooter = ({ className, ...other }) => (
  <section className={classnames("mdc-dialog__footer", className)} {...other} />
);

export default DialogFooter;
