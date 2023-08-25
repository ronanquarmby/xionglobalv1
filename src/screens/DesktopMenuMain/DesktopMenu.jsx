import React from "react";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { Linkedin } from "../DesktopMenuMain/components/Linkedin";
import { Medium } from "../DesktopMenuMain/components/Medium";
import { Telegram } from "../DesktopMenuMain/components/Telegram"; 
import { Twitter } from '../DesktopMenuMain/components/Twitter';
import "./style.css";

export const DesktopMenu = () => {

    // Define the URL for the "Platform" menu item
    const platformURL = "https://xionpay.app";
    const helpguideURL = "https://intercom.help/xionpay/en/"

    // Define the onClick event handler function for the "Platform" menu item
    const handleHelpGuideClick = useCallback(() => {
      window.open(helpguideURL, "_blank");
    }, [platformURL]);

     // Define the onClick event handler function for the "Platform" menu item
     const handlePlatformClick = useCallback(() => {
      window.open(platformURL, "_blank");
    }, [platformURL]);

        // Define the onClick event handler function
        const handleGetStartedClick = useCallback(() => {
          // Open a new tab with the specified URL
          window.open("https://xionpay.app", "_blank");
        }, []);

        const handleSocialMediaClick = (url) => {
          console.log("handleSocialMediaClick called with URL:", url);
          window.open(url, "_blank");
        };        

  return (
    <div className="menu-d">
      <img className="BG-elements-d" alt="Bg elements d" src="/img/dmenu-bg-elements.png" />
      <div className="NAV-d">
        <div className="nav-bar-d">
        <Link to="/">
          <img className="xion-logo-d" alt="Xion logo d" src="/img/xion-logo-1.png" />
          </Link>
          <div className="menu-buttons-d">
            <div className="GS-BUTTON-d">
              <div className="GS-button-d">
                <div className="div-d">
                  <img className="shadows-d" alt="Shadows d" src="/img/desktop-ipad-Rectangle-menu.png" />
                  <div className="get-started-d"onClick={handleGetStartedClick}>GET STARTED</div>
                </div>
              </div>
            </div>
            <div className="div-2-d">
  <Link to="/" className="div-2-d-link">
    <div className="shadows-2-d" />
    <img className="img-d" alt="Shadows" src="/img/shadows-10.png" />
    <div className="rectangle-3-d" />
    <img className="group-d" alt="Group d" src="/img/group-3110.png" />
  </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-section-d">
        <div className="head-line-d">
          <div className="text-wrapper-d">ENJOY</div>
          <div className="text-wrapper-2-d">FRICTIONLESS PAYMENTS</div>
        </div>
        <img className="blue-line-d" alt="Blue line" src="/img/blue-line.png" />
        <div className="frame-d">
          <div className="ONE-CLICK-PAYMENT-d">
            <div className="text-wrapper-3-d">ONE-CLICK PAYMENT CASE STUDY</div>
            <div className="frame-2-d">
              <div className="b-d">
                <a href="https://youtu.be/fNHDkyOxS5k" rel="noopener noreferrer" target="_blank">
                  <img className="img-2-d" alt="Sales link TO PLACE" src="/img/sales-link-to-place.png" />
                </a>
                <div className="text-wrapper-4-d">SALES FUNNEL PAYMENTS</div>
              </div>
              <div className="b-2-d">
                <a href="https://youtu.be/zYKb-6I6tog" rel="noopener noreferrer" target="_blank">
                  <img className="img-2-d" alt="Gaming link TO PLACE" src="/img/gaming-link-to-place.png" />
                </a>
                <div className="text-wrapper-5-d">GAMING PAYMENTS</div>
              </div>
              <div className="b-3-d">
                <a href="https://youtu.be/PgD4YKTs5LY" rel="noopener noreferrer" target="_blank">
                  <img className="img-2-d" alt="Nft link TO PLACE" src="/img/nft-link-to-place.png" />
                </a>
                <div className="text-wrapper-5-d">DIGITAL PAYMENTS</div>
              </div>
            </div>
          </div>
          <div className="frame-3-d">
          <div className="div-3-d">
  <div className="text-wrapper-6-d">PRODUCTS</div>
  <a href="#" className="text-wrapper-7-d" onClick={handlePlatformClick}> Platform</a>
  <a href="/hosted-checkout" className="text-wrapper-7-d">Hosted Checkout</a>
  <a href="/cashback-rewards" className="text-wrapper-7-d">Cashback Rewards</a>
  <a href="/loyalty" className="text-wrapper-7-d">Loyalty</a>
</div>
<div className="div-3-d">
  <div className="text-wrapper-6-d">RESOURCES</div>
  <a href="/blog" className="text-wrapper-7-d">Blog</a>
  <a href="#" className="text-wrapper-7-d" onClick={handleHelpGuideClick}> Help Guide</a>
  <a href="documentation" className="text-wrapper-7-d">Documentation</a>
  <a href="/contact-us" className="text-wrapper-7-d">Contact Us</a>
  <a href="/contact-sales" className="text-wrapper-7-d">Contact Sales</a>
</div>
<div className="follow-us-d">
  <div className="text-wrapper-8-d">FOLLOW US</div>

              <div className="frame-4-d">
              <Telegram className="telegram-instance-d" property1="default" propertyDefault="/img/telegramwhite.png" onClick={() => handleSocialMediaClick("https://t.me/xionglobal")} />
                <Twitter className="twitter-instance-d" property1="default" propertyDefault="/img/property-1-variant2-6.png" onClick={() => handleSocialMediaClick("https://twitter.com/xionglobal")} />
                <Medium className="medium-instance-d" property1="default" propertyDefault="/img/property-1-variant2-5.png" onClick={() => handleSocialMediaClick("https://xionglobal.medium.com")} />
                <Linkedin className="linkedin-instance-d" property1="default" propertyDefault="/img/property-1-variant2-3.png" onClick={() => handleSocialMediaClick("https://www.linkedin.com/company/xionglobal")}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
