import React from "react";
import classnames from "classnames";

export const Tab = ({ active, iconAndText, className, children, ...other }) => (
  <a
    className={classnames("mdc-tab", {
      "mdc-tab--active": active,
      "mdc-tab--with-icon-and-text": iconAndText
    })}
    {...other}
  >
    {children}
    <span className="mdc-tab__indicator" />
  </a>
);
