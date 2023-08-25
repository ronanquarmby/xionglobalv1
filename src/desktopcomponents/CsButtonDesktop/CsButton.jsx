import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const CsButton = ({ property1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`CS-button-d property-1-1-${state.property1}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="get-started-2">CONTACT SALES</div>
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

CsButton.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
