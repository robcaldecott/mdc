import React from "react";
import classnames from "classnames";

export const ListItemMeta = ({ children }) =>
  React.Children.map(children, child =>
    React.cloneElement(child, {
      className: classnames("mdc-list-item__meta", child.props.className)
    })
  );
