import React, { Fragment } from "react";
import classnames from "classnames";
import TextFieldLabel from "./TextFieldLabel";
import TextFieldBottomLine from "./TextFieldBottomLine";

class TextField extends React.Component {
  state = { hasFocus: false, isValid: true };

  handleFocus = () => {
    this.setState({ hasFocus: true });
  };

  handleBlur = e => {
    this.setState({ hasFocus: false, isValid: e.target.validity.valid });
  };

  render() {
    const {
      className,
      fullWidth,
      disabled,
      dense,
      box,
      value,
      label,
      helperText,
      ...other
    } = this.props;

    const { hasFocus, isValid } = this.state;

    return (
      <Fragment>
        <label
          className={classnames(
            "mdc-text-field",
            "mdc-text-field--upgraded",
            {
              "mdc-text-field--focused": hasFocus,
              "mdc-text-field--invalid": !isValid,
              "mdc-text-field--fullwidth": fullWidth,
              "mdc-text-field--disabled": disabled,
              "mdc-text-field--dense": dense,
              "mdc-text-field--box": box
            },
            className
          )}
        >
          <input
            className="mdc-text-field__input"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={value}
            disabled={disabled}
            {...other}
          />

          <TextFieldLabel
            floatAbove={hasFocus || value}
            shake={!hasFocus && !isValid}
          >
            {label}
          </TextFieldLabel>

          <TextFieldBottomLine active={hasFocus} />
        </label>
        {helperText}
      </Fragment>
    );
  }
}

export default TextField;
