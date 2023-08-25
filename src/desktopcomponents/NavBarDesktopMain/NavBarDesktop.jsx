import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css"; // You can use the same style.css from your desktop component

export const NavbarDesktop = ({ onGetStartedClick }) => {
  const handleGetStartedClick = useCallback(() => {
    if (typeof onGetStartedClick === "function") {
      onGetStartedClick();
    }
  }, [onGetStartedClick]);

  return (
    <div className="NAV-de">
      <div className="frame-8-de">
      <Link to="/">
          <img className="xion-logo-de" alt="Xion logo" src="/img/xion-logo-1.png" />
        </Link>
        <div className="frame-9-de">
          <div className="frame-wrapper-de">
            <div className="frame-10-de">
              <div className="overlap-group-12-de">
                <div className="rectangle-11-de" />
                <div className="get-started-3-de" onClick={handleGetStartedClick}>GET STARTED</div>
              </div>
            </div>
          </div>
          <div className="div-5-de">
            <Link to="/Menu" className="div-5-de">
              <img className="shadows-6-de" alt="Shadows" src="/img/Desktop-ipad-square-menu.png" />
              <img className="group-2-de" alt="Group" src="/img/group-3110-1.png" />
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
};

NavbarDesktop.propTypes = {
  onGetStartedClick: PropTypes.func,
};
