import React from "react";
import classnames from "classnames";

const ListItemGraphic = ({ children }) =>
  React.Children.map(children, child =>
    React.cloneElement(child, {
      className: classnames("mdc-list-item__graphic", child.props.className)
    })
  );

export default ListItemGraphic;
