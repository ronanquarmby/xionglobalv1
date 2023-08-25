/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AntiClockwise = ({ clock, className }) => {
  return <div className={`anti-clockwise ${className}`} />;
};

AntiClockwise.propTypes = {
  clock: PropTypes.oneOf(["clock-4", "clock-2", "clock-3", "one"]),
};
