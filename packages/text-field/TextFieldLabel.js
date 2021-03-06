import React from "react";
import classnames from "classnames";

export const TextFieldLabel = ({ floatAbove, shake, ...other }) => (
  <span
    className={classnames("mdc-text-field__label", {
      "mdc-text-field__label--float-above": floatAbove,
      "mdc-text-field__label--shake": shake
    })}
    {...other}
  />
);
