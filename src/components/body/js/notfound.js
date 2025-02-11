import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/notfound.css"; // External CSS

const quotes = [
  "Oops! Looks like this room is already taken. 🏠",
  "404: This page found a better place to stay! 🚪",
  "You might be lost... but don't worry, we'll find you a room soon! 🛏️",
  "This page moved out. Try checking the kitchen instead. 🍽️",
];

const NotFound = () => {
  const navigate = useNavigate();
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <div className="icon-warning">⚠️</div>
        <h1 className="notfound-title">404 - Page Not Found</h1>
        <p className="notfound-text">{randomQuote}</p>
        <div className="icon-bed">🛏️</div>
        <button className="home-button" onClick={() => navigate("/home")}>
          🏡 Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
