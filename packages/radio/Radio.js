import React from "react";
import classnames from "classnames";
import { FormField } from "@mdc/form-field";

const Radio = ({ className, id, disabled, alignEnd, children, ...other }) => {
  const radio = (
    <div
      className={classnames(
        "mdc-radio",
        { "mdc-radio--disabled": disabled },
        className
      )}
    >
      <input
        className="mdc-radio__native-control"
        type="radio"
        disabled={disabled}
        id={id}
        {...other}
      />
      <div className="mdc-radio__background">
        <div className="mdc-radio__outer-circle" />
        <div className="mdc-radio__inner-circle" />
      </div>
    </div>
  );

  if (children) {
    return (
      <FormField alignEnd={alignEnd}>
        {radio}
        <label htmlFor={id}>{children}</label>
      </FormField>
    );
  }

  return radio;
};

export default Radio;
