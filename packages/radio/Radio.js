import React from "react";
import classnames from "classnames";

export const Radio = ({ className, disabled, ...other }) => (
  <div
    className={classnames(
      "mdc-radio",
      { "mdc-radio--disabled": disabled },
      className
    )}
  >
    <input
      className="mdc-radio__native-control"
      type="radio"
      disabled={disabled}
      {...other}
    />
    <div className="mdc-radio__background">
      <div className="mdc-radio__outer-circle" />
      <div className="mdc-radio__inner-circle" />
    </div>
  </div>
);
