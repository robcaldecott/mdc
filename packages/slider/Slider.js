import React from "react";
import classnames from "classnames";

export const Slider = ({ className, disabled, ...other }) => (
  <div
    className={classnames(
      "mdc-slider",
      { "mdc-slider--disabled": disabled },
      className
    )}
  >
    <input className="mdc-range" type="range" disabled={disabled} {...other} />
  </div>
);
