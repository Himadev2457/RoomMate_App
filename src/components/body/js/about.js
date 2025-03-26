import React from "react";
import "../css/about.css";
import { FaStar, FaInfoCircle, FaEnvelope, FaMapMarkerAlt, FaLock, FaUsers } from "react-icons/fa";
// import video from "../../../assets/video/about.mp4";
import Logo from "../../../assets/images/logo.png";

const About = () => {
  const fallbackImageSrc = Logo;
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
        {/* {<video src={video} autoPlay loop muted>
          Your browser does not support the video tag.
        </video>?{<img src:""/>}:{}} */}
        
        <video
                src={"video"}
                controls
                autoPlay
                loop
                muted
                onError={(e) => {
                    e.target.outerHTML = `<img src="${fallbackImageSrc}" class="fallback"  " alt="Fallback Image" />`;
                }}
            >
                Your browser does not support the video tag.
            </video>
      </div>
        </section>

        <section className="features-section">
    <h2>Features</h2>
    <ul className="features-list">
        <li>
            <FaMapMarkerAlt className="icon" />
            <span className="text">Find hostels in your <b>preferred location 📍</b></span>
        </li>
        <li>
            <FaInfoCircle className="icon" />
            <span className="text">Verified reviews & <b>authentic hostel details 🏠</b></span>
        </li>
        <li>
            <FaEnvelope className="icon" />
            <span className="text">Instantly <b>contact owners 📩</b> via email or phone</span>
        </li>
        <li>
            <FaUsers className="icon" />
            <span className="text">Check for <b>roommate preferences 👫</b> before booking</span>
        </li>
        <li>
            <FaLock className="icon" />
            <span className="text"><b>Secure bookings 🔒</b> with trusted payments</span>
        </li>
        <li>
            <FaStar className="icon" />
            <span className="text">Top-rated hostels based on <b>student ratings ⭐</b></span>
        </li>
    </ul>
</section>

        <section className="gallery-section">
          <h2>Gallery</h2>
          <div className="image-gallery">
            <div className="image-item">
              <img src="https://i.pinimg.com/originals/4f/4c/13/4f4c132ea7af64d2eb955bfa22a2ccf3.jpg" alt="Feature 1" />
              <div className="image-text">Spacious & Comfortable</div>
            </div>
            <div className="image-item">
              <img src="https://static.dezeen.com/uploads/2013/06/dezeen_Emanuel-Hostel-by-Lana-Vitas-Gruic_ss_1.jpg" alt="Feature 2" />
              <div className="image-text">Modern Amenities</div>
            </div>
            <div className="image-item">
              <img
                src="https://www.rikdeveloper.com/wp-content/uploads/2024/11/DALL%C2%B7E-2024-11-13-16.30.00-An-image-illustrating-the-importance-of-location-in-real-estate-showing-a-detailed-map-with-a-highlighted-pin-or-marker-on-a-prime-spot-surrounded-b.webp"
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
