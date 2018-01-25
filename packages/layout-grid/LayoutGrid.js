import React from "react";
import classnames from "classnames";

const LayoutGrid = ({ nested, className, children, ...other }) =>
  nested ? (
    <div className={classnames("mdc-layout-grid__inner", className)} {...other}>
      {children}
    </div>
  ) : (
    <div className={classnames("mdc-layout-grid", className)} {...other}>
      <div className="mdc-layout-grid__inner">{children}</div>
    </div>
  );

export default LayoutGrid;
