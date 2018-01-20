import React from "react";
import { bool, oneOf } from "prop-types";
import classnames from "classnames";

const TabBar = ({
  icons,
  iconsWithText,
  indicator,
  className,
  children,
  ...other
}) => (
  <nav
    className={classnames(
      "mdc-tab-bar",
      {
        "mdc-tab-bar--icon-tab-bar": icons,
        "mdc-tab-bar--icons-with-text": iconsWithText,
        [`mdc-tab-bar--indicator-${indicator}`]: indicator
      },
      className
    )}
    {...other}
  >
    {children}
    <span className="mdc-tab-bar__indicator" />
  </nav>
);

TabBar.propTypes = {
  icons: bool,
  iconsWithText: bool,
  indicator: oneOf(["primary", "accent"])
};

export default TabBar;
