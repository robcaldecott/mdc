import React from "react";
import classnames from "classnames";

export const List = ({
  element = "ul",
  nonInteractive,
  dense,
  twoLine,
  className,
  children,
  ...other
}) =>
  React.createElement(
    element,
    {
      className: classnames(
        "mdc-list",
        {
          "mdc-list--non-interactive": nonInteractive,
          "mdc-list--dense": dense,
          "mdc-list--two-line": twoLine
        },
        className
      ),
      ...other
    },
    children
  );
