import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css"; // You can use the same style.css from your desktop component

export const NavbarMobile = ({ onGetStartedClick }) => {
  const handleGetStartedClick = useCallback(() => {
    if (typeof onGetStartedClick === "function") {
      onGetStartedClick();
    }
  }, [onGetStartedClick]);

  return (
    <div className="NAV-mo">
      <div className="frame-wrapper-mo">
      <div className="frame-6-mo">
      <Link to="/">
          <img className="xion-logo-mo" alt="Xion logo" src="/img/xion-logo-5.png" />
        </Link>
        <div className="frame-7-mo">
          <div className="GS-button-3-mo">
            <div className="overlap-group-10-mo">
                <div className="rectangle-10-mo" />
                <div className="get-started-2-mo" onClick={handleGetStartedClick}>GET STARTED</div>
              </div>
            </div>
          <div className="burger-mo">
            <Link to="/Menu" className="overlap-14-mo">
              <img className="shadows-4-mo" alt="Shadows" src="/img/mobile-square-menu.png" />
              <img className="group-mo" alt="Group" src="/img/group-3110-5.png" />
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

NavbarMobile.propTypes = {
  onGetStartedClick: PropTypes.func,
};