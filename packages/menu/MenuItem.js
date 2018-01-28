import React from "react";
import classnames from "classnames";

export const MenuItem = ({ disabled, className, ...other }) => (
  <li
    className={classnames("mdc-list-item", className)}
    role="menuitem"
    {...(disabled
      ? { tabIndex: "-1", "aria-disabled": "true" }
      : { tabIndex: "1" })}
    {...other}
  />
);
