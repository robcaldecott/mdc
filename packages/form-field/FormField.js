import React from "react";
import classnames from "classnames";

const FormField = ({ className, alignEnd, children, ...other }) => (
  <div
    className={classnames(
      "mdc-form-field",
      { "mdc-form-field--align-end": alignEnd },
      className
    )}
    {...other}
  >
    {children}
  </div>
);

export default FormField;
