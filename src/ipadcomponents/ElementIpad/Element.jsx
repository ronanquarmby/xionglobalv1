import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const Element = ({
  className,
  assetClassName,
  asset = "/img/asset-24@4x-8.png",
  path = "/img/asset-24@4x-8.png",
  img = "/img/asset-22@4x-8.png",
  path1 = "/img/asset-21@4x-8.png",
  path2 = "/img/asset-23@4x-8.png",
}) => {
  const [selectedBullet, setSelectedBullet] = useState("create");

  const bulletPointImages = {
    create: path,
    integrate: img,
    sendShare: path1,
    manage: path2,
  };

  const handleBulletPointClick = (bulletKey) => {
    setSelectedBullet(bulletKey);
  };

  return (
    <div className={`element-iipad ${className}`}>
      <div className="ipad-shaddow-i">
        <img className={`asset-i ${assetClassName}`} alt="Asset" src={bulletPointImages[selectedBullet]} />
      </div>
      <div className="bullet-points-i">
        <div
          className={`create-i ${selectedBullet === "create" ? "selected" : ""}`}
          onClick={() => handleBulletPointClick("create")}
        >
          <p className="create-one-time-or-i">Create One-time or Recurring Payments</p>
          <div className="overlap-group-i">
            <div className="shadows-m-i" />
            <img className="path-i" alt="Path" src={path} />
          </div>
        </div>
        <div
          className={`div-i ${selectedBullet === "integrate" ? "selected" : ""}`}
          onClick={() => handleBulletPointClick("integrate")}
        >
          <div className="text-wrapper-i">Integrate Web3 Checkout Buttons</div>
          <div className="overlap-group-i">
            <div className="shadows-m-i" />
            <img className="path-i" alt="Path" src={img} />
          </div>
        </div>
        <div
          className={`div-i ${selectedBullet === "sendShare" ? "selected" : ""}`}
          onClick={() => handleBulletPointClick("sendShare")}
        >
          <p className="p-i">Send &amp; Share Payment Links</p>
          <div className="overlap-group-i">
            <div className="shadows-m-i" />
            <img className="path-i" alt="Path" src={path1} />
          </div>
        </div>
        <div
          className={`div-i ${selectedBullet === "manage" ? "selected" : ""}`}
          onClick={() => handleBulletPointClick("manage")}
        >
          <p className="p-i">Manage, View &amp; Download Transactions</p>
          <div className="overlap-group-i">
            <div className="shadows-m-i" />
            <img className="path-i" alt="Path" src={path2} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

Element.propTypes = {
  asset: PropTypes.string,
  path: PropTypes.string,
  img: PropTypes.string,
  path1: PropTypes.string,
  path2: PropTypes.string,
};

