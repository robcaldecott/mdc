import React from "react";
import classnames from "classnames";

class Select extends React.Component {
  render() {
    const {
      className,
      disabled,
      value,
      label,
      children,
      ...other
    } = this.props;
    return (
      <div
        className={classnames(
          "mdc-select",
          { "mdc-select--disabled": disabled },
          className
        )}
      >
        <select
          className="mdc-select__surface"
          value={value}
          disabled={disabled}
          {...other}
        >
          {label && <option value="">{label}</option>}
          {children}
        </select>
        <div className="mdc-select__bottom-line" />
      </div>
    );
  }
}

export default Select;
