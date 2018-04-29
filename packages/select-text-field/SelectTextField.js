import React from "react";
import classnames from "classnames";

export class SelectTextField extends React.Component {
  state = { hasFocus: false };

  handleFocus = () => {
    this.setState({ hasFocus: true });
  };

  handleBlur = e => {
    this.setState({ hasFocus: false });
  };

  render() {
    const {
      className,
      disabled,
      value,
      children,
      label,
      ...other
    } = this.props;

    return (
      <label
        className={classnames("mdc-text-field", "mdc-text-field--upgraded", {
          "mdc-text-field--focused": this.state.hasFocus,
          "mdc-text-field--disabled": disabled
        })}
        style={{
          backgroundImage:
            "url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%230%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 4px bottom 16px"
        }}
      >
        <select
          className="mdc-text-field__input"
          value={value}
          disabled={disabled}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          style={{ paddingRight: 20 }}
          {...other}
        >
          <option value="" />
          {children}
        </select>

        <span
          className={classnames("mdc-text-field__label", {
            "mdc-text-field__label--float-above": value
          })}
        >
          {label}
        </span>

        <div
          className={classnames("mdc-line-ripple", {
            "mdc-line-ripple--active": this.state.hasFocus
          })}
        />
      </label>
    );
  }
}
