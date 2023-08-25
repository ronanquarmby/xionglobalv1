import React, { useCallback } from "react";
import { FooterMobile } from "../../../mobilecomponents/FooterMobileMain";
import { NavbarMobile } from "../../../mobilecomponents/NavBarMobileMain";  
import "./style.css";

export const LegalM = () => {

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
    <div className="legal-m">
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
      <div className="FREE-SIMPLE-wrapper">
      <div className="FREE-SIMPLE" >LEGAL INFO</div>
      </div>
      <div className="section-3">
        <div className="frame-10">
          <div className="text-wrapper-14">TERMS OF SERVICE</div>
          <p className="text-wrapper-15">AVAILABLE ON IPAD AND DESKTOP FOR VIEWING</p>
        </div>
        <div className="frame-11">
          <div className="text-wrapper-14">PRIVACY POLICY</div>
          <p className="text-wrapper-15">AVAILABLE ON IPAD AND DESKTOP FOR VIEWING</p>
        </div>
        <div className="frame-12">
          <div className="text-wrapper-14">NOTICE &amp; DISCLAIMER</div>
          <p className="text-wrapper-15">AVAILABLE ON IPAD AND DESKTOP FOR VIEWING</p>
        </div>
        </div>
        <div className="section-2"> 
        <div className="TEXT-wrapper">
          <div className="TEXT-2">
            <p className="div-4">
              <span className="span">X</span>
              <span className="span">ion docs</span>
            </p>
            <p className="div-5">
              <span className="text-wrapper-19">Explore guides and integration examples in Xion </span>
              <span
                  className="text-wrapper-20"
                  onClick={() => handleOpenURL("https://www.apimatic.io/api-docs/xionglobal")}
                >
                  documentation
                </span>
              <span className="text-wrapper-19">.</span>
            </p>
          </div>
        </div>
        <div className="frame-7">
          <div className="TEXT-3">
            <p className="div-4">
              <span className="span">Technical</span>
              <span className="span">&nbsp;</span>
              <span className="span">and</span>
              <span className="span">&nbsp;</span>
              <span className="span">support</span>
            </p>
            <p className="div-5">
              <span className="text-wrapper-19">We’re here to help! If you have technical issues, </span>
              <span
                  className="text-wrapper-20"
                  onClick={() => handleOpenURL("https://intercom.help/xionpay/en/")}
                >
                  help guide 
                </span>
              <span className="text-wrapper-19">.</span>
            </p>
          </div>
        </div>
        <img className="line-2" alt="Line" src="/img/line-23-mobile.svg" />
      </div>
      <FooterMobile onGetStartedClick={handleGetStartedClick} />
      </div>
  );
};
