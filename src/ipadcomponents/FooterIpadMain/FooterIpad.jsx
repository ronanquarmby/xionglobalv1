import React from "react";
import { CsButton } from "../CsButtonIpad";
import { GsButton } from "../GsButtonIpad";
import { Telegram } from "../../screens/IpadMenuMain/components/Telegram";
import { Twitter } from "../../screens/IpadMenuMain/components/Twitter";
import { Medium } from "../../screens/IpadMenuMain/components/Medium";
import { Linkedin } from "../../screens/IpadMenuMain/components/Linkedin";
import "./style.css"; // You can include any necessary styling here

export const FooterIpad = ({ onGetStartedClick }) => {

    const handleSocialMediaClick = (url) => {
        console.log("handleSocialMediaClick called with URL:", url);
        window.open(url, "_blank");

      };    

  return (
    <div className="if-container">
      <div className="start-if">
        <div className="overlap-group-2-if">
          <img className="rectangle-if" alt="Rectangle" src="/img/rectangle-1960-1.png" />
          <img className="gradient-if" alt="Gradient" src="/img/gradient-3.png" />
          <img className="mouse-if" alt="Mouse" src="/img/mouse-2.png" />
        </div>
        <div>
          <div className="start-section-if">
            <div className="overlap-18-if">
            <img className="start-image-if" alt="Start image" src="/img/start-image-1.png" /> 
            <div className="CTA-buttons-2-if">
              <GsButton property1="default" />
              <CsButton property1="default" onClick={onGetStartedClick} />
            </div>
            <div className="text-block-5-if">
              <div className="overlap-group-9-if">
                <div className="text-wrapper-50-if">START</div>
                <div className="text-wrapper-51-if">FREE TODAY!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-if">
        <img className="footer-if" alt="Footer if" src="/img/footer-1.png" />
        <div className="frame-6-if">
          <img className="XG-logo-if" alt="Xg logo if" src="/img/xg-logo-1.png" />
          <div className="sections-if">
          <div className="div-2-if">
                <div className="text-wrapper-52-if">PRODUCTS</div>
                <a href="/platform" className="text-wrapper-53-if">Platform</a>
                <a href="/hosted-checkout" className="text-wrapper-53-if">Hosted Checkout</a>
                <a href="/cashback-rewards" className="text-wrapper-53-if">Cashback Rewards</a>
                <a href="/loyalty" className="text-wrapper-53-if">Loyalty</a>
            </div>
            <div className="div-2-if">
                <div className="text-wrapper-52-if">COMPANY</div>
                <a href="/about-us" className="text-wrapper-53-if">About Us</a>
                <a href="/become-a-partner" className="text-wrapper-53-if">Become a Partner</a>
            </div>
            <div className="div-2-if">
                <div className="text-wrapper-52-if">RESOURCES</div>
                <a href="/blog" className="text-wrapper-53-if">Blog</a>
                <a href="/help-guide" className="text-wrapper-53-if">Help Guide</a>
                <a href="/documentation" className="text-wrapper-53-if">Documentation</a>
                <a href="/contact-us" className="text-wrapper-53-if">Contact Us</a>
                <a href="/contact-sales" className="text-wrapper-53-if">Contact Sales</a>
                <a href="/privacy-terms" className="text-wrapper-53-if">Privacy &amp; Terms</a>
                <a href="/sitemap" className="text-wrapper-53-if">Sitemap</a>
            </div>
            <div className="follow-us-if">
              <div className="follow-us-2-if">
                <div className="text-wrapper-54-if">contact@xion.global</div>
                <div className="social-if">

                <Telegram className="telegram-footer telegram-footer-instance-if" property1="default" propertyDefault="/img/telegramwhite.png" onClick={() => handleSocialMediaClick("https://t.me/xionglobal")} />
                <Twitter className="twitter-footer twitter-footer-instance-if" property1="default" propertyDefault="/img/property-1-variant2-6.png" onClick={() => handleSocialMediaClick("https://twitter.com/xionglobal")} />
                <Medium className="medium-footer medium-footer-instance-if" property1="default" propertyDefault="/img/property-1-variant2-5.png" onClick={() => handleSocialMediaClick("https://xionglobal.medium.com")} />
                <Linkedin className="linkedin-footer linkedin-footer-instance-if" property1="default" propertyDefault="/img/property-1-variant2-3.png" onClick={() => handleSocialMediaClick("https://www.linkedin.com/company/xionglobal")}/>
                </div>
                <div className="text-wrapper-55-if">FOLLOW US</div>
              </div>
              <div className="t-cs-if">
                <div className="overlap-group-10-if">
                  <div className="text-wrapper-56-if">©2023 Xion Global</div>
                  <div className="all-rights-reserved-if">All Rights Reserved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};
