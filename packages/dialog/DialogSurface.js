import React from "react";
import classnames from "classnames";

const DialogSurface = ({ className, surfaceRef, ...other }) => (
  <div
    className={classnames("mdc-dialog__surface", className)}
    {...other}
    onClick={e => {
      e.stopPropagation();
    }}
    ref={surface => {
      surfaceRef && surfaceRef(surface);
    }}
  />
);

export default DialogSurface;
