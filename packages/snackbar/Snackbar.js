import React from "react";
import classnames from "classnames";

export const Snackbar = ({
  className,
  active,
  multiline,
  actionOnBottom,
  alignStart,
  children,
  action,
  ...other
}) => (
  <div
    className={classnames(
      "mdc-snackbar",
      {
        "mdc-snackbar--active": active,
        "mdc-snackbar--multiline": multiline,
        "mdc-snackbar--action-on-bottom": actionOnBottom,
        "mdc-snackbar--align-start": alignStart
      },
      className
    )}
    aria-live="assertive"
    aria-atomic="true"
    aria-hidden="true"
    {...other}
  >
    <div className="mdc-snackbar__text">{children}</div>
    {action}
  </div>
);
