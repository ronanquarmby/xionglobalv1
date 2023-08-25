import PropTypes from "prop-types";
import React, { useEffect, useReducer } from "react";
import "./style.css";

export const Carousel = ({ className, slidesBox = "/img/slides-box-1.png" }) => {
  const [state, dispatch] = useReducer(reducer, {
    slide: "one",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch("autoSlide");
    }, 1000); // Change the interval as needed (e.g., 1000ms = 1 second)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`carousel-i ${className}`}> 
      <img
        className="slides-box"
        alt="Slides box"
        src={
          state.slide === "one"
            ? "/img/coins6-di.png"
            : state.slide === "two"
            ? "/img/coins6-di-2.png"
            : state.slide === "three"
            ? "/img/coins6-di-3.png"
            : slidesBox
        }
      />
    </div>
  );
};

function reducer(state, action) {
  const slides = ["one", "two", "three"];
  const currentIndex = slides.indexOf(state.slide);

  switch (action) {
    case "autoSlide":
      return {
        slide: slides[(currentIndex + 1) % slides.length],
      };

    default:
      return state;
  }
}

Carousel.propTypes = {
  className: PropTypes.string,
  slidesBox: PropTypes.string,
};
