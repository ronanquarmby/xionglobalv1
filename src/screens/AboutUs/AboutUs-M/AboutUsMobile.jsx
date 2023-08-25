import React, { useCallback } from "react";
import { FooterMobile } from "../../../mobilecomponents/FooterMobileMain";
import { NavbarMobile } from "../../../mobilecomponents/NavBarMobileMain";  
import "./style.css";

export const AUM = () => {

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
    <div className="about-m">
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
        <img className="FREE-SIMPLE" alt="Free SIMPLE" src="/img/who-we-are-m.png" />
        </div>
        <div className="section">
        <p className="xion-global-was">
          <span className="text-wrapper-66">
            Xion Global was founded to fulfil an e-commerce need for SME’s and multinationals alike. After spending
            several years working with multiple e-commerce and payment solutions, it became clear to the team that there
            was no single unified e-commerce platform. Xion Global set out to change this with an end goal to makin’
            payments and rewards easy.
            <br />
          </span>
          <span className="text-wrapper-67">
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
      <div className="section-2">
        <div className="overlap-8">
          <p className="our-e-commerce">
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
            THE PLATFORM ALLOWS BUSINESSES TO REAP THE BENEFITS OF DECENTRALIZATION AND AUTOMATION OF ALL
            ORDER-TO-REVENUE OPERATIONS, RELIEVING THE NEED FOR ANY 3RD PARTY PAYMENT PROVIDERS OR INTERMEDIARIES. WE
            INCLUDE FULL MANAGEMENT CAPABILITIES WITHIN THE PLATFORM, ALONG WITH ANALYTICS, MESSAGING AND LOYALTY.
            <br />
            IT’S A COMPLETE END TO END SOLUTION THAT IS EASY TO USE AND COMPREHENSIVELY MEETS THE NEEDS OF ANY BUSINESS
            DABBLING WITH OR FULLY COMMITTED TO SELLING ONLINE.
            <br />
            <br />
            XION IS BUILT FOR THE NEW GENERATIONS OF ONLINE ENTREPRENEURS &amp; BUSINESSES! WE’RE CHANGING THE
            E-COMMERCE GAME FOR THE BETTER.
          </p>
          <div className="FREE-SIMPLE-2">THE PLATFORM</div>
        </div>
      </div>
      <div className="section-3">
        <div className="overlap-9">
          <div className="FREE-SIMPLE-3">PARTNERS</div>
          <div className="frame-4">
            <div className="group-11">
              <img className="vector-2" alt="Vector" src="/img/vector.svg" />
            </div>
            <div className="group-11">
              <img className="vector-3" alt="Vector" src="/img/vector-1.svg" />
            </div>
            <div className="group-11">
              <img className="vector-4" alt="Vector" src="/img/vector-2.svg" />
            </div>
            <div className="group-11">
              <img className="vector-5" alt="Vector" src="/img/vector-3.svg" />
            </div>
            <div className="group-11">
              <img className="vector-6" alt="Vector" src="/img/vector-4.svg" />
            </div>
            <div className="group-11">
              <img className="vector-7" alt="Vector" src="/img/vector-5.svg" />
            </div>
            <div className="group-11">
              <img className="vector-8" alt="Vector" src="/img/vector-6.svg" />
            </div>
            <div className="group-11">
              <img className="vector-9" alt="Vector" src="/img/vector-7.svg" />
            </div>
            <div className="group-11">
              <img className="vector-10" alt="Vector" src="/img/vector-8.svg" />
            </div>
            <div className="group-11">
              <img className="vector-11" alt="Vector" src="/img/vector-9.svg" />
            </div>
            <div className="group-11">
              <img className="vector-12" alt="Vector" src="/img/vector-10.svg" />
            </div>
            <div className="group-11">
              <img className="vector-13" alt="Vector" src="/img/vector-11.svg" />
            </div>
            <div className="group-11">
              <img className="vector-14" alt="Vector" src="/img/vector-12.svg" />
            </div>
            <div className="group-11">
              <img className="vector-15" alt="Vector" src="/img/vector-13.svg" />
            </div>
            <div className="group-11">
              <img className="vector-16" alt="Vector" src="/img/vector-14.svg" />
            </div>
            <div className="group-11">
              <img className="vector-17" alt="Vector" src="/img/vector-15.svg" />
            </div>
            <div className="group-11">
              <img className="vector-18" alt="Vector" src="/img/vector-16.svg" />
            </div>
            <div className="group-11">
              <img className="vector-19" alt="Vector" src="/img/vector-17.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="FREE-SIMPLE-4">AUDITED BY</div>
        <div className="frame-5">
          <img
            className="aaa-ba-e"
            alt="Aaa ba e"
            src="/img/a858a9a1-2b5a-4e56-b162-a63f28ad0ece-1592519393391-1.png"
          />
          <img className="img-6" alt="Img" src="/img/a2c1b2300bfc675afa30317bba33eb58-1.png" />
        </div>
        <img className="line-2" alt="Line" src="/img/line-23-mobile.svg" />
      </div>
      <FooterMobile onGetStartedClick={handleGetStartedClick} />
      </div>
  );
};
