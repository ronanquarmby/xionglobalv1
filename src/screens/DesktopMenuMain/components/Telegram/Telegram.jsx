import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const Telegram = ({ className, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const imageUrl = hovered ? "/img/telegramblue.png" : "/img/telegramwhite.png";

  return (
    <img
      className={`telegram ${className}`}
      alt="Telegram"
      src={imageUrl}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    />
  );
};

Telegram.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
