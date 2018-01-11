import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DialogFooterButton = ({
  className,
  type,
  action,
  children,
  ...other
}) => (
  <button
    type="button"
    className={classnames(
      "mdc-button",
      "mdc-dialog__footer__button",
      { [`mdc-dialog__footer__button--${type}`]: type },
      { "mdc-dialog__action": action },
      className
    )}
    {...other}
  >
    {children}
  </button>
);

DialogFooterButton.propTypes = {
  type: PropTypes.oneOf(["accept", "cancel"]).isRequired,
  action: PropTypes.bool
};

export default DialogFooterButton;
