import React from "react";
import { string, bool } from "prop-types";
import classnames from "classnames";

export const ListItem = ({
  element,
  selected,
  activated,
  className,
  children,
  ...other
}) =>
  React.createElement(
    element,
    {
      className: classnames(
        "mdc-list-item",
        {
          "mdc-list-item--selected": selected,
          "mdc-list-item--activated": activated
        },
        className
      ),
      ...other
    },
    children
  );

ListItem.propTypes = {
  element: string,
  selected: bool,
  activated: bool
};

ListItem.defaultProps = {
  element: "li"
};
