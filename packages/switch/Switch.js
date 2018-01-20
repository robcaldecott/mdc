import React from "react";
import classnames from "classnames";

const Switch = ({ className, ...other }) => (
  <div className={classnames("mdc-switch", className)}>
    <input type="checkbox" className="mdc-switch__native-control" {...other} />
    <div className="mdc-switch__background">
      <div className="mdc-switch__knob" />
    </div>
  </div>
);

export default Switch;
