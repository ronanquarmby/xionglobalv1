import React, { useCallback } from "react";
import { NavbarMobile } from "../../../mobilecomponents/NavBarMobileMain";  
import { GoBack } from "../../../GoBack";
import "./style.css";

export const ErrorPageMobile = () => {

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
    <div className="error-m">
      <div className="BG-elements">  
        <div className="overlap-4"> 
          <div className="hero">
            <div className="overlap-5">
              <img className="rectangle-9" alt="Rectangle" src="/img/mobilehero.png" />
            </div>
          </div>
          <img className="noize" alt="Noize" src="/img/noize-1.png" />
        </div>
      </div> 
      <img className="nav-spacer" alt="Nav spacer" src="/img/nav-spacer-1.png" />
      <NavbarMobile onGetStartedClick={handleGetStartedClick} />
      <div className="main">
        <img className="FREE-SIMPLE" alt="Free SIMPLE" src="/img/free-simple-oops.png" />
        <div className="text-wrapper">404 ERROR</div>
        <p className="div">The page you are looking for seems to have been lost.</p>
        <GoBack className="go-back-instance" readTheDocsClassName="design-component-instance-node" />
        <div className="group">
          <div className="gummy-rayman-wrapper">
            <img
              className="gummy-rayman"
              alt="Gummy rayman"
              src="/img/gummy-rayman-adventures-sebastien-camrrubi-removebg-preview-2.png"
            />
          </div>
        </div>
      </div>
      </div>
  );
};
