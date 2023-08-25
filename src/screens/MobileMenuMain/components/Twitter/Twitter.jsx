import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const Twitter = ({ className, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const imageUrl = hovered ? "/img/twitterblue.png" : "/img/twitterwhite.png";

  return (
    <img
      className={`twitter ${className}`}
      alt="Twitter"
      src={imageUrl}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick} // Add this line
    />
  );
};

Twitter.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func, // Add this prop type
};
