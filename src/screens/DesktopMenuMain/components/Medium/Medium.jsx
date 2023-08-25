import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const Medium = ({ className, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const imageUrl = hovered ? "/img/mediumblue.png" : "/img/mediumwhite.png";

  return (
    <img
      className={`medium ${className}`}
      alt="Medium"
      src={imageUrl}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    />
  );
};

Medium.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
