import React from "react";
import classnames from "classnames";

export const TextFieldHelperText = ({ persistent, validation, children }) => (
  <p
    className={classnames("mdc-text-field-helper-text", {
      "mdc-text-field-helper-text--persistent": persistent,
      "mdc-text-field-helper-text--validation-msg": validation
    })}
  >
    {children}
  </p>
);
