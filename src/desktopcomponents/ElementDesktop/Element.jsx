import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const Element = ({ className, assetClassName, asset = "/img/asset-24@4x-8.png" }) => {
  const [selectedBullet, setSelectedBullet] = useState("create"); // Initialize with a default value

  const bulletPointImages = {
    create: "/img/asset-24@4x-8.png",
    integrate: "/img/asset-22@4x-8.png",
    sendShare: "/img/asset-21@4x-8.png",
    manage: "/img/asset-23@4x-8.png",
  };

  const handleBulletPointClick = (bulletKey) => { 
    setSelectedBullet(bulletKey);
  };

  return (
    <div className={`element-dipad ${className}`}>
      <div className="desktop-shaddow-d">
        <img
          className={`asset-d`}
          src={bulletPointImages[selectedBullet]}
          style={{ width: '686px', height: '490px', position: 'absolute' }}
        />
      </div>
      <div className="bullet-points-d">
        <div
          className={`create-d ${selectedBullet === "create" ? "selected" : ""}`}
          onClick={() => handleBulletPointClick("create")}
        >
          <div className="create-one-time-or-d clickable">Create One-Time or Recurring Payments</div>
          <div className="overlap-group-d">
            <div className="shadows-m" />
            <img className="path-d" alt="Path D" src={bulletPointImages.create} />
          </div>
        </div>
        <div
          className={`integrate ${selectedBullet === "integrate" ? "selected" : ""}`}
          onClick={() => handleBulletPointClick("integrate")}
        >
          <div className="text-wrapper-d clickable">Integrate Web3 Checkout Buttons</div>
          <div className="overlap-group-d">
            <div className="shadows-m" />
            <img className="path-d" alt="Path D" src={bulletPointImages.integrate} />
          </div>
        </div>
        <div
          className={`div-d ${selectedBullet === "sendShare" ? "selected" : ""}`}
          onClick={() => handleBulletPointClick("sendShare")}
        >
          <div className="p-d clickable">Send &amp; Share Payment Links</div>
          <div className="overlap-group-d">
            <div className="shadows-m" />
            <img className="path-d" alt="Path D" src={bulletPointImages.sendShare} />
          </div>
        </div>
        <div
          className={`div-d ${selectedBullet === "manage" ? "selected" : ""}`}
          onClick={() => handleBulletPointClick("manage")}
        >
          <div className="p-d clickable">Manage, View &amp; Download Transactions</div>
          <div className="overlap-group-d">
            <div className="shadows-m" />
            <img className="path-d" alt="Path D" src={bulletPointImages.manage} />
          </div>
        </div>
      </div>
    </div>
  );
};

Element.propTypes = {
  asset: PropTypes.string,
};
