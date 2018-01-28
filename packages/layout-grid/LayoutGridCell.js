import React from "react";
import classnames from "classnames";

const LayoutGridCell = ({
  span,
  desktop,
  tablet,
  mobile,
  order,
  align,
  className,
  ...other
}) => (
  <div
    className={classnames(
      "mdc-layout-grid__cell",
      {
        [`mdc-layout-grid__cell--span-${span}`]: span,
        [`mdc-layout-grid__cell--span-${desktop}-desktop`]: desktop,
        [`mdc-layout-grid__cell--span-${tablet}-tablet`]: tablet,
        [`mdc-layout-grid__cell--span-${mobile}-mobile`]: mobile,
        [`mdc-layout-grid__cell--order-${order}`]: order,
        [`mdc-layout-grid__cell--align-${align}`]: align
      },
      className
    )}
    {...other}
  />
);

export default LayoutGridCell;
