/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Group = ({
  property1,
  className,
  line = "/img/line-1-2.svg",
  groupClassName,
  groupClassNameOverride,
  group = "/img/group-8-2.png",
}) => {
  return (
    <div className={`group property-1-1-${property1} ${className}`}>
      <div className="overlap-group-2">
        <img className="line" alt="Line" src={property1 === "variant-2" ? "/img/line-1-1.svg" : line} />
        <div className={`div-2 ${groupClassName}`} />
        <div className="text-wrapper-2">422</div>
        <div className="text-wrapper-3">elm</div>
        <div className="text-wrapper-4">st, Pie...</div>
        <div className={`div-3 ${groupClassNameOverride}`} />
        <div className="text-wrapper-5">JSmith@gmail.com</div>
        <div className="text-wrapper-6">mccjc88c8c8.....098x</div>
        <div className="text-wrapper-7">WALLET ADDRESS</div>
        <img className="img-2" alt="Group" src={property1 === "variant-2" ? "/img/group-8-1.png" : group} />
        <div className="text-wrapper-8">654</div>
        <div className="text-wrapper-9">elm</div>
        <div className="text-wrapper-10">st, Din...</div>
        <div className="text-wrapper-11">Residential</div>
        <div className="text-wrapper-12">Business</div>
        <div className="text-wrapper-13">+2709474874445</div>
      </div>
    </div>
  );
};

Group.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  line: PropTypes.string,
  group: PropTypes.string,
};
