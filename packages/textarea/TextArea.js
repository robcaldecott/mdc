import React from "react";
import classnames from "classnames";

export class TextArea extends React.Component {
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
      id,
      label,
      value,
      ...other
    } = this.props;
    const { hasFocus, isValid } = this.state;

    return (
      <div
        className={classnames(
          "mdc-text-field",
          "mdc-text-field--textarea",
          "mdc-text-field--upgraded",
          {
            "mdc-text-field--focused": hasFocus,
            "mdc-text-field--invalid": !isValid,
            "mdc-text-field--fullwidth": fullWidth,
            "mdc-text-field--disabled": disabled,
            "mdc-text-field--dense": dense
          },
          className
        )}
      >
        <textarea
          id={id}
          className="mdc-text-field__input"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={value}
          disabled={disabled}
          {...other}
        />

        {label && (
          <label
            htmlFor={id}
            className={classnames("mdc-text-field__label", {
              "mdc-text-field__label--float-above": hasFocus || value
            })}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
}
