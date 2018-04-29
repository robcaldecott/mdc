import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

export const CardMedia = ({ className, scale, ...other }) => (
  <div
    className={classnames(
      "mdc-card__media",
      {
        [`mdc-card__media--${scale}`]: scale
      },
      className
    )}
    {...other}
  />
);

CardMedia.propTypes = {
  className: PropTypes.string,
  scale: PropTypes.oneOf(["square", "16-9"])
};

CardMedia.defaultProps = {
  scale: "16-9"
};
