import React from "react";
import { string, bool } from "prop-types";
import classnames from "classnames";

const ListDivider = ({
  element,
  padded,
  inset,
  className,
  children,
  ...other
}) =>
  React.createElement(element, {
    className: classnames(
      "mdc-list-divider",
      {
        "mdc-list-divider--padded": padded,
        "mdc-list-divider--inset": inset
      },
      className
    ),
    role: "separator",
    ...other
  });

ListDivider.propTypes = {
  element: string,
  padded: bool,
  inset: bool
};

ListDivider.defaultProps = {
  element: "li"
};

export default ListDivider;
