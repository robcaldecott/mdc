import React from "react";
import classnames from "classnames";

const FormField = ({ className, alignEnd, ...other }) => (
  <div
    className={classnames(
      "mdc-form-field",
      { "mdc-form-field--align-end": alignEnd },
      className
    )}
    {...other}
  />
);

export default FormField;
