/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Property1Variant22 = ({ color = "#14A5ED", className }) => {
  return (
    <svg
      className={`property-1-variant2-2 ${className}`}
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-2"
        d="M21.4785 11.187C21.4785 5.66416 17.0014 1.18701 11.4785 1.18701C5.95567 1.18701 1.47851 5.66417 1.47852 11.187C1.47852 16.7099 5.95567 21.187 11.4785 21.187C17.0014 21.187 21.4785 16.7099 21.4785 11.187Z"
        stroke="#E8E8E8"
        strokeMiterlimit="10"
      />
      <path className="path-2" d="M13.5698 15.8118L7.22 6.6496H8.98533L15.3125 15.8118H13.5698Z" stroke={color} />
      <path className="path-2" d="M15.2985 6.1496H16.2654L7.23208 16.3118H6.26514L15.2985 6.1496Z" fill={color} />
    </svg>
  );
};

Property1Variant22.propTypes = {
  color: PropTypes.string,
};
