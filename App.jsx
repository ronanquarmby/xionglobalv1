import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet
import { Desktop } from "./src/screens/DesktopMain/index";
import { Ipad } from "./src/screens/IpadMain/index";
import { Mobile } from "./src/screens/MobileMain/index";
import { DesktopMenu } from "./src/screens/DesktopMenuMain";
import { IpadMenu } from "./src/screens/IpadMenuMain";
import { MobileMenu } from "./src/screens/MobileMenuMain";
import useMediaQuery from "./hooks/useMediaQuery";
import { HCD } from "./src/screens/HostedCheckout/HostedCheckout-D";
import { HCI } from "./src/screens/HostedCheckout/HostedCheckout-I";
import { HCM } from "./src/screens/HostedCheckout/HostedCheckout-M";
import { LoyaltyDesktop } from "./src/screens/Loyalty/Loyalty-D";
import { LoyaltyIpad } from "./src/screens/Loyalty/Loyalty-I"
import { LoyaltyMobile } from "./src/screens/Loyalty/Loyalty-M"
import { CBD } from "./src/screens/CashBack/CashBack-D";
import { CBI } from "./src/screens/CashBack/CashBack-I";
import { CBM } from "./src/screens/CashBack/CashBack-M";
import { AUD } from "./src/screens/AboutUs/AboutUs-D";
import { AUI } from "./src/screens/AboutUs/AboutUs-I";
import { AUM } from "./src/screens/AboutUs/AboutUs-M";
import { LegalD } from "./src/screens/Legal/Legal-D";
import { LegalI } from "./src/screens/Legal/Legal-I";
import { LegalM } from "./src/screens/Legal/Legal-M";
import { ErrorPageDesktop } from "./src/screens/404Page/404Page-D";
import { ErrorPageIpad } from "./src/screens/404Page/404Page-I";
import { ErrorPageMobile } from "./src/screens/404Page/404Page-M"

export const App = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isIpad = useMediaQuery("(min-width: 768px) and (max-width: 1279px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  const router = createBrowserRouter([
    {
      path: "/*",
      element: (
        <>
          <Helmet>
            <title>Xion Global - Makin' Crypto Payments & Rewards Easy</title>
            <meta name="Home" content="Web3 Payments Infrastructure for the Internet" />
          </Helmet>
          {isDesktop && <Desktop />}
          {isIpad && <Ipad />}
          {isMobile && <Mobile />}
        </>
      ),
    },
    {
      path: "/menu",
      element: (
        <>
          {isDesktop && <DesktopMenu />}
          {isIpad && <IpadMenu />}
          {isMobile && <MobileMenu />}
        </>
      ),
    },
    {
      path: "/hosted-checkout",
      element: (
        <>
          <Helmet>
            <title>Xion Global - Web3 Hosted-Checkout</title>
            <meta name="Web3 Hosted Checkout" content="Start accepting Web3 payments easily and hassle FREE with a global Web3 hosted checkout" />
          </Helmet>
          {isDesktop && <HCD />}
          {isIpad && <HCI />}
          {isMobile && <HCM />}
        </>
      ),
    },
    {
      path: "/loyalty",
      element: (
        <>
          <Helmet>
            <title>Xion Global - Loyalty Program</title>
            <meta name="Loyalty Program" content="Customers save big with compounded loyalty discounts overtime. The longer you stay the less you pay." />
          </Helmet>
          {isDesktop && <LoyaltyDesktop />}
          {isIpad && <LoyaltyIpad />}
          {isMobile && <LoyaltyMobile />}
        </>
      ),
    },
    {
      path: "/cashback-rewards",
      element: (
        <>
          <Helmet>
            <title>Xion Global - Cashback Rewards</title>
            <meta name="Cashback Rewards" content="Reward customers like never before with instant cashback on purchase." />
          </Helmet>
          {isDesktop && <CBD />}
          {isIpad && <CBI />}
          {isMobile && <CBM />}
        </>
      ),
    },
    {
      path: "/about-us",
      element: (
        <>
          <Helmet>
            <title>Xion Global - About Us</title>
            <meta name="About Us" content="Learn about the founders and the vision of the Xion ecosystem." />
          </Helmet>
          {isDesktop && <AUD />}
          {isIpad && <AUI />}
          {isMobile && <AUM />}
        </>
      ),
    },
    {
      path: "/privacy-terms",
      element: (
        <>
          <Helmet>
            <title>Xion Global - Privacy & Terms </title>
            <meta name="Privacy & Terms" content="Privacy Policy & Terms of Service." />
          </Helmet>
          {isDesktop && <LegalD />}
          {isIpad && <LegalI />}
          {isMobile && <LegalM />}
        </>
      ),
    },
    {
      path: "/404-error-page",
      element: (
        <>
          <Helmet>
            <title>Xion Global - 404 Page Error</title>
            <meta name="404 Page Error" content="Bad Link - This page does either not exist or is broken, go back or head to the main menu." />
          </Helmet>
          {isDesktop && <ErrorPageDesktop />}
          {isIpad && <ErrorPageIpad />}
          {isMobile && <ErrorPageMobile />}
  
        </>
      ),
    },
    // ... Other route objects ...
  ]);

  return <RouterProvider router={router} />;
};



