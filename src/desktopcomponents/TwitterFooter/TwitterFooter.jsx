/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TwitterFooter = ({ property1, className, propertyDefault = "/img/property-1-default-7.png" }) => {
  return (
    <img
      className={`twitter-footer ${className}`}
      alt="Property default"
      src={property1 === "variant-2" ? "/img/property-1-variant2-6.png" : propertyDefault}
    />
  );
};

TwitterFooter.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  propertyDefault: PropTypes.string,
};
