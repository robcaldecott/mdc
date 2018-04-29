import React from "react";
import classnames from "classnames";

export const TextFieldBottomLine = ({ active }) => (
  <div
    className={classnames("mdc-line-ripple", {
      "mdc-line-ripple--active": active
    })}
  />
);
