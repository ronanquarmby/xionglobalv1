import React, { useEffect, useState, useCallback } from "react";
import { FooterIpad } from "../../../ipadcomponents/FooterIpadMain";
import { NavbarIpad } from "../../../ipadcomponents/NavBarIpadMain";  
import "./style.css";

export const CBI = () => {
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

        useEffect(() => {
          // Array of class names for the videos
          const videoClassNames = [".frame-4", ".group-9", ".overlap-7", ".component-3", ".group-2", ".frame-lock", ".component-4"];
      
          videoClassNames.forEach(className => {
              const videoPlayer = document.querySelector(className);
      
              function loadMedia() {
                  if (mediaPlayed) return;
                  videoPlayer.style.display = "inline";
                  videoPlayer.play();
                  setMediaPlayed(true);
              }
      
              videoPlayer.oncanplay = loadMedia;
      
              videoPlayer.addEventListener('ended', function() {
                  // Handle what happens when the video ends, if needed
              });
          });
      
      }, [mediaPlayed]);

  return (
    <div className="CB-i">
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
      <div className="main">
        <div className="overlap-6">
          <div className="text-block">
            <div className="HT">
              <div className="a-SIMPLE">DISCOVER THE</div>
              <div className="FREE-SIMPLE" >POWER OF CASHBACK</div>
              <div className="payment-solution-you">FOR CUSTOMERS</div>
            </div>
            <p className="p">
              We&#39;re revolutionizing the way you shop in Web3. Dive into our unique cashback system that not only
              rewards customers but also ensures a seamless shopping experience.
            </p>
          </div>
          <img className="element-of" alt="Element of" src="/img/cashback-phone-i.png" />
        </div>
      </div>
      <div className="section"> 
        <div className="TEXT-BLOCK">
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">ONE</div>
              <div className="text-wrapper-16">CRYPTO-POWERED PURCHASES</div>
            </div>
            <p className="text-wrapper-17">
              Shop using your favourite cryptocurrencies and earn up to a whopping 100% cashback in Xion Global Tokens
              (XGT)
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">TWO</div>
              <p className="text-wrapper-16">EXTENDED CASHBACK DISTRIBUTION</p>
            </div>
            <p className="text-wrapper-17">
              Your cashback isn&#39;t a one-time deal. Enjoy your XGT rewards spread over 12 months, with increments
              added to your account every minute.
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">THREE</div>
              <div className="text-wrapper-16">VERSATILE REWARDS</div>
            </div>
            <p className="text-wrapper-17">
              Use your XGT cashback to buy more products at any time or keep them stashed to unlock special subscription
              loyalty coupons for even more savings.
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">FOUR</div>
              <p className="text-wrapper-16">DYNAMIC REWARD LEVELS</p>
            </div>
            <p className="text-wrapper-17">
              Your cashback potential grows with the platform. The more funds that are locked in the XGT pools, the
              bigger the cashback rewards. From $300k TVL giving up to $3000 in XGT cashback to $1.5m TVL unlocking up
              to $100,000 in cashback worth of XGT, the sky&#39;s the limit.
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">FIVE</div>
              <p className="text-wrapper-16">ADAPTIVE BONDING CURVE</p>
            </div>
            <p className="text-wrapper-17">
              We&#39;re in it for the long haul. After the 100% cashback levels are reached, Xion’s bonding curve
              ensures the sustainability of rewards, adjusting cashback percentages based on demand and platform growth.
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">SIX</div>
              <p className="text-wrapper-16">EXPERIENCE IT YOURSELF!</p>
            </div>
            <p className="text-wrapper-17">
              If it sounds too good to be true, we invite you to try it firsthand. Offer unparalleled cashback to your
              customers and watch your business transform. With Xion Global, it&#39;s not just shopping; it&#39;s an
              experience.
            </p>
          </div>
          </div>
            <video className="frame-4" autoplay muted loop src="/img/Flow7w.webm" type="video/webm">
            </video>

        <div className="group-9">
        <video className="group-2" autoplay muted loop src="/img/Flow8w.webm" type="video/webm">
            </video>
        </div>
        <div className="overlap-wrapper">
        <video className="overlap-7" autoplay muted loop src="/img/Flow9w.webm" type="video/webm">
            </video>
        </div>
    
        <video className="frame-lock" autoplay muted loop src="/img/Flow10w.webm" type="video/webm">
            </video>

        <video className="component-4" autoplay muted loop src="/img/Flow11w.webm" type="video/webm">
            </video>

      <video className="component-3" autoplay muted loop src="/img/Flow6w.webm" type="video/webm">
            </video>

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
        <img className="line-4" alt="Line" src="/img/line-23-ipad.svg" />
      </div>
      <FooterIpad onGetStartedClick={handleGetStartedClick} />
      </div>
  );
};
