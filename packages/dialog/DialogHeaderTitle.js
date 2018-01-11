import React from "react";
import classnames from "classnames";

const DialogHeaderTitle = ({ className, children, ...other }) => (
  <h2 className={classnames("mdc-dialog__header__title", className)} {...other}>
    {children}
  </h2>
);

export default DialogHeaderTitle;
