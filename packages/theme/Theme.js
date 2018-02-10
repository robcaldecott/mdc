import React from "react";
import classnames from "classnames";

export const Theme = ({ text, background, children }) =>
  React.Children.map(children, child =>
    React.cloneElement(child, {
      className: classnames(
        {
          [`mdc-theme--${text}`]: text,
          [`mdc-theme--${background}`]: background
        },
        child.props.className
      )
    })
  );
