import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

export const Typography = ({ element, type, className, children }) => {
  const T = element;
  return (
    <T
      className={classnames(
        {
          [`mdc-typography--${type}`]: type
        },
        className
      )}
    >
      {children}
    </T>
  );
};

Typography.propTypes = {
  element: PropTypes.string,
  type: PropTypes.oneOf([
    "headline1",
    "headline2",
    "headline3",
    "headline4",
    "headline5",
    "headline6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline"
  ]).isRequired,
  className: PropTypes.string
};

Typography.defaultProps = {
  element: "div"
};
