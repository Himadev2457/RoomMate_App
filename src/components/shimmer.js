import React from "react";
import "./shimmer.css"; // Import the shimmer styles

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {/* Title */}
      <div className="shimmer skeleton skeleton-title"></div>

      {/* Input fields */}
      <div className="shimmer skeleton skeleton-input"></div>
      <div className="shimmer skeleton skeleton-input"></div>
      <div className="shimmer skeleton skeleton-input"></div>

      {/* Button */}
      <div className="shimmer skeleton skeleton-button"></div>

      {/* Additional fields for signup */}
      <div className="shimmer skeleton skeleton-input"></div>
      <div className="shimmer skeleton skeleton-input"></div>
      <div className="shimmer skeleton skeleton-button"></div>
    </div>
  );
};

export default Shimmer;
