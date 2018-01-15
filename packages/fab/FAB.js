import React from "react";
import classnames from "classnames";

const FAB = ({ className, mini, exited, children, ...other }) => (
  <button
    className={classnames("mdc-fab", "material-icons", {
      "mdc-fab--mini": mini,
      "mdc-fab--exited": exited
    })}
    aria-label={children}
    {...other}
  >
    <span className="mdc-fab__icon">{children}</span>
  </button>
);

export default FAB;
