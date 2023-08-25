import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { useCallback } from "react";
import "./style.css";

export const ReadButton = ({ property1, className, divClassName }) => { 
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

                    // Define the onClick event handler function
                    const handleReadDocsClick = useCallback(() => {
                      // Open a new tab with the specified URL
                      window.open("https://apimatic.io/apidocs/xionglobal", "_blank");
                    }, []);

  return (
    <div
      className={`read-button-m ${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`text-wrapper ${divClassName}`}onClick={handleReadDocsClick}>Read the Docs</div>
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

ReadButton.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
