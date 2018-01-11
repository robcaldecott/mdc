import React from "react";
import classnames from "classnames";

const DialogFooter = ({ className, children, ...other }) => (
  <section className={classnames("mdc-dialog__footer", className)} {...other}>
    {children}
  </section>
);

export default DialogFooter;
