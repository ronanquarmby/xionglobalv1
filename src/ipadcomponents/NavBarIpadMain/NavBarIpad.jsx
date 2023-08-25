import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css"; // You can use the same style.css from your desktop component

export const NavbarIpad = ({ onGetStartedClick }) => {
  const handleGetStartedClick = useCallback(() => {
    if (typeof onGetStartedClick === "function") {
      onGetStartedClick();
    }
  }, [onGetStartedClick]);

  return (
    <div className="NAV-ip">
      <div className="frame-7-nav-ip">
      <Link to="/">
          <img className="xion-logo-ip" alt="Xion logo" src="/img/xion-logo-4.png" />
        </Link>
        <div className="frame-8-ip">
          <div className="GS-button-2-ip">
            <div className="overlap-group-11-ip">
                <div className="rectangle-13-ip" />
                <div className="get-started-3-ip" onClick={handleGetStartedClick}>GET STARTED</div>
              </div>
            </div>
          <div className="div-3-ip">
            <Link to="/Menu" className="div-3-ip">
              <img className="shadows-5-ip" alt="Shadows" src="/img/Desktop-ipad-square-menu.png" />
              <img className="group-3-ip" alt="Group" src="/img/group-3110-4.png" />
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
};

NavbarIpad.propTypes = {
  onGetStartedClick: PropTypes.func,
};