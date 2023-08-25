/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className }) => {
  return (
    <div className={`property-default-wrapper ${className}`}>
      <div className="overlap-2">
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="element-wrapper">
          <div className="element">
            {property1 === "default" && <>2</>}

            {property1 === "variant-3" && <>3</>}
          </div>
        </div>
        <div className="div-wrapper">
          <div className="element-2">
            {property1 === "default" && <>2</>}

            {property1 === "variant-3" && <>3</>}
          </div>
        </div>
        <img className="line-2" alt="Line" src="/img/line-5-1.svg" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
      </div>
      <div className="overlap-group-3">
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="text-wrapper-14">0</div>
        <img className="line-2" alt="Line" src="/img/line-6-1.svg" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
      </div>
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-3", "default"]),
};
