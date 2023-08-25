/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component4 = ({ property1, className, group = "/img/group-705-2.png" }) => {
  return (
    <div className={`component-4 ${className}`}>
      <div className="frame-2">
        <div className={`overlap-3 property-1-5-${property1}`}>
          <div className="ellipse">
            <div className="ellipse-2" />
          </div>
          <div className="lock">
            <div className="overlap-group-4">
              <img className="group-2" alt="Group" src={property1 === "variant-3" ? "/img/group-705-1.png" : group} />
              <div className="rectangle-6" />
            </div>
          </div>
          <div className="rectangle-7" />
        </div>
        <img
          className="stable-secure"
          alt="Stable secure"
          src={property1 === "variant-3" ? "/img/stable-secure-1.svg" : "/img/stable-secure-2.svg"}
        />
      </div>
    </div>
  );
};

Component4.propTypes = {
  property1: PropTypes.oneOf(["variant-3", "default"]),
  group: PropTypes.string,
};
