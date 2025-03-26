import React from "react";
import "./shimmer.css"; // Import the shimmer styles

const Shimmer = () => {
  return (<div>
    <header className="shimmer-navbar">
      <div className="shimmer-logo"></div>
      <div className="shimmer-nav-links">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div key={index} className="shimmer-nav-item"></div>
          ))}
      </div>
    </header>
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-text shimmer-title"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-button"></div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Shimmer;
