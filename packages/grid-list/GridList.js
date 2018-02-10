import React from "react";
import classnames from "classnames";

export const GridList = ({
  className,
  tileGutter1,
  headerCaption,
  twoLineCaption,
  icon,
  aspectRatio,
  ...other
}) => (
  <div
    className={classnames(
      "mdc-grid-list",
      {
        "mdc-grid-list--tile-gutter-1": tileGutter1,
        "mdc-grid-list--header-caption": headerCaption,
        "mdc-grid-list--twoline-caption": twoLineCaption,
        [`mdc-grid-list--with-icon-align-${icon}`]: icon,
        [`mdc-grid-list--tile-aspect-${aspectRatio}`]: aspectRatio
      },
      className
    )}
    {...other}
  />
);
