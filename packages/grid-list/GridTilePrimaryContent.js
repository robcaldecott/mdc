import React from "react";
import classnames from "classnames";

export const GridTilePrimaryContent = ({ className, children }) =>
  React.Children.map(children, child =>
    React.cloneElement(child, {
      className: classnames(
        "mdc-grid-tile__primary-content",
        child.props.className
      )
    })
  );
