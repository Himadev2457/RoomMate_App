import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaMale, FaFemale, FaStar } from "react-icons/fa";
import "../css/hostel.css";
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper
import 'swiper/css';



const Hostel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hostel = location.state?.hostel;

  if (!hostel) {
    return <p>Hostel not found</p>;
  }

  const images = Array.isArray(hostel.images) ? hostel.images : []; // Default to an empty array if images are not available

  return (
    <div className="hostel-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      {/* Hostel Name */}
      <h2 className="hostel-name">
        {hostel.name}{" "}
        <span className="hostel-gender">
          {hostel.gender === "Male" ? (
            <FaMale className="male-icon" />
          ) : (
            <FaFemale className="female-icon" />
          )}
        </span>
      </h2>

      {/* Rating Stars */}
      <div className="rating-stars">
        {Array.from({ length: Math.floor(hostel.rating) }, (_, index) => (
          <FaStar key={index} className="star-icon" />
        ))}
      </div>

      {/* Location */}
      <p className="hostel-location">
        <strong>Location:</strong> {hostel.address}
      </p>

      {/* Images Container with Swiper */}
      <div className="images-container">
        {images.length > 0 ? (
          <Swiper
          spaceBetween={0}
          slidesPerView={1}  // Display one image at a time
          navigation
          loop
          className="image-slider"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={image}
                alt={`${hostel.name} image ${idx + 1}`}
                className="hostel-image"
                onError={(e) =>
                  (e.currentTarget.src = "https://placehold.co/800x600")
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* Price and Available Rooms */}
      <div className="price-rooms-container">
        <p className="hostel-price">
          <strong>Price:</strong> {hostel.price}
        </p>
        <p className="hostel-rooms">
          <strong>Available Rooms:</strong> {`${hostel.availableRooms} Rooms`}
        </p>
      </div>

      {/* Rating and Contact Container */}
      <div className="rating-contact-container">
        <div className="rating-container">
          <strong>Rating:</strong>
          <span className="rating-stars">
            {Array.from({ length: Math.floor(hostel.rating) }, (_, index) => (
              <FaStar key={index} className="star-icon" />
            ))}
          </span>
        </div>

        <div className="contact-container">
          <a
            href={`https://wa.me/${hostel.contact}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            📲 Contact on WhatsApp
          </a>
        </div>
      </div>

      {/* Facilities Container */}
      <div className="facilities-container">
        {hostel.services.map((service, idx) => (
          <div key={idx} className="facility-item">
            <span className="facility-icon">🔧</span> {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hostel;
