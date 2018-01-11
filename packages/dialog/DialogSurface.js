import React from "react";
import classnames from "classnames";

const DialogSurface = ({ className, surfaceRef, children, ...other }) => (
  <div
    className={classnames("mdc-dialog__surface", className)}
    {...other}
    onClick={e => {
      e.stopPropagation();
    }}
    ref={surface => {
      surfaceRef && surfaceRef(surface);
    }}
  >
    {children}
  </div>
);

export default DialogSurface;
