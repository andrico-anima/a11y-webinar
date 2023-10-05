/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const UserImage = ({ size, className }) => {
  return <div className={`user-image size-0-${size} ${className}`} />;
};

UserImage.propTypes = {
  size: PropTypes.oneOf(["large", "small"]),
};
