import React from "react";
import { useCallback } from "react";
import { FooterMobile } from "../../../mobilecomponents/FooterMobileMain";
import { NavbarMobile } from "../../../mobilecomponents/NavBarMobileMain";  
import "./style.css";

export const LoyaltyMobile = () => {

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
    <div className="Loyalty-m">
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
          <div className="text-block">
            <div className="HT">
              <div className="a-SIMPLE">OFFER</div>
              <div className="FREE-SIMPLE">LIFETIME DISCOUNTS</div>
              <p className="payment-solution-you">
              <span className="a-SIMPLE">TO RETAIN </span>
              <span className="a-SIMPLE">CUSTOMERS &amp;</span>
              <span className="a-SIMPLE"> PREDICT REVENUE</span> 
              </p>
            </div>
            <p className="p">
            We&#39;re revolutionizing the way you shop in Web3. Dive into our unique cashback system that not only
            rewards customers but also ensures a seamless shopping experience.
            </p>
          </div>
        </div>
      <div className="section"> 
        <div className="TEXT-BLOCK">
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">ONE</div>
              <div className="text-wrapper-16">ADD A LOYALTY PROGRAM IN 1-CLICK</div>
            </div>
            <p className="text-wrapper-17">
              Boost customer lifetime value, renewal, and retention with an activated loyalty program on your
              subscription checkout buttons. Offer lifetime discounts, compounding with each billing, encouraging
              customers to stay subscribed for more significant discounts over time. <br />
              The longer they stay, the more they save!
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">TWO</div>
              <p className="text-wrapper-16">CUSTOMERS &amp; MERCHANTS SAVE BIG</p>
            </div>
            <p className="text-wrapper-17">
              Use the loyalty program discount calculator to show customers their daily, weekly, monthly, or yearly
              savings. Keep them subscribed with increasing discounts over time for better revenue and reduced
              acquisition costs.
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">THREE</div>
              <div className="text-wrapper-16">PREDICT YOUR RECURRING REVENUE WITH DISCOUNTS</div>
            </div>
            <p className="text-wrapper-17">
              With Xion&#39;s discount calculator: Configure discounts for subscriptions to boost revenue and manage
              customer payments effortlessly. Increase visibility of committed and pipeline revenue streams, improve
              cash flow management, and eliminate forecasting headaches.
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">FOUR</div>
              <p className="text-wrapper-16">SUBSCRIPTION DISCOUNT LEVELS</p>
            </div>
            <p className="text-wrapper-17">
              With six discount levels the more XGT held in your Xion/Torus wallet the bigger the&nbsp;&nbsp;discounts
              on recurring billing payments. Ensure continuous compounded subscription discounts by maintaining
              sufficient XGT balance.
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">FIVE</div>
              <p className="text-wrapper-16">HOW TO GET DISCOUNTS OFF EVERY RECURRING BILLING CHARGE</p>
            </div>
            <p className="div-8">
              <span className="text-wrapper-17">
                How it works:
                <br />
                <br />
                Head to the “Loyalty Program” page on the platform.
                <br />
                Select a level of discount you want off every recurring billing charge.
                <br />
                Click “
              </span>
              <span className="text-wrapper-119">Buy XGT with USDT</span>
              <span className="text-wrapper-17">
                ” to activate the selected loyalty program level.
                <br />
                Head to the Xion Finance marketplace to purchase a loyalty activated subscription.
                <br />
                Hold onto that XGT to receive compounded discounts.
                <br />
                <br />
                If you decide to withdraw your XGT from your account, then your discount will be reset.
              </span>
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" /> 
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">SIX</div>
              <p className="text-wrapper-16">HOW XGT DISCOUNTS WORK</p>
            </div>
            <p className="text-wrapper-17">
              Once you have your XGT and level activated, you will qualify for a certain level of discount. Every time
              your subscription payment goes off, your XGT will automatically be sent to the merchant, in order to
              receive a compounded discount.
            </p>
          </div>
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
