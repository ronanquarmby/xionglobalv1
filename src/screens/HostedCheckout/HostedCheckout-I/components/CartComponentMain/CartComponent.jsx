import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CartComponent = ({ property1, className, propertyDefault = "/img/cart-property-1-default-1.png" }) => {
  return (
    <img
      className={`component cart-property-1-4-${property1} ${className}`}
      alt="Property default"
      src={
        property1 === "variant-2"
          ? "/img/cart-property-1-variant2.png"
          : property1 === "variant-3"
          ? "/img/cart-property-1-variant3.png"
          : property1 === "variant-4"
          ? "/img/cart-property-1-variant4.png"
          : propertyDefault
      }
    />
  );
};

CartComponent.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-2", "variant-3", "default"]),
  propertyDefault: PropTypes.string,
};
