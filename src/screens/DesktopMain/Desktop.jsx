import React from "react";
import { useState } from "react";
import { NavbarDesktop } from "../../desktopcomponents/NavBarDesktopMain";
import { useCallback } from "react";
import { Carousel } from "../../desktopcomponents/CarouselDesktop";
import { CsButton } from "../../desktopcomponents/CsButtonDesktop";
import { Element } from "../../desktopcomponents/ElementDesktop";
import { GsButton } from "../../desktopcomponents/GsButtonDesktop";
import { ReadButton } from "../../desktopcomponents/ReadButtonDesktop";
import { TypeAnimation } from "react-type-animation";
import { FooterDesktop } from "../../desktopcomponents/FooterDesktopMain/FooterDesktop";
import "./style.css";

export const Desktop = () => {

      // Define the onClick event handler function
      const handleGetStartedClick = useCallback(() => {
        // Open a new tab with the specified URL
        window.open("https://xionpay.app", "_blank");
      }, []);
      
  const [selectedImage, setSelectedImage] = useState("/img/asset-5-8.png"); // Default image URL

  return (
    <div className="element-d">
      <div className="BG-elements">
        <div className="overlap">
          <div className="element-ipad-d">
            <div className="overlap-2">
              <img className="img" alt="Rectangle" src="/img/rectangle-1959.png" />
              <img className="img-2" alt="Gradient" src="/img/gradient-1.png" />
              <img className="img-2" alt="Mouse" src="/img/mouse-1.png" />
            </div>
          </div>
          <div className="decrease">
            <div className="overlap-3">
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-1958.png" />
              <img className="mouse-2" alt="Mouse" src="/img/mouse-6.png" />
            </div>
          </div>
          <div className="hero">
            <div className="overlap-4">
              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-1957.png" />
              <img className="gradient-2" alt="Gradient" src="/img/gradient-2.png" />
              <img className="mouse-3" alt="Mouse" src="/img/mouse-7.png" />
            </div>
          </div>
          <img className="noize" alt="Noize" src="/img/noize.png" />
        </div>
      </div>
      <img className="nav-spacer" alt="Nav spacer" src="/img/nav-spacer.png" />
      <NavbarDesktop onGetStartedClick={handleGetStartedClick} />
      <div className="landing-p-section">
        <div className="logos">
          <img className="asset-2" alt="Asset" src="/img/asset-116-8-1.png" />
          <img className="asset-3" alt="Asset" src="/img/asset-116-8-2.png" />
          <img className="asset-4" alt="Asset" src="/img/blocksport-logo.png" />
          <img className="asset-5" alt="Asset" src="/img/asset-116-8-4.png" />
          <img className="asset-6" alt="Asset" src="/img/asset-116-8-6.png" /> 
        </div>
        <p className="TRUSTED-BY">
          <span className="span">TRUSTED </span>
          <span className="text-wrapper-3">BY</span>
        </p>
        <TypeAnimation
                    sequence={[
                      "A Global Payment Network Built on Trust and Accessibility",
                      3000, // wait 1s before typing the second sentence
                      "Send, Receive, Manage and Reward Money Globally",
                      3000, // wait 1s before typing the third sentence
                      "Your Passport to Decentralized Financial Freedom",
                      3000,
                    ]}
                    wrapper="p"
                    speed={50}
                    className="text-wrapper-4"
                    repeat={Infinity}
                  />
        <div className="element-menu">
          <div className="INCREASING-REVENUE-wrapper">
            <div className="text-wrapper-5">INCREASE REVENUE</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-5">CUT YOUR COSTS</div>
          </div>
          <div className="div-wrapper">
            <div className="SEAMLESS">QUICK INTEGRATION</div>
          </div>
          <div className="div-wrapper">
            <div className="BUILDING-LOYALTY">BUILD LOYALTY</div>
          </div>
        </div>
        <p className="PAYMENTS-REWARDS">
          <span className="text-wrapper-6">PAYMENTS &amp; REWARDS </span>
          <span className="text-wrapper-7">EASY!</span>
        </p>
        <p className="MAKIN-CRYPTO">
          <span className="text-wrapper-8">MAKIN’</span>
          <span className="text-wrapper-9">&nbsp;</span>
          <span className="text-wrapper-10">CRYPTO</span>
        </p>
      </div>
      <div className="top-ipad-section">
        <div className="overlap-5">
          <img className="bottom-left-shadow" alt="Bottom left shadow" src="/img/bottom-left-shadow.png" />
          <Element
          />
          <div className="WITH-OUR-FREE-SIMPLE">
            <div className="overlap-6">
              <div className="text-wrapper-11">WITH XION’S</div>
              <div className="frame">
                <div className="overlap-group-3">
                  <p className="payment-solution-you">
                    <span className="text-wrapper-12">PAYMENT SOLUTION </span>
                    <span className="text-wrapper-13">YOU CAN</span>
                  </p>
                  <div className="FREE-SIMPLE">FREE &amp; SIMPLE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wallet-section">
        <div className="overlap-7">
          <img className="wallet-image" alt="Wallet image" src="/img/wallet-image.png" />
          <div className="text-block">
            <p className="a-SEAMLESS-SUITE-OF">
              <span className="text-wrapper-14">
                A SEAMLESS SUITE OF 
                <br />
                WEB3 PAYMENT PRODUCTS
                <br />
              </span>
              <span className="text-wrapper-16">
                ALL IN ONE PLACE
                <br />
                <br />
                <br />
              </span>
            </p>
            <p className="text-wrapper-17">
              Reduce costs, boost revenue, and streamline your business with Xion’s all-in-one payment solution. Unleash
              new business models and enjoy seamless payment processing, revenue management, and integrations.
            </p>
            <div className="frame-2">
              <div className="text-wrapper-18">Powering Crypto Payments</div>
              <p className="text-wrapper-19">For In-Person Retailers, Gaming, Marketplaces and More</p>
            </div>
            <div className="frame-2">
              <div className="text-wrapper-18">Decentralised Payment Products</div>
              <div className="text-wrapper-19">Available globally</div>
            </div>
          </div>
        </div>
      </div>
      <div className="currencies-section">
        <div className="crystal">
          <div className="overlap-group-4">
            <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-1245.png" />
            <div className="text-wrapper-20">Crystal Expert</div>
          </div>
          <p className="POWERED-BY">
            <span className="span">POWERED </span>
            <span className="text-wrapper-21">BY</span>
          </p>
        </div>
        <div className="element-black-text-blocks">
          <div className="b">
            <div className="overlap-8">
              <div className="element-button">
                <div className="overlap-group-5">
                  <div className="rectangle-5" />
                  <div className="rectangle-6" />
                </div>
              </div>
              <p className="text-wrapper-22">
                Our proprietary data-driven compliance process evolves staying ahead of fraudulent activities.
              </p>
              <div className="text-wrapper-23">Proprietary Screening:</div>
            </div>
          </div>
          <div className="b">
            <div className="overlap-8">
              <div className="element-button">
                <div className="overlap-group-5">
                  <div className="rectangle-5" />
                  <div className="rectangle-6" />
                </div>
              </div>
              <p className="we-adhere-to-BSA-CIP">
                We adhere to BSA (CIP/KYC/AML) requirements &amp; have a rules-based, automated verification &amp;
                compliance.
              </p>
              <div className="text-wrapper-24">Risk-Prevention:</div>
            </div>
          </div>
          <div className="b">
            <div className="overlap-8">
              <div className="element-button">
                <div className="overlap-group-5">
                  <div className="rectangle-5" />
                  <div className="rectangle-6" />
                </div>
              </div>
              <p className="our-screening">
                Our screening process is simple, quick, &amp; frictionless, ensuring the safety &amp; satisfaction at
                all times.
              </p>
              <div className="text-wrapper-25">Goldilocks Standard:</div>
            </div>
          </div>
        </div>
        <div className="security-text">
          <p className="text-wrapper-26">
            We take compliance seriously and utilise cutting-edge technology along with a comprehensive set of data
            sources to deliver effective fraud protection and financial crime detection at scale. Our global coverage
            includes onboarding and supporting both US and non-US accounts, utilising proprietary integrations with
            jurisdiction-specific data sources and verification methods.
          </p>
          <p className="SECURITY-AND">
            <span className="span">SECURITY </span>
            <span className="text-wrapper-27">AND COMPLIANCE ABOVE ALL</span> 
          </p>
        </div>
        <div className="overlap-9"> 
          <Carousel
            className="carousel-instance"
            slide="five"
            slidesBox="/img/slides-box.png"
            slidesNavigationClassName="design-component-instance-node"
          />
        </div>
        <div className="text-header">
          <p className="expand-your-reach">
            <span className="text-wrapper-28">
              Expand your reach and embrace the flexibility of multi-chain acceptance, all while enjoying the stability
              and convenience of receiving payments in stable{" "}
            </span>
            <span className="text-wrapper-29">USDT</span>
            <span className="text-wrapper-28">.</span>
          </p>
          <header className="header">
            <p className="GET-PAID-IN">
              <span className="text-wrapper-30">GET PAID IN</span>
              <span className="text-wrapper-31">&nbsp;</span>
            </p>
            <div className="text-wrapper-32">POPULAR CURRENCIES</div>
          </header>
        </div>
      </div>
      <div className="costs-section">
        <p className="text-wrapper-33">There we said it in black and white</p>
        <div className="element-white-blocks">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-6">
              <div className="shadows" />
              <div className="text-wrapper-34">No Middlemen</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-6">
              <div className="shadows-2" />
              <div className="text-wrapper-35">0% Transaction Fees</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-6">
              <div className="shadows-2" />
              <div className="text-wrapper-36">No Chargebacks</div>
            </div>
          </div>
        </div>
        <div className="header-text">
          <p className="cut-your-transaction">
            Cut your transaction fees to less than a cent. <br />
            Making micro transactions the new norm saving you every cent on every transaction.
          </p>
          <p className="DECREASE-YOUR-COSTS">
            <span className="span">DECREASE </span>
            <span className="text-wrapper-37">YOUR COSTS!</span>
          </p>
        </div>
      </div>
      <div className="bottom-ipad-section">
        <div className="overlap-10">
          <ReadButton className="read-button-instance" property1="default" />
          <div className="overlap-wrapper">
            <div className="overlap-11">
              <div className="group">
                <div className="overlap-group-7">
                  <img className="shadows-3" alt="Shadows" src="/img/shadows.png" />
                  
                </div>
              </div>
              <img className="API-GIF-SCREEN" alt="Api GIF SCREEN" src="/img/IpadAPIPlayground.gif" />
            </div>
          </div>
        </div>
        <div className="text-block-2">
          <div className="frame-4">
            <div className="SUPERCHARGING-CRYPTO">
              SUPERCHARGING
              <br />
              CRYPTO PAYMENTS
            </div>
            <p className="WITH-STATE-OF-THE">
              <span className="text-wrapper-39">WITH </span>
              <span className="text-wrapper-38">STAT</span>
              <span className="text-wrapper-39">E-</span>
              <span className="text-wrapper-38">O</span>
              <span className="text-wrapper-39">F-</span>
              <span className="text-wrapper-38">TH</span>
              <span className="text-wrapper-39">E-</span>
              <span className="text-wrapper-38">
                ART
                <br />
                XION API TOOLS
              </span>
            </p>
          </div>
          <div className="frame-5">
            <p className="API-integration">
              <span className="text-wrapper-29">
                API Integration
                <br />
              </span>
              <span className="text-wrapper-40">Integrate APIs into a wide range of tech stacks </span>
              <span className="text-wrapper-41">with custom workflows &amp; payment types.</span>
            </p>
            <p className="div-2">
              <span className="text-wrapper-29">
                SDK Integration
                <br />
              </span>
              <span className="text-wrapper-40">Elevate crypto payments with multi-language </span>
              <span className="text-wrapper-41">
                SDKs enabling seamless integration and unlocking advanced functionality.{" "}
              </span>
            </p>
            <p className="div-2">
              <span className="text-wrapper-29">
                iFrame Integration
                <br />
              </span>
              <span className="text-wrapper-40">Embed an intuitive iFrame into any website or </span>
              <span className="text-wrapper-41">
                application with just a few lines of code integrating with any existing user interface.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="iframe-section">
        <div className="overlap-12">
          <div className="right-text">
            <img className="xionpay" alt="Xionpay" src="/img/xionpay.png" />
            <div className="text-wrapper-42">OUR CHECKOUT</div>
          </div>
          <div className="phone">
            <div className="overlap-group-8">
              <img className="shadows-4" alt="Shadows" src="/img/shadows-1.png" />
              <div className="frame-6" />
              <div className="IFRAME-TO-PLACE" />
              <img className="i-f" alt="I f" src="/img/if.png" />
            </div>
          </div>
        </div>
        <div className="left-text">
          <img className="line" alt="Line" src="/img/line-22.png" />
          <div className="text-wrapper-43">HAVE A GO WITH</div>
        </div>
      </div>
      <div className="loyalty-CTA-section">
        <div className="CTA-section">
          <img className="CTA-shaddow" alt="Cta shaddow" src="/img/cta-shaddow.png" />
          <p className="enjoy-the-freedom-of">
            Enjoy the freedom of frictionless payments
            <br />
            with XionPay today!
          </p>
          <div className="CTA-buttons">
            <GsButton property1="default" />
            <CsButton property1="default" />
          </div>
        </div>
        <div className="loyalty-section">
          <div className="element-black-blocks">
            <div className="b-2">
              <div className="div-3">
                <div className="element-d-button">
                  <div className="overlap-group-9">
                    <div className="rectangle-9" />
                    <div className="rectangle-10" />
                  </div>
                </div>
                <p className="monetize-blogs-apps">
                  Monetize Blogs, Apps, <br />
                  Stores &amp; More
                </p>
              </div>
            </div>
            <div className="div-3">
              <div className="div-3">
                <div className="element-d-button">
                  <div className="overlap-group-9">
                    <div className="rectangle-9" />
                    <div className="rectangle-10" />
                  </div>
                </div>
                <p className="works-with-any-all">Works With Any &amp; All Existing Platforms</p>
              </div>
            </div>
            <div className="b-3">
              <div className="div-3">
                <div className="element-d-button">
                  <div className="overlap-group-9">
                    <div className="rectangle-9" />
                    <div className="rectangle-10" />
                  </div>
                </div>
                <p className="activate-loyalty">
                  Activate Loyalty With <br />A Click Of A Button
                </p>
              </div>
            </div>
          </div>
          <p className="strengthen-your">
            Strengthen your customer retention and secure your revenue flow with Xion&#39;s innovative Loyalty program.
            <br />
            Where customers pay less, stay longer, and spend more.
          </p>
          <div className="headline">
            <div className="text-wrapper-44">LOYALTY</div>
            <div className="text-wrapper-45">WITH SUBSCRIPTION!</div>
          </div>
        </div>
      </div>
      <div className="cash-back-section">
        <div className="overlap-13">
          <div className="copy-block">
            <div className="CASH-BACK">
              <div className="text-wrapper-46">CASH BACK</div>
              <div className="text-wrapper-47">ON SHOPPING!</div>
            </div>
            <p className="text-wrapper-48">
              Purchase a product from any Xion Merchant and get up to100% cash back in crypto. Sound too good to be
              true? Try it out for yourself and see the power of cash back rewards with XionPay!
            </p>
          </div>
          <img className="cash-back-image" alt="Cash back image" src="/img/cash-back-image.png" />
        </div>
      </div>
      <FooterDesktop onGetStartedClick={handleGetStartedClick} />
        </div>
  );
};