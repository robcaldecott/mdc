import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { MDCRipple } from "@material/ripple/dist/mdc.ripple";

export default class Button extends React.Component {
  static propTypes = {
    raised: PropTypes.bool,
    compact: PropTypes.bool,
    dense: PropTypes.bool
  };

  componentDidMount() {
    if (this.button) {
      MDCRipple.attachTo(this.button);
    }
  }

  render() {
    const {
      className,
      raised,
      compact,
      dense,
      children,
      ...other
    } = this.props;
    return (
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
        ref={button => {
          this.button = button;
        }}
        {...other}
      >
        {children}
      </button>
    );
  }
}
