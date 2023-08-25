import React, { useCallback } from "react";
import { NavbarDesktop } from "../../../desktopcomponents/NavBarDesktopMain";
import { GoBack } from "../../../GoBack"
import "./style.css";

export const ErrorPageDesktop = () => {

    // Define the onClick event handler function for opening URLs
    const handleOpenURL = useCallback((url) => {
      // Open a new tab with the specified URL
      window.open(url, "_blank"); 
    }, []);

        // Define the onClick event handler function
        const handleGetStartedClick = useCallback(() => {
          // Open a new tab with the specified URL
          window.open("https://xionpay.app", "_blank");
        }, []);
      

  return (
    <div className="error-d">
      <div className="BG-elements">
        <div className="overlap-4">
          <div className="hero">
            <div className="overlap-5">
              <img className="rectangle-9" alt="Rectangle" src="/img/hero-hc.png" />
            </div>
          </div>
          </div>
          <img className="noize" alt="Noize" src="/img/noize.png" />
        </div>
      <img className="nav-spacer" alt="Nav spacer" src="/img/nav-spacer.png" />
      <NavbarDesktop onGetStartedClick={handleGetStartedClick} />
      <div className="main-3">
        <div className="overlap-13">
          <div className="frame-23">
            <GoBack className="go-back-2" />
            <div className="overlap-group-11">
              <p className="text-wrapper-32">The page you are looking for seems to have been lost.</p>
              <div className="text-wrapper-33">404 ERROR</div>
              <div className="ABOUT-US-3">OOPS!!!</div>
            </div>
          </div>
          <img
            className="gummy-rayman-2"
            alt="Gummy rayman"
            src="/img/gummy-rayman-adventures-sebastien-camrrubi-removebg-preview-1-1.png"
          />
          <img
            className="gummy-rayman-3"
            alt="Gummy rayman"
            src="/img/gummy-rayman-adventures-sebastien-camrrubi-removebg-preview-2-1.png"
          />
        </div>
      </div>
      </div>
  );
};
