import React from "react";
import classnames from "classnames";

const SnackbarAction = ({ className, children, ...other }) => (
  <div className={classnames("mdc-snackbar__action-wrapper", className)}>
    <button type="button" className="mdc-snackbar__action-button" {...other}>
      {children}
    </button>
  </div>
);

export default SnackbarAction;
