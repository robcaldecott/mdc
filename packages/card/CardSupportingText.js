import React from "react";
import classnames from "classnames";

const CardSupportingText = ({ className, children, ...other }) => (
  <section
    className={classnames("mdc-card__supporting-text", className)}
    {...other}
  >
    {children}
  </section>
);

export default CardSupportingText;
