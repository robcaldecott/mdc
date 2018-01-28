import React from "react";
import classnames from "classnames";
import { FormField } from "@mdc/form-field";

export const Checkbox = ({
  className,
  disabled,
  id,
  alignEnd,
  children,
  ...other
}) => {
  const checkbox = (
    <div
      className={classnames(
        "mdc-checkbox",
        { "mdc-checkbox--disabled": disabled },
        className
      )}
    >
      <input
        type="checkbox"
        className="mdc-checkbox__native-control"
        disabled={disabled}
        id={id}
        {...other}
      />
      <div className="mdc-checkbox__background">
        <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
          <path
            className="mdc-checkbox__checkmark__path"
            fill="none"
            stroke="white"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          />
        </svg>
        <div className="mdc-checkbox__mixedmark" />
      </div>
    </div>
  );

  if (children) {
    return (
      <FormField alignEnd={alignEnd}>
        {checkbox}
        <label htmlFor={id}>{children}</label>
      </FormField>
    );
  }

  return checkbox;
};
