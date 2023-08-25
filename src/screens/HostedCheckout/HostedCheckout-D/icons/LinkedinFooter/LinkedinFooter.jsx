/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LinkedinFooter = ({ color = "#E8E8E8", className }) => {
  return (
    <svg
      className={`linkedin-footer ${className}`}
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-2"
        d="M21 10.9876C21 5.4647 16.5228 0.988479 11 0.989625C5.47715 0.990771 0.999999 5.46885 1 10.9917C1 16.5145 5.47715 20.9908 11 20.9896C16.5228 20.9885 21 16.5104 21 10.9876Z"
        stroke="#E8E8E8"
        strokeMiterlimit="10"
      />
      <path
        className="path-2"
        d="M16.344 11.195C16.344 12.6997 16.344 14.2041 16.344 15.7084C16.358 15.8937 16.3032 16.0776 16.19 16.2251C16.0768 16.3726 15.9132 16.4732 15.7304 16.5076C15.6792 16.5181 15.627 16.5226 15.5748 16.5211C12.5317 16.5211 9.48905 16.5211 6.44689 16.5211C6.34702 16.5234 6.24764 16.5058 6.15471 16.4692C6.06177 16.4325 5.97719 16.3777 5.90582 16.3078C5.83446 16.238 5.77777 16.1545 5.73921 16.0624C5.70064 15.9703 5.68093 15.8714 5.68124 15.7716C5.67555 15.3233 5.68124 14.8757 5.68124 14.4282C5.68124 11.8526 5.68124 9.27731 5.68124 6.70224C5.6664 6.50885 5.72139 6.31655 5.83623 6.16018C5.90483 6.06887 5.99389 5.99481 6.09622 5.94399C6.19854 5.89317 6.31128 5.86696 6.42554 5.86745C9.48524 5.86745 12.5455 5.86745 15.6061 5.86745C15.7027 5.8667 15.7985 5.88503 15.888 5.92135C15.9776 5.95767 16.0591 6.0113 16.1278 6.07914C16.1966 6.14699 16.2512 6.22772 16.2887 6.31672C16.3262 6.40572 16.3457 6.50123 16.3461 6.59779C16.3461 8.13018 16.3461 9.66258 16.3461 11.195H16.344ZM11.4182 14.9546C11.4182 14.7912 11.4182 14.6413 11.4182 14.4914C11.4246 13.6907 11.4275 12.8894 11.4403 12.0887C11.4403 11.8631 11.5089 11.6428 11.6372 11.4571C11.7232 11.3439 11.8371 11.2547 11.9677 11.1984C12.0983 11.142 12.2413 11.1203 12.3829 11.1353C12.551 11.1193 12.719 11.1677 12.8528 11.2709C12.9865 11.374 13.076 11.5242 13.103 11.6909C13.1505 11.9091 13.1743 12.1318 13.1741 12.3551C13.1819 13.1806 13.1777 14.0061 13.1741 14.8324C13.1741 14.9311 13.199 14.9638 13.3042 14.9631C13.7584 14.9567 14.2149 14.9567 14.6698 14.9631C14.78 14.9631 14.8027 14.9283 14.8013 14.826C14.8013 13.9515 14.8013 13.0762 14.8013 12.2017C14.8117 11.7895 14.7695 11.3777 14.6756 10.9762C14.6289 10.7218 14.5159 10.4843 14.3482 10.2873C14.1805 10.0904 13.9638 9.94108 13.72 9.85438C13.5247 9.79021 13.3227 9.74851 13.118 9.73007C12.8712 9.69481 12.6198 9.71158 12.38 9.77924C12.1401 9.8469 11.9172 9.96399 11.7253 10.123C11.596 10.2452 11.4738 10.3747 11.3592 10.5108C11.3592 10.3332 11.3542 10.1556 11.3592 9.97233C11.3592 9.87358 11.3357 9.83948 11.2319 9.8409C10.8125 9.84658 10.3917 9.8409 9.97152 9.8409C9.81583 9.8409 9.81584 9.84089 9.81584 9.99648C9.81584 11.6025 9.81584 13.2083 9.81584 14.8139C9.81584 14.8587 9.82226 14.9027 9.82582 14.956L11.4182 14.9546ZM7.2424 14.9602H7.36753C7.8154 14.9602 8.26397 14.9602 8.71183 14.9602C8.81775 14.9602 8.85399 14.9333 8.84972 14.8267C8.84261 14.4836 8.84972 14.1411 8.84972 13.798V10.0512C8.84972 9.79331 8.84976 9.84163 8.64432 9.83808C8.22844 9.83808 7.81182 9.83808 7.39452 9.83808C7.24452 9.83808 7.24457 9.83804 7.24457 9.98013V14.9531L7.2424 14.9602ZM8.9805 8.24742C8.98009 8.00312 8.88391 7.76873 8.71252 7.59453C8.54114 7.42033 8.30826 7.32019 8.06385 7.31563C7.81944 7.31107 7.58296 7.40247 7.40519 7.57016C7.22743 7.73785 7.12254 7.96849 7.11301 8.2126C7.10817 8.33669 7.12812 8.46051 7.17176 8.57679C7.2154 8.69307 7.2818 8.79946 7.3671 8.88977C7.4524 8.98008 7.55492 9.05248 7.66857 9.10272C7.78222 9.15295 7.90472 9.18001 8.02896 9.18233C8.15321 9.18464 8.27669 9.16217 8.39214 9.1162C8.50758 9.07024 8.61272 9.00172 8.70133 8.91466C8.78994 8.82759 8.86027 8.72371 8.90821 8.60914C8.95616 8.49457 8.98071 8.3716 8.9805 8.24742Z"
        fill={color}
      />
    </svg>
  );
};

LinkedinFooter.propTypes = {
  color: PropTypes.string,
};