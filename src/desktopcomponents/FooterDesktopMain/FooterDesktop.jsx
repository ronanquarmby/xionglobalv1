import React from "react";
import { CsButton } from "../../desktopcomponents/CsButtonDesktop";
import { GsButton } from "../../desktopcomponents/GsButtonDesktop";
import { Telegram } from "../../screens/DesktopMenuMain/components/Telegram";
import { Twitter } from "../../screens/DesktopMenuMain/components/Twitter";
import { Medium } from "../../screens/DesktopMenuMain/components/Medium";
import { Linkedin } from "../../screens/DesktopMenuMain/components/Linkedin";
import "./style.css"; // You can include any necessary styling here

export const FooterDesktop = ({ onGetStartedClick }) => {

    const handleSocialMediaClick = (url) => {
        console.log("handleSocialMediaClick called with URL:", url);
        window.open(url, "_blank");

      };        
  return (
    <div className="df-container">
      <div className="start-df">
        <div className="overlap-group-2-df">
          <img className="rectangle-df" alt="Rectangle" src="/img/rectangle-1960.png" />
          <img className="gradient-df" alt="Gradient" src="/img/gradient.png" />
          <img className="mouse-df" alt="Mouse" src="/img/mouse.png" />
        </div>
        <div>
          <div className="start-section-df">
            <img className="start-image-df" alt="Start image" src="/img/start-image.png" />
            <div className="CTA-buttons-2-df">
              <GsButton property1="default" />
              <CsButton property1="default" onClick={onGetStartedClick} />
            </div>
            <div className="text-block-3-df">
              <div className="overlap-group-10-df">
                <div className="text-wrapper-49-df">START</div>
                <div className="text-wrapper-50-df">FREE TODAY!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-df">
        <img className="footer-df" alt="Footer df" src="/img/footer.png" />
        <div className="frame-7-df">
          <img className="XG-logo-df" alt="Xg logo df" src="/img/xg-logo.png" />
          <div className="sections-df">
          <div className="div-4-df">
                <div className="text-wrapper-51-df">PRODUCTS</div>
                <a href="/platform" className="text-wrapper-52-df">Platform</a>
                <a href="/hosted-checkout" className="text-wrapper-52-df">Hosted Checkout</a>
                <a href="/cashback-rewards" className="text-wrapper-52-df">Cashback Rewards</a>
                <a href="/loyalty" className="text-wrapper-52-df">Loyalty</a>
            </div>
            <div className="div-4-df">
                <div className="text-wrapper-51-df">COMPANY</div>
                <a href="/about-us" className="text-wrapper-52-df">About Us</a>
                <a href="/become-a-partner" className="text-wrapper-52-df">Become a Partner</a>
            </div>
            <div className="div-4-df">
                <div className="text-wrapper-51-df">RESOURCES</div>
                <a href="/blog" className="text-wrapper-52-df">Blog</a>
                <a href="/help-guide" className="text-wrapper-52-df">Help Guide</a>
                <a href="/documentation" className="text-wrapper-52-df">Documentation</a>
                <a href="/contact-us" className="text-wrapper-52-df">Contact Us</a>
                <a href="/contact-sales" className="text-wrapper-52-df">Contact Sales</a>
                <a href="/privacy-terms" className="text-wrapper-52-df">Privacy &amp; Terms</a>
                <a href="/sitemap" className="text-wrapper-52-df">Sitemap</a>
            </div>
            <div className="follow-us-df">
              <div className="follow-us-2-df">
                <div className="text-wrapper-53-df">contact@xion.global</div>
                <div className="social-df">

                <Telegram className="telegram-footer telegram-footer-instance-df" property1="default" propertyDefault="/img/telegramwhite.png" onClick={() => handleSocialMediaClick("https://t.me/xionglobal")} />
                <Twitter className="twitter-footer twitter-footer-instance-df" property1="default" propertyDefault="/img/property-1-variant2-6.png" onClick={() => handleSocialMediaClick("https://twitter.com/xionglobal")} />
                <Medium className="medium-footer medium-footer-instance-df" property1="default" propertyDefault="/img/property-1-variant2-5.png" onClick={() => handleSocialMediaClick("https://xionglobal.medium.com")} />
                <Linkedin className="linkedin-footer linkedin-footer-instance-df" property1="default" propertyDefault="/img/property-1-variant2-3.png" onClick={() => handleSocialMediaClick("https://www.linkedin.com/company/xionglobal")}/>
                </div>
                <div className="text-wrapper-54-df">FOLLOW US</div>
              </div>
              <div className="t-cs-df">
                <div className="overlap-group-11-df">
                  <div className="text-wrapper-55-df">©2023 Purple Origin Ltd.</div>
                  <div className="all-rights-reserved-df">All Rights Reserved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
