import React, { useEffect, useState, useCallback } from "react";
import { FooterDesktop } from "../../../desktopcomponents/FooterDesktopMain/FooterDesktop";
import { NavbarDesktop } from "../../../desktopcomponents/NavBarDesktopMain";
import "./style.css";

export const HCD = () => {
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
    <div className="HC-d">
      <div className="BG-elements">
        <div className="overlap-4">
          <div className="hero">
            <div className="overlap-5">
              <img className="rectangle-9" alt="Rectangle" src="/img/hero-hc.png" />
            </div>
          </div>
          <img className="noize" alt="Noize" src="/img/noize.png" />
        </div>
      </div>
      <img className="nav-spacer" alt="Nav spacer" src="/img/nav-spacer.png" />
      <NavbarDesktop onGetStartedClick={handleGetStartedClick} />
      <div className="main">
        <div className="overlap-6">
          <div className="text-block">
            <div className="HT">
              <div className="a-SIMPLE">A SIMPLE &amp;</div>
              <img className="FREE-SIMPLE" alt="Free SIMPLE" src="/img/free-simple.png" />
              <div className="payment-solution-you">FOR CUSTOMERS</div>
            </div>
            <p className="p">
              Introducing the 1st global shopping account for 1-click checkouts! Simply login with an existing Web3 wallet or create an account with Google
              or email and shop hassle-free globally. The future of Web3 payments is here!
            </p>
          </div>
          <img className="element-of" alt="Element of" src="/img/2020-01-04-3-of-23-1.png" />
        </div>
      </div>
      <div className="section">
        <div className="TEXT-BLOCK">
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">ONE</div>
              <div className="text-wrapper-16">ACCELERATED ACCOUNT CREATION</div>
            </div>
            <p className="text-wrapper-17">
              Create a universal shopping account in seconds with Xion! Use Web3 wallet, Google, or Email to get your
              digital wallet for quick checkout at any store, from any device. Simplify payments with Xion&#39;s payment
              gateway.
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">TWO</div>
              <p className="text-wrapper-16">SAVED DETAILS - PURCHASE PRODUCTS OFF ANY STORE</p>
            </div>
            <p className="text-wrapper-17">
              Streamlined checkout! No more entering shipping, contact, or card details for each order. Saved info for
              every purchase &amp; use the same account across online stores. Boost conversions &amp; save time!
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">THREE</div>
              <div className="text-wrapper-16">REAL-TIME WORLDWIDE TRANSACTIONS</div>
            </div>
            <p className="text-wrapper-17">
              Xion&#39;s global payment app - Anyone, anywhere can use it! No limitations, real-time transactions, and
              instant payments worldwide!
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">FOUR</div>
              <p className="text-wrapper-16">STABLE AND SECURE CRYPTO PAYMENTS</p>
            </div>
            <p className="text-wrapper-17">
              Merchants get paid in USDT stablecoin via Xion’s platform - secure, stable, and transparent! No volatility
              worries - 1 USDT = 1 USD. No chargebacks, no middlemen - stay in control of your funds!
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">FIVE</div>
              <p className="text-wrapper-16">SMOOTH WEB 2.0 TO WEB 3.0 TRANSITION</p>
            </div>
            <p className="text-wrapper-17">
              Buy products, services, or subscriptions using crypto - it&#39;s as easy as traditional checkouts! Embrace
              the decentralized world and take back control with Xion&#39;s payment platform. Experienced crypto users
              can enjoy various supported cryptos for quick checkout.
            </p>
          </div>
          <img className="line-3" alt="Line" src="/img/line-18.png" />
          <div className="TEXT">
            <div className="frame-3">
              <div className="text-wrapper-15">SIX</div>
              <p className="text-wrapper-16">UPSELL AND ALLOW CUSTOMERS TO MANAGE THEIR ORDERS</p>
            </div>
            <p className="text-wrapper-17">
              Create a universal shopping account in seconds with Xion! Use Web3 wallet, Google, or Email to get your
              digital wallet for quick checkout at any store, from any device. Simplify payments with Xion&#39;s payment
              gateway.
            </p>
          </div>
          
        </div>
            <video className="frame-4" autoplay muted loop src="/img/Flow1w.webm" type="video/webm">
            </video>

        <div className="group-9">
        <video className="group-2" autoplay muted loop src="/img/Flow2w.webm" type="video/webm">
            </video>
        </div>
        <div className="overlap-wrapper">
        <video className="overlap-7" autoplay muted loop src="/img/Flow3w.webm" type="video/webm">
            </video>
        </div>
    
        <video className="frame-lock" autoplay muted loop src="/img/Flow5w.webm" type="video/webm">
            </video>

        <video className="component-4" autoplay muted loop src="/img/Flow4w.webm" type="video/webm">
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
        <img className="line-4" alt="Line" src="/img/desktop-line-23.svg" />
      </div>
      <FooterDesktop onGetStartedClick={handleGetStartedClick} />
      </div>
  );
};
