import React from "react";

export const DrawerHeader = ({ className, ...other }) => (
  <header className={`mdc-drawer__header ${className}`} {...other} />
);
