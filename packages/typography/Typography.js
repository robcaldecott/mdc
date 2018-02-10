import React from "react";
import classnames from "classnames";

// export const Typography = ({ children, type, adjustMargin }) =>
//   React.Children.map(children, child =>
//     React.cloneElement(child, {
//       className: classnames(
//         {
//           [`mdc-typography--${type}`]: type,
//           "mdc-typography--adjust-margin": adjustMargin
//         },
//         child.props.className
//       )
//     })
//   );

export const Typography = ({
  element = "div",
  type,
  className,
  adjustMargin,
  children
}) =>
  React.createElement(
    element,
    {
      className: classnames(
        {
          [`mdc-typography--${type}`]: type,
          "mdc-typography--adjust-margin": adjustMargin
        },
        className
      )
    },
    children
  );
