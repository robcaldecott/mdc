import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({ className, raised, compact, dense, children, ...other }) => (
  <button
    className={classnames(
      "mdc-button",
      {
        "mdc-button--raised": raised,
        "mdc-button--compact": compact,
        "mdc-button--dense": dense
      },
      className
    )}
    {...other}
  >
    {children}
  </button>
);

Button.propTypes = {
  raised: PropTypes.bool,
  compact: PropTypes.bool,
  dense: PropTypes.bool
};

export default Button;
