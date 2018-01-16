import React from "react";
import classnames from "classnames";

const TextFieldBottomLine = ({ active }) => (
  <div
    className={classnames("mdc-text-field__bottom-line", {
      "mdc-text-field__bottom-line--active": active
    })}
  />
);

export default TextFieldBottomLine;
