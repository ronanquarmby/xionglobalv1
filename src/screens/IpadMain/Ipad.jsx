import React from "react";
import { useCallback } from "react";
import { Carousel } from "../../ipadcomponents/CarouselIpad";
import { CsButton } from "../../ipadcomponents/CsButtonIpad";
import { Element } from "../../ipadcomponents/ElementIpad";
import { GsButton } from "../../ipadcomponents/GsButtonIpad";
import { ReadButton } from "../../ipadcomponents/ReadButtonIpad";
import "./style.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { NavbarIpad } from "../../ipadcomponents/NavBarIpadMain";
import { FooterIpad } from "../../ipadcomponents/FooterIpadMain"

export const Ipad = () => {

    // Define the onClick event handler function
    const handleGetStartedClick = useCallback(() => {
      // Open a new tab with the specified URL
      window.open("https://xionpay.app", "_blank");
    }, []);


  return (
    <div className="element-ipad">
      <div className="BG-elements">
        <div className="overlap">
          <div className="element-nd-ipad">
            <div className="overlap-2">
              <img className="img" alt="Rectangle" src="/img/rectangle-1959-1.png" />
              <img className="gradient-2" alt="Gradient" src="/img/gradient-4.png" />
              <img className="mouse-2" alt="Mouse" src="/img/mouse-3.png" />
            </div>
          </div>
          <div className="decrease">
            <div className="overlap-3">
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-1958-1.png" />
              <img className="mouse-3" alt="Mouse" src="/img/mouse-4.png" />
            </div>
          </div>
          <div className="hero">
            <div className="overlap-4">
              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-1957-1.png" />
              <img className="gragient" alt="Gragient" src="/img/gragient.png" />
              <img className="mouse-4" alt="Mouse" src="/img/mouse-5.png" />
            </div>
          </div>
          <img className="noize" alt="Noize" src="/img/noize-1.png" />
        </div>
      </div>
      <img className="nav-spacer" alt="Nav spacer" src="/img/nav-spacer-1.png" />
      <NavbarIpad onGetStartedClick={handleGetStartedClick} />
      <div className="landing-p-section">
        <div className="overlap-5">
          <div className="logos">
            <img className="asset-2" alt="Asset" src="/img/asset-116-8-1-1.png" />
            <img className="asset-3" alt="Asset" src="/img/asset-116-8-2-1.png" />
            <img className="asset-4" alt="Asset" src="/img/blocksport-logo.png" />
            <img className="asset-5" alt="Asset" src="/img/asset-116-8-4-1.png" />
            <img className="asset-6" alt="Asset" src="/img/asset-116-8-6-1.png" />
          </div>
          <p className="TRUSTED-BY">
            <span className="span">TRUSTED </span>
            <span className="text-wrapper-3">BY</span>
          </p>
        </div>
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
          <div className="div-wrapper">
            <div className="text-wrapper-5">INCREASE REVENUE</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-5">CUT YOUR COSTS</div>
          </div>
          <div className="element-2">
            <div className="SEAMLESS">QUICK INTEGRATION</div>
          </div>
          <div className="element-2">
            <div className="BUILDING-LOYALTY">BUILD LOYALTY</div>
          </div>
        </div>
        <div className="overlap-6">
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
      </div>
      <div className="top-ipad-section">
        <div className="overlap-7">
          <img className="bottom-left-shadow" alt="Bottom left shadow" src="/img/bottom-left-shadow-1.png" />
          <Element
          />
          <div className="WITH-OURFREE-SIMPLE">
            <div className="overlap-8">
              <div className="text-wrapper-11">WITH XION’S</div>
              <p className="payment-solution-you">
                <span className="text-wrapper-12">PAYMENT SOLUTION </span>
                <span className="text-wrapper-13">YOU CAN</span>
              </p>
              <div className="FREE-SIMPLE">FREE &amp; SIMPLE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="wallet-section">
        <img className="wallet-image" alt="Wallet image" src="/img/wallet-image-1.png" />
        <div className="text-block">
          <p className="a-SEAMLESS-SUITE-OF">
          <span className="text-wrapper-14">
                A SEAMLESS SUITE OF 
                <br /> 
                WEB3 PAYMENT PRODUCTS
                <br />
              </span>
              <span className="text-wrapper-15">
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
          <div className="frame">
            <div className="text-wrapper-18">Powering Crypto Payments</div>
            <p className="text-wrapper-19">For In-Person Retailers, Gaming, Marketplaces and More</p>
          </div>
          <div className="frame">
            <div className="text-wrapper-18">Decentralised Payment Products</div>
            <div className="text-wrapper-19">Available globally</div>
          </div>
        </div>
      </div>
      <div className="currencies-section">
        <div className="crystal-wrapper">
          <div className="crystal">
            <div className="overlap-group-3">
              <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-1245-1.png" />
              <div className="text-wrapper-20">Crystal Expert</div>
            </div>
            <p className="POWERED-BY">
              <span className="span">POWERED</span>
              <span className="text-wrapper-21">&nbsp;</span>
              <span className="text-wrapper-22">BY</span>
            </p>
          </div>
        </div>
        <div className="element-black-blocks">
          <div className="b">
            <div className="overlap-9">
              <div className="element-button">
                <div className="overlap-group-4">
                  <div className="rectangle-5" />
                  <div className="rectangle-6" />
                </div>
              </div>
              <p className="text-wrapper-23">
                Our proprietary data-driven compliance process evolves staying ahead of fraudulent activities.
              </p>
              <div className="text-wrapper-24">Proprietary Screening:</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-9">
              <div className="element-button">
                <div className="overlap-group-4">
                  <div className="rectangle-5" />
                  <div className="rectangle-6" />
                </div>
              </div>
              <p className="we-adhere-to-BSA-CIP">
                We adhere to BSA (CIP/KYC/AML) requirements &amp; have a rules-based, automated verification &amp;
                compliance.
              </p>
              <div className="text-wrapper-25">Risk-Prevention:</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-9">
              <div className="element-button">
                <div className="overlap-group-4">
                  <div className="rectangle-5" />
                  <div className="rectangle-6" />
                </div>
              </div>
              <p className="our-screening">
                Our screening process is simple, quick, &amp; frictionless, ensuring the safety &amp; satisfaction at
                all times.
              </p>
              <div className="text-wrapper-24">Goldilocks Standard:</div>
            </div>
          </div>
        </div>
        <div className="overlap-10">
          <div className="security-header-text">
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
          <Carousel
            className="carousel-instance"
            slide="one"
            slidesBox="/img/slides-box-6.png"
            slidesNavigationClassName="design-component-instance-node"
          />
          <div className="header-text">
            <p className="expand-your-reach">
              <span className="text-wrapper-28">
                Expand your reach and embrace the flexibility of multi-chain acceptance, all while enjoying the
                stability and convenience of receiving payments in stable{" "}
              </span>
              <span className="text-wrapper-29">USDT</span>
              <span className="text-wrapper-28">.</span>
            </p>
            <div className="header">
              <div className="overlap-group-5">
                <div className="GET-PAID-IN">GET PAID IN</div>
                <div className="text-wrapper-30">POPULAR CURRENCIES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="costs-section">
        <p className="text-wrapper-31">There we said it in black and white</p>
        <div className="element-white-blocks">
          <div className="b-2">
            <div className="overlap-group-6">
              <div className="shadows" />
              <div className="text-wrapper-32">No Middlemen</div>
            </div>
          </div>
          <div className="b-2">
            <div className="overlap-group-6">
              <div className="shadows-2" />
              <div className="text-wrapper-33">0% Transaction Fees</div>
            </div>
          </div>
          <div className="b-3">
            <div className="overlap-group-6">
              <div className="shadows-2" />
              <div className="text-wrapper-34">No Chargebacks</div>
            </div>
          </div>
        </div>
        <div className="text-block-2">
          <p className="cut-your-transaction">
            Cut your transaction fees to less than a cent. <br />
            Making micro transactions the new norm saving you every cent on every transaction.
          </p>
          <p className="DECREASE-YOUR-COSTS">
            <span className="span">DECREASE </span>
            <span className="text-wrapper-35">YOUR COSTS!</span>
          </p>
        </div>
      </div>
      <div className="bottom-ipad-section">
        <div className="overlap-13">
          <ReadButton className="read-button-instance" divClassName="read-button-2" property1="default" />
          <div className="ipad-shaddow-2">
            <div className="overlap-14">
              <div className="group">
                <div className="overlap-group-7">
                  <img className="shadows-3" alt="Shadows" src="/img/shadows-2.png" />
                  <div className="frame-2" />
                </div>
              </div>
              <img className="API-GIF-SCREEN" alt="Api GIF SCREEN" src="/img/IpadAPIPlayground.gif" />
            </div>
          </div>
        </div>
        <div className="text-block-3">
          <div className="frame-3">
            <p className="SUPERCHARGING-CRYPTO">
              <span className="text-wrapper-36">
                SUPERCHARGING
                <br />
                CRYPTO PAYMENTS
                <br />
                WITH XION'S
              </span>
              <span className="text-wrapper-37">
                <br />
              </span>
            </p>
            <p className="WITH-STATE-OF-THE">
              <span className="text-wrapper-38">STAT</span>
              <span className="text-wrapper-39">E-</span>
              <span className="text-wrapper-38">O</span>
              <span className="text-wrapper-39">F-</span>
              <span className="text-wrapper-38">TH</span>
              <span className="text-wrapper-39">E-</span>
              <span className="text-wrapper-38">
                ART
                <br />
                API TOOLS
              </span>
            </p>
          </div>
          <div className="frame-4">
            <p className="API-integration">
              <span className="text-wrapper-29">
                API Integration
                <br />
              </span>
              <span className="text-wrapper-40">Integrate APIs into a wide range of tech stacks </span>
              <span className="text-wrapper-41">with custom workflows &amp; payment types.</span>
            </p>
            <p className="SDK-integration">
              <span className="text-wrapper-29">
                SDK Integration
                <br />
              </span>
              <span className="text-wrapper-40">Elevate crypto payments with multi-language </span>
              <span className="text-wrapper-41">
                SDKs enabling seamless integration and unlocking advanced functionality.
              </span>
            </p>
            <p className="iframe-integration">
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
        <div className="overlap-15">
          <div className="right-text">
            <img className="xionpay" alt="Xionpay" src="/img/xionpay-1.png" />
            <p className="OUR-CHECKOUT">
              <span className="text-wrapper-42">OUR</span>
              <span className="text-wrapper-43">&nbsp;</span>
              <span className="text-wrapper-42">CHECKOUT</span>
            </p>
          </div>
          <div className="IPHONE">
            <div className="overlap-16">
              <div className="group-2">
                <div className="frame-wrapper">
                  <div className="frame-5" />
                </div>
              </div>
              <div className="IFRAME-TO-PLACE" />
              <img className="i-f" alt="I f" src="/img/if-1.png" />
            </div>
          </div>
        </div>
        <div className="left-text">
          <img className="line" alt="Line" src="/img/line-22-1.png" />
          <div className="text-wrapper-44">HAVE A GO WITH</div>
        </div>
      </div>
      <div className="loyalty-CTA-section">
        <div className="CTA-section">
          <img className="CTA-shaddow" alt="Cta shaddow" src="/img/cta-shaddow-1.png" />
          <p className="enjoy-the-freedom-of">
            Enjoy the freedom of frictionless payments
            <br />
            with XionPay today!
          </p>
          <div className="CTA-buttons">
            <GsButton
              className="design-component-instance-node-2"
              getStartedClassName="design-component-instance-node-3"
              property1="default"
            />
            <CsButton
              className="design-component-instance-node-2"
              getStartedClassName="design-component-instance-node-3"
              property1="default"
            />
          </div>
        </div>
        <div className="loyalty-section">
          <div className="element-black-blocks-2">
            <div className="b-4">
              <div className="overlap-17">
                <div className="element-d-button">
                  <div className="overlap-group-8">
                    <div className="rectangle-11" />
                    <div className="rectangle-12" />
                  </div>
                </div>
                <p className="monetize-blogs-apps">
                  Monetize Blogs, Apps, <br />
                  Stores &amp; More
                </p>
              </div>
            </div>
            <div className="b-4">
              <div className="overlap-17">
                <div className="element-d-button">
                  <div className="overlap-group-8">
                    <div className="rectangle-11" />
                    <div className="rectangle-12" />
                  </div>
                </div>
                <p className="works-with-any-all">Works With Any &amp; All Existing Platforms</p>
              </div>
            </div>
            <div className="b-4">
              <div className="overlap-17">
                <div className="element-d-button">
                  <div className="overlap-group-8">
                    <div className="rectangle-11" />
                    <div className="rectangle-12" />
                  </div>
                </div>
                <p className="activate-loyalty">
                  Activate Loyalty With <br />A Click Of A Button
                </p>
              </div>
            </div>
          </div>
          <div className="header-text-2">
            <p className="strengthen-your">
              Strengthen your customer retention and secure your revenue flow with Xion&#39;s innovative Loyalty
              program.
              <br />
              Where customers pay less, stay longer, and spend more.
            </p>
            <div className="header-2">
              <div className="text-wrapper-45">LOYALTY</div>
              <div className="text-wrapper-46">WITH SUBSCRIPTION!</div>
            </div>
          </div>
        </div>
      </div>
        <div className="cash-back-section">
          <div className="text-block-4">
            <div className="CASH-BACK">
              <div className="text-wrapper-47">CASH BACK</div>
              <div className="text-wrapper-48">ON SHOPPING!</div>
            </div>
            <p className="text-wrapper-49">
              Purchase a product from any Xion Merchant and get up to 100% cash back in crypto. Sound too good to be true?
              Try it out for yourself and see the power of cash back rewards with XionPay!
            </p>
          </div>
          <img className="cash-back-image" alt="Cash back image" src="/img/cash-back-image-1.png" />
        </div>
        <FooterIpad onGetStartedClick={handleGetStartedClick} />
      </div>
    );
};