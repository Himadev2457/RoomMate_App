import React from "react";
import "../css/about.css";
import { FaEnvelope, FaInfoCircle, FaStar } from "react-icons/fa";
import video from "../../../assets/video/about.mp4";

const About = () => {
  return (
    <div className="about-container">
      <div className="innerCon">
        <section className="about-header">
          <h1>About Us</h1>
          <p className="about-description">
            We provide comprehensive listings of hostels with detailed
            information, reviews, and seamless communication with hostel owners.
          </p>
        </section>

        <section className="video-section">
        <div className="video-placeholder">
        <video src={video} autoPlay loop muted>
          Your browser does not support the video tag.
        </video>
      </div>
        </section>

        <section className="features-section">
          <h2>Features</h2>
          <ul className="features-list">
        <li>
          <FaStar className="icon" />
          <span className="text">Comprehensive listings of hostels</span>
        </li>
        <li>
          <FaInfoCircle className="icon" />
          <span className="text">Detailed information and reviews</span>
        </li>
        <li>
          <FaEnvelope className="icon" />
          <span className="text">Easy contact with hostel owners</span>
        </li>
        <li>
          <FaStar className="icon" />
          <span className="text">Comprehensive listings of hostels</span>
        </li>
        <li>
          <FaInfoCircle className="icon" />
          <span className="text">Detailed information and reviews</span>
        </li>
        <li>
          <FaEnvelope className="icon" />
          <span className="text">Easy contact with hostel owners</span>
        </li>
      </ul>
        </section>

        <section className="gallery-section">
          <h2>Gallery</h2>
          <div className="image-gallery">
            <div className="image-item">
              <img src="https://placehold.co/200x200" alt="Feature 1" />
              <div className="image-text">Spacious & Comfortable</div>
            </div>
            <div className="image-item">
              <img src="https://placehold.co/200x200" alt="Feature 2" />
              <div className="image-text">Modern Amenities</div>
            </div>
            <div className="image-item">
              <img
                src="https://placehold.co/200x200"
                alt="Feature 3"
                onError={(e) =>
                  (e.currentTarget.src = "https://placehold.co/200x200")
                }
              />
              <div className="image-text">Prime Locations</div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, feel free to reach out to us at
            <a href="mailto:contactus@roommate.com"> contactus@roommate.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
