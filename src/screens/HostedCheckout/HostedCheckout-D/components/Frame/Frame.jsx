/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({ property1, className }) => {
  return (
    <div className={`frame-hc ${property1} ${className}`}>
      {property1 === "default" && <div className="text-wrapper">CHECKOUT WITH EMAIL</div>}

      {["variant-2", "variant-3", "variant-4"].includes(property1) && (
        <>
          <div className="overlap">
            {property1 === "variant-2" && <img className="img" alt="Group" src="/img/group-3310.png" />}

            {["variant-3", "variant-4"].includes(property1) && <div className="div">SUBMIT</div>}
          </div>
          <div className="overlap-group">
            {property1 === "variant-2" && <img className="path" alt="Path" src="/img/path-2096.svg" />}

            {property1 === "variant-3" && <>hello@gmail.com</>}

            {property1 === "variant-4" && <>enter code</>}
          </div>
        </>
      )}
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-2", "variant-3", "default"]),
};
