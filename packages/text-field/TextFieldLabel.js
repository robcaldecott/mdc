import React from "react";
import classnames from "classnames";

const TextFieldLabel = ({ floatAbove, shake, children, ...other }) => (
  <span
    className={classnames("mdc-text-field__label", {
      "mdc-text-field__label--float-above": floatAbove,
      "mdc-text-field__label--shake": shake
    })}
    {...other}
  >
    {children}
  </span>
);

export default TextFieldLabel;
