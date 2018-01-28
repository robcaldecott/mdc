import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DialogFooterButton = ({ className, action, buttonRef, ...other }) => (
  <button
    type="button"
    className={classnames(
      "mdc-button",
      "mdc-dialog__footer__button",
      { "mdc-dialog__action": action },
      className
    )}
    ref={button => buttonRef(button)}
    {...other}
  />
);

DialogFooterButton.propTypes = {
  action: PropTypes.bool,
  buttonRef: PropTypes.func
};

DialogFooterButton.defaultProps = {
  buttonRef: () => {}
};

export default DialogFooterButton;
