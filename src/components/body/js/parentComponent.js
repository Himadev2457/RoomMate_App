import React from "react";
import "../css/parentComponent.css";
import { FaMale, FaFemale, FaRegSadTear } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ParentComponent = ({ filteredHostels }) => {
  const navigate = useNavigate();

  const handleCardClick = (hostel) => {
    // Navigate to the selected hostel's details page
    navigate(`/hostel/${encodeURIComponent(hostel.name)}`, { state: { hostel } });
  };

  return (
    <div id="parentDiv" className="parentExpanded">
      <h2>All Hostels</h2>
      <div id="Hostel-Card-Container">
        {filteredHostels.length > 0 ? (
          filteredHostels.map((hostel, index) => (
            <div
              key={index}
              className="hostel-card"
              onClick={() => handleCardClick(hostel)} // Handle card click
            >
              <h3>
                {hostel.name}{" "}
                <span>
                  {hostel.gender === "Male" ? (
                    <FaMale style={{ color: "blue" }} />
                  ) : (
                    <FaFemale style={{ color: "pink" }} />
                  )}
                </span>
              </h3>
              <img
                src="https://placehold.co/image"
                alt={`${hostel.name} "image"`}
                onError={(e) =>
                  (e.currentTarget.src = "https://placehold.co/200x200")
                }
              />
              <p>
                <strong>Price:</strong> {hostel.price}
              </p>
              <p>
                <strong>Rating:</strong> {hostel.rating} / 5
              </p>
              <p id="location">
                <strong>Location:</strong> {hostel.address}
              </p>
              <p>
                <strong>Available Rooms:</strong> {`${hostel.availableRooms} Rooms`}
              </p>
              <p className="facilities">
                <strong>Facilities:</strong>
              </p>
              <ul>
                {hostel.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
              <p className="contact">
                <strong>Contact:</strong> {hostel.contact}
              </p>
              <p>
                <strong>Available for:</strong> {hostel.roomSharing} Sharing
              </p>
              <a
                href={`https://wa.me/${hostel.contact}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                📲 Contact on WhatsApp
              </a>
            </div>
          ))
        ) : (
          <div className="no-hostels-container">
            <FaRegSadTear size={50} color="#FF6347" />
            <h2>No Hostels Found</h2>
            <p>Looks like there are no hostels matching your filters. Please try adjusting your search!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
