import React from "react";
import { Telegram } from "../../screens/MobileMenuMain/components/Telegram";
import { Twitter } from "../../screens/MobileMenuMain/components/Twitter";
import { Medium } from "../../screens/MobileMenuMain/components/Medium";
import { Linkedin } from "../../screens/MobileMenuMain/components/Linkedin";
import "./style.css"; // You can include any necessary styling here

export const FooterMobile = ({ onGetStartedClick }) => {

    const handleSocialMediaClick = (url) => {
        console.log("handleSocialMediaClick called with URL:", url);
        window.open(url, "_blank");

      };    

  return (
    <div className="mf-container">
      <div className="start-mf">
        <div className="overlap-group-mf">
          <img className="gradient-mf" alt="Gradient" src="/img/gradient-5.png" />
        </div>
        <div>
          <div className="start-section-mf">
            <div className="overlap-13-mf">
            <img className="phone-image-mf" alt="Phone image mf" src="/img/phone-image.png" />
          <div className="text-wrapper-47-mf">START</div>
          <div className="text-wrapper-48-mf">FREE TODAY!</div>
          </div>
      <div className="footer-section-mf">
        <img className="footer-mf" alt="Footer mf" src="/img/footer-2.png" />
          <img className="XG-logo-mf" alt="Xg logo mf" src="/img/xg-logo-2.png" />
            <div className="follow-us-mf">
              <div className="follow-us-2-mf">
              <div className="overlap-group-9-mf">
              <div className="text-wrapper-49-mf">©2023 Xion Global</div>
                  <div className="all-rights-reserved-mf">All Rights Reserved</div>
                  </div>
                <div className="text-wrapper-50-mf">contact@xion.global</div>
                <div className="social-mf">
                <Telegram className="telegram-footer telegram-footer-instance-mf" property1="default" propertyDefault="/img/telegramwhite.png" onClick={() => handleSocialMediaClick("https://t.me/xionglobal")} />
                <Twitter className="twitter-footer twitter-footer-instance-mf" property1="default" propertyDefault="/img/property-1-variant2-6.png" onClick={() => handleSocialMediaClick("https://twitter.com/xionglobal")} />
                <Medium className="medium-footer medium-footer-instance-mf" property1="default" propertyDefault="/img/property-1-variant2-5.png" onClick={() => handleSocialMediaClick("https://xionglobal.medium.com")} />
                <Linkedin className="linkedin-footer linkedin-footer-instance-mf" property1="default" propertyDefault="/img/property-1-variant2-3.png" onClick={() => handleSocialMediaClick("https://www.linkedin.com/company/xionglobal")}/>
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
