import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const Linkedin = ({ className, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const imageUrl = hovered ? "/img/linkedinblue.png" : "/img/linkedinwhite.png";

  return (
    <img
      className={`linkedin ${className}`}
      alt="Linkedin"
      src={imageUrl}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    />
  );
};

Linkedin.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
