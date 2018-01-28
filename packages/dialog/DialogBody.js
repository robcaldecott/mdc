import React from "react";
import classnames from "classnames";

export const DialogBody = ({ className, ...other }) => (
  <footer className={classnames("mdc-dialog__body", className)} {...other} />
);
