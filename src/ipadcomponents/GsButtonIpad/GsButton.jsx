import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { useCallback } from "react";
import "./style.css";

export const GsButton = ({ property1, className, getStartedClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

          // Define the onClick event handler function
          const handleGetStartedClick = useCallback(() => {
            // Open a new tab with the specified URL
            window.open("https://xionpay.app", "_blank");
          }, []);

  return (
    <div
      className={`GS-button-i property-1-0-${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`get-started ${getStartedClassName}`} onClick={handleGetStartedClick}>GET STARTED</div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

GsButton.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
