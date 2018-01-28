import React from "react";
import classnames from "classnames";

const DialogBody = ({ className, ...other }) => (
  <footer className={classnames("mdc-dialog__body", className)} {...other} />
);

export default DialogBody;
