import React from "react";
import { string, bool } from "prop-types";
import classnames from "classnames";

export const ToolbarIcon = ({ type, menu, className, children, ...other }) =>
  React.createElement(
    type,
    {
      className: classnames(
        "material-icons",
        menu ? "mdc-toolbar__menu-icon" : "mdc-toolbar__icon",
        className
      ),
      ...other
    },
    children
  );

ToolbarIcon.propTypes = {
  type: string,
  menu: bool
};

ToolbarIcon.defaultProps = {
  type: "span"
};
