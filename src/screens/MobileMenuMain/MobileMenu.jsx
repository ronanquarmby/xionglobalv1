import React from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { Linkedin } from "./components/Linkedin";
import { Medium } from "./components/Medium";
import { Telegram } from "./components/Telegram";
import { Twitter } from "./components/Twitter";
import "./style.css";

export const MobileMenu = () => {

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
    <div className="element-m-menu-m">
      <img className="BG-elements" alt="Bg elements" src="/img/bg-elements.png" />
      <div className="NAV">
        <div className="nav-bar">
        <Link to="/">
          <img className="xion-logo" alt="Xion logo" src="/img/xion-logo-m.png" />
          </Link>
          <div className="menu-buttons">
            <div className="GS-button">
              <div className="div">
                <img className="shadows" alt="Shadows" src="/img/Mobile-Rectangle-menu.png" />
                <div className="get-started"onClick={handleGetStartedClick}>GET STARTED</div>
              </div>
            </div>
            <div className="burger-x">
            <Link to="/" className="overlap">
                <div className="shadows-2" />
                <img className="img" alt="Shadows" src="/img/shadows-10.png" />
                <div className="rectangle-3" />
                <img className="group" alt="Group" src="/img/group-3110.png" />
                </Link>
              </div>
            </div>
          </div>
          </div>
      <div className="menu-section-m">
        <div className="head-line">
          <div className="text-wrapper">ENJOY</div>
          <div className="text-wrapper-2">FRICTIONLESS PAYMENTS</div>
        </div>
        <img className="blue-line" alt="Blue line" src="/img/blue-line.png" />
        <div className="frame">
          <div className="ONE-CLICK-PAYMENT">
            <div className="text-wrapper-3">ONE-CLICK PAYMENT CASE STUDY</div>
            <div className="frame-2">
              <div className="b">
              <a href="https://youtu.be/fNHDkyOxS5k" rel="noopener noreferrer" target="_blank">
                <img className="img-2" alt="Sales link TO PLACE" src="/img/sales-link-to-place.png" />
                <div className="text-wrapper-4">SALES FUNNEL PAYMENTS</div>
                </a>
              </div>
              <div className="b-2">
              <a href="https://youtu.be/zYKb-6I6tog" rel="noopener noreferrer" target="_blank">
                <img className="img-2" alt="Gaming link TO PLACE" src="/img/gaming-link-to-place.png" />
                <div className="text-wrapper-5">GAMING PAYMENTS</div>
                </a>
              </div>
              <div className="b-3">
              <a href="https://youtu.be/PgD4YKTs5LY" rel="noopener noreferrer" target="_blank">
                <img className="img-2" alt="Nft link TO PLACE" src="/img/nft-link-to-place.png" />
                <div className="text-wrapper-5">DIGITAL PAYMENTS</div>
                </a>
              </div>
            </div>
          </div>
          <div className="frame-3">
  <div className="products">
    <div className="text-wrapper-6">PRODUCTS</div>
    <a href="/platform" className="text-wrapper-7">Platform</a>
    <a href="/hosted-checkout" className="text-wrapper-7">Hosted Checkout</a>
    <a href="/cashback-rewards" className="text-wrapper-7">Cashback Rewards</a>
    <a href="/loyalty" className="text-wrapper-7">Loyalty</a>
  </div>
  <div className="follow-us">
    <div className="text-wrapper-8">FOLLOW US</div>
              <div className="frame-4">
                <Telegram className="telegram-instance" property1="default" propertyDefault="/img/telegram.png" onClick={() => handleSocialMediaClick("https://t.me/xionglobal")} />
                <Twitter
                  className="twitter-instance"
                  ellipse="/img/ellipse-15-2.png"
                  img="/img/rectangle-2961-2.png"
                  property1="default"
                  rectangle="/img/rectangle-2960-2.png"
                  twitterClassName="design-component-instance-node"
                  onClick={() => handleSocialMediaClick("https://twitter.com/xionglobal")} />
                <Medium className="medium-instance" property1="default" propertyDefault="/img/medium.png" onClick={() => handleSocialMediaClick("https://xionglobal.medium.com")} />
                <Linkedin className="linkedin-instance" property1="default" propertyDefault="/img/linkedin.png" onClick={() => handleSocialMediaClick("https://www.linkedin.com/company/xionglobal")}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
