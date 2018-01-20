import React from "react";
import classnames from "classnames";

const ToolbarAdjust = ({ fixed, children }) =>
  React.Children.map(children, child =>
    React.cloneElement(child, {
      className: classnames(
        { "mdc-toolbar-fixed-adjust": fixed },
        child.props.className
      )
    })
  );

export default ToolbarAdjust;
