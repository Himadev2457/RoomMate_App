import React, { useState } from "react";
import "../css/searchComponent.css"; // Import external CSS
import Hostels from "../../../firebase/mockData";

const hyderabadLocalities = [
  "Madhapur",
  "Hitech City",
  "Gachibowli",
  "Jubilee Hills",
  "Banjara Hills",
  "Kukatpally",
  "Ameerpet",
  "Begumpet",
  "Mehdipatnam",
  "Secunderabad",
  "Charminar",
  "Tarnaka",
  "Kompally",
  "Dilsukhnagar",
  "LB Nagar",
  "Miyapur",
  "Manikonda",
  "Kondapur",
  "Attapur",
  "Shamshabad",
  "Abids",
  "Nallagandla",
  "Chandanagar",
  "Tolichowki",
  "Moosapet",
  "Nagole",
  "Uppal",
  "Malakpet",
  "other",
];

const SearchComponent = ({ setFilteredHostels }) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

  // Get today's date for validation
  const today = new Date();
  const minDate = today.toISOString().split("T")[0]; // Current date in YYYY-MM-DD format
  const maxDate = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  )
    .toISOString()
    .split("T")[0]; // 1 month from today

  const handleSearch = () => {
    if (!destination) {
      setError("Please select a location.");
      setIsModalOpen(true);
      return;
    }

    // Check if check-in date is later than check-out date
    if (checkIn && checkOut && new Date(checkIn) > new Date(checkOut)) {
      setError("Check-in date cannot be later than the check-out date.");
      setIsModalOpen(true);
      return;
    }

    // Filter hostels based only on the selected location
    const filtered = Hostels.filter((hostel) => {
      // Extract locality dynamically from each hostel's address
      const hostelLocality = hostel.address.split(",")[1]?.trim();

      // Check if the selected destination matches the hostel locality
      const matchesLocation =
        hostelLocality?.toLowerCase() === destination.toLowerCase();

      // Check availability based on check-in and check-out dates
      const matchesCheckIn = checkIn
        ? new Date(hostel.availableFrom) <= new Date(checkIn)
        : true;

      const matchesCheckOut = checkOut
        ? new Date(hostel.availableTill) >= new Date(checkOut)
        : true;

      return matchesLocation && matchesCheckIn && matchesCheckOut;
    });

    // If no hostels match, show an error message
    if (filtered.length === 0) {
      setError("No hostels found in the selected location with the given dates.");
      setIsModalOpen(true);
    } else {
      setFilteredHostels(filtered); // Update the filtered hostels
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="search-container">
      <div className="search-fields">
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="search-input"
        >
          <option value="" disabled>
            Select the Location
          </option>
          {hyderabadLocalities.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>

        <input
          type="date"
          id="inDate"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="search-input"
          min={minDate}
          max={maxDate}
        />

        <input
          type="date"
          id="outDate"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="search-input"
          min={minDate}
          max={maxDate}
        />

        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {/* Display modal if there's an error */}
      {isModalOpen && <Modal message={error} onClose={closeModal} />}
    </div>
  );
};

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Error</h3>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SearchComponent;
