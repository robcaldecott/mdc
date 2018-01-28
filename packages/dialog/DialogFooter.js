import React from "react";
import classnames from "classnames";

export const DialogFooter = ({ className, ...other }) => (
  <section className={classnames("mdc-dialog__footer", className)} {...other} />
);
