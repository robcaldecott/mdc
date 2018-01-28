import React from "react";
import { oneOf, bool } from "prop-types";
import classnames from "classnames";

export const ToolbarSection = ({ align, shrinkToFit, className, ...other }) => (
  <section
    className={classnames(
      "mdc-toolbar__section",
      {
        [`mdc-toolbar__section--align-${align}`]: align,
        "mdc-toolbar__section--shrink-to-fit": shrinkToFit
      },
      className
    )}
    {...other}
  />
);

ToolbarSection.propTypes = {
  align: oneOf(["start", "end"]),
  shrinkToFit: bool
};
