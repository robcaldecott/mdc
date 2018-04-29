import React from "react";
import classnames from "classnames";

export const Checkbox = ({ className, disabled, ...other }) => (
  <div
    className={classnames(
      "mdc-checkbox",
      { "mdc-checkbox--disabled": disabled },
      className
    )}
  >
    <input
      type="checkbox"
      className="mdc-checkbox__native-control"
      disabled={disabled}
      {...other}
    />
    <div className="mdc-checkbox__background">
      <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path
          className="mdc-checkbox__checkmark-path"
          fill="none"
          stroke="white"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
      <div className="mdc-checkbox__mixedmark" />
    </div>
  </div>
);
