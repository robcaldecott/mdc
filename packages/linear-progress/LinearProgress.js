import React from "react";
import classnames from "classnames";

const scale = scaleValue => {
  const value = `scaleX(${scaleValue})`;
  return {
    transform: value,
    WebkitTransform: value,
    MozTransform: value,
    OTransform: value,
    MSTransform: value
  };
};

export const LinearProgress = ({
  className,
  indeterminate,
  reversed,
  closed,
  progress,
  buffer,
  ...other
}) => (
  <div
    role="progressbar"
    className={classnames(
      "mdc-linear-progress",
      {
        "mdc-linear-progress--indeterminate": indeterminate,
        "mdc-linear-progress--reversed": reversed,
        "mdc-linear-progress--closed": closed
      },
      className
    )}
    {...other}
  >
    <div className="mdc-linear-progress__buffering-dots" />
    <div
      className="mdc-linear-progress__buffer"
      style={scale(indeterminate ? 1 : buffer || 1)}
    />
    <div
      className="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
      style={scale(indeterminate ? 1 : progress)}
    >
      <span className="mdc-linear-progress__bar-inner" />
    </div>
    <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span className="mdc-linear-progress__bar-inner" />
    </div>
  </div>
);
