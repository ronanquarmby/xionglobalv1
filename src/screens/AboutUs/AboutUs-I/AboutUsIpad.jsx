import React, { useState, useCallback } from "react";
import { FooterIpad } from "../../../ipadcomponents/FooterIpadMain";
import { NavbarIpad } from "../../../ipadcomponents/NavBarIpadMain";  
import "./style.css";

export const AUI = () => {
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


  return (
    <div className="about-ipad">
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
      <div className="main-8">
        <div className="overlap-43">
          <div className="ABOUT-US-2">WHO WE ARE</div>
          </div>
          </div>
          <div className="section-19">
        <p className="xion-global-was-3">
          <span className="text-wrapper-182">
            Xion Global was founded to fulfil an e-commerce need for SME’s and multinationals alike. After spending
            several years working with multiple e-commerce and payment solutions, it became clear to the team that there
            was no single unified e-commerce platform. Xion Global set out to change this with an end goal to makin’
            payments and rewards easy.
            <br />
          </span>
          <span className="text-wrapper-183">
            <br />
            By challenging existing practices and constructing a new business model for e-commerce, Xion Global now
            empowers businesses and customers with a decentralized e-commerce platform that is free and simple.
            <br />
            <br />
            Xion Global allows companies of any size to create, sell and manage their products or services online
            without the need for intermediaries or 3rd party providers. This frees up time for businesses to more
            effectively serve the needs of their customers, which leads to greater satisfaction and better business
            results.
            <br />
            <br />
            The Xion Global system allows start-ups or established businesses to grow and become financially
            independent. Our system runs on autopilot, leaving you to focus on growth, expansion and the customer.
            <br />
            <br />
            Xion Global is indeed a global corporation with teams in Germany, South Africa and London. A dedicated team
            of e-commerce and blockchain enthusiasts work in unison to provide the best possible platform for our global
            customer base. Our service is constantly evolving and expanding to ensure we constantly offer improved
            features, reach untapped markets, and help our clients reach their full business potential.
            <br />
          </span>
        </p>
      </div>
      <div className="section-20">
        <p className="our-e-commerce-3">
          OUR E-COMMERCE PLATFORM IS SUITABLE FOR COMPANIES OF ALL SIZES THAT WISH TO OFFER PRODUCTS AND/OR SERVICES
          ONLINE VIA SUBSCRIPTIONS OR ONCE OFF PAYMENTS.
          <br />
          <br />
          FOR THE BUYER, THIS ALLOWS SIMPLE PURCHASING AND MANAGEMENT OF SUBSCRIPTIONS WITHIN THE PLATFORM, GIVING THE
          BUYER COMPLETE PURCHASE TRANSPARENCY AND CONTROL.
          <br />
          <br />
          THE TECHNOLOGY BEHIND OUR PLATFORM IS BASED ON BLOCKCHAIN, A DECENTRALIZED AND SECURE METHOD OF DATA STORAGE
          AND TRANSFER. ALL INFORMATION WITHIN THIS SYSTEM IS SAFE AND ACCESSIBLE, PROTECTED AGAINST SINGLE POINTS OF
          FAILURE AND ENCRYPTED FOR SECURITY.
          <br />
          <br />
          THE PLATFORM ALLOWS BUSINESSES TO REAP THE BENEFITS OF DECENTRALIZATION AND AUTOMATION OF ALL ORDER-TO-REVENUE
          OPERATIONS, RELIEVING THE NEED FOR ANY 3RD PARTY PAYMENT PROVIDERS OR INTERMEDIARIES. WE INCLUDE FULL
          MANAGEMENT CAPABILITIES WITHIN THE PLATFORM, ALONG WITH ANALYTICS, MESSAGING AND LOYALTY.
          <br />
          IT’S A COMPLETE END TO END SOLUTION THAT IS EASY TO USE AND COMPREHENSIVELY MEETS THE NEEDS OF ANY BUSINESS
          DABBLING WITH OR FULLY COMMITTED TO SELLING ONLINE.
          <br />
          <br />
          XION IS BUILT FOR THE NEW GENERATIONS OF ONLINE ENTREPRENEURS &amp; BUSINESSES! WE’RE CHANGING THE E-COMMERCE
          GAME FOR THE BETTER.
        </p>
        <div className="FREE-SIMPLE-14">THE PLATFORM</div>
      </div>
      <div className="section-21">
        <div className="FREE-SIMPLE-15">PARTNERS</div>
        <div className="frame-68">
          <div className="group-24">
            <img className="vector-38" alt="Vector" src="/img/vector-36.svg" />
          </div>
          <div className="group-24">
            <img className="vector-39" alt="Vector" src="/img/vector-37.svg" />
          </div>
          <div className="group-24">
            <img className="vector-40" alt="Vector" src="/img/vector-38.svg" />
          </div>
          <div className="group-24">
            <img className="vector-41" alt="Vector" src="/img/vector-39.svg" />
          </div>
          <div className="group-24">
            <img className="vector-42" alt="Vector" src="/img/vector-40.svg" />
          </div>
          <div className="group-24">
            <img className="vector-43" alt="Vector" src="/img/vector-41.svg" />
          </div>
          <div className="group-24">
            <img className="vector-44" alt="Vector" src="/img/vector-42.svg" />
          </div>
          <div className="group-24">
            <img className="vector-45" alt="Vector" src="/img/vector-43.svg" />
          </div>
          <div className="group-24">
            <img className="vector-46" alt="Vector" src="/img/vector-44.svg" />
          </div>
          <div className="group-24">
            <img className="vector-47" alt="Vector" src="/img/vector-45.svg" />
          </div>
          <div className="group-24">
            <img className="vector-48" alt="Vector" src="/img/vector-46.svg" />
          </div>
          <div className="group-24">
            <img className="vector-49" alt="Vector" src="/img/vector-47.svg" />
          </div>
          <div className="group-24">
            <img className="vector-50" alt="Vector" src="/img/vector-48.svg" />
          </div>
          <div className="group-24">
            <img className="vector-51" alt="Vector" src="/img/vector-49.svg" />
          </div>
          <div className="group-24">
            <img className="vector-52" alt="Vector" src="/img/vector-50.svg" />
          </div>
          <div className="group-24">
            <img className="vector-53" alt="Vector" src="/img/vector-51.svg" />
          </div>
          <div className="group-24">
            <img className="vector-54" alt="Vector" src="/img/vector-52.svg" />
          </div>
          <div className="group-24">
            <img className="vector-55" alt="Vector" src="/img/vector-53.svg" />
          </div>
        </div>
      </div>
      <div className="section-22">
        <div className="FREE-SIMPLE-16">AUDITED BY</div>
        <div className="frame-69">
          <img
            className="aaa-ba-e-3"
            alt="Aaa ba e"
            src="/img/a858a9a1-2b5a-4e56-b162-a63f28ad0ece-1592519393391-1-1.png"
          />
          <img className="img-8" alt="Img" src="/img/a2c1b2300bfc675afa30317bba33eb58-1-1.png" />
        </div>
        <img className="line-4" alt="Line" src="/img/line-23-ipad.svg" />
      </div>
      <FooterIpad onGetStartedClick={handleGetStartedClick} />
      </div>
  );
};
