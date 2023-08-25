import React, { useState, useCallback } from "react";
import { FooterIpad } from "../../../ipadcomponents/FooterIpadMain";
import { NavbarIpad } from "../../../ipadcomponents/NavBarIpadMain";  
import { GoBack } from "../../../GoBack";
import "./style.css";

export const ErrorPageIpad = () => {
  const [mediaPlayed, setMediaPlayed] = useState(false); // <-- Define mediaPlayed using useState

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
    <div className="error-i">
      <div className="BG-elements">
        <div className="overlap-4">
          <div className="hero">
            <div className="overlap-5">
              <img className="rectangle-9" alt="Rectangle" src="/img/ipadhero.png" />
            </div>
          </div>
          <img className="noize" alt="Noize" src="/img/noize-1.png" />
        </div>
      </div>
      <img className="nav-spacer" alt="Nav spacer" src="/img/nav-spacer.png" />
      <NavbarIpad onGetStartedClick={handleGetStartedClick} />
      <div className="main-3">
        <div className="overlap-12">
          <div className="group-4">
            <div className="gummy-rayman-wrapper">
              <img
                className="gummy-rayman"
                alt="Gummy rayman"
                src="/img/gummy-rayman-adventures-sebastien-camrrubi-removebg-preview-2-2.png"
              />
            </div>
          </div>
          <div className="ABOUT-US-3">OOPS!!!</div>
          <GoBack className="go-back-instance" readTheDocsClassName="go-back-2" />
          <p className="text-wrapper-31">The page you are looking for seems to have been lost.</p>
          <div className="text-wrapper-32">404 ERROR</div>
        </div>
      </div>
      </div>
  );
};
