import React from "react";
import { bool, oneOf } from "prop-types";
import classnames from "classnames";

const TabBar = ({ icons, iconsWithText, className, ...other }) => (
  <nav
    className={classnames(
      "mdc-tab-bar",
      {
        "mdc-tab-bar--icon-tab-bar": icons,
        "mdc-tab-bar--icons-with-text": iconsWithText
      },
      className
    )}
    {...other}
  />
);

TabBar.propTypes = {
  icons: bool,
  iconsWithText: bool
};

export default TabBar;
