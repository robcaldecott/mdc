import React from "react";
import classnames from "classnames";

const Tab = ({ active, iconAndText, className, children, ...other }) => (
  <a
    className={classnames("mdc-tab", {
      "mdc-tab--active": active,
      "mdc-tab--with-icon-and-text": iconAndText
    })}
    {...other}
  >
    {children}
  </a>
);

export default Tab;
