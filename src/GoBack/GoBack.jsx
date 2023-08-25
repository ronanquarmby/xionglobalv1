import React from "react";
import "./style.css";

export const GoBack = ({ className, readTheDocsClassName }) => {
  return (
    <div className={`go-back ${className}`}>
      <p className={`read-the-docs ${readTheDocsClassName}`}>Go back to where you were</p>
    </div>
  );
};
