import React from "react";
import classnames from "classnames";

export const CardAction = ({ children, ...other }) =>
  React.Children.map(children, child =>
    React.cloneElement(child, {
      className: classnames("mdc-card__action", child.props.className)
    })
  );
