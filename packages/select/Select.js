import React from "react";
import classnames from "classnames";

class Select extends React.Component {
  render() {
    const { className, value, label, children, ...other } = this.props;
    return (
      <div className={classnames("mdc-select", className)}>
        <select className="mdc-select__surface" value={value} {...other}>
          {label && <option value="">{label}</option>}
          {children}
        </select>
        <div className="mdc-select__bottom-line" />
      </div>
    );
  }
}

export default Select;
