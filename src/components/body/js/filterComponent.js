import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaFilter, FaCheck, FaSlidersH } from "react-icons/fa";
import Hostels from "../../../firebase/mockData";
import "../css/filterComponent.css";

const FilterComponent = ({ onApplyFilters }) => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [rating, setRating] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [hostelType, setHostelType] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActive, setIsActive] = useState(true);

  // Combined toggle function
  const handleClick = () => {
    setIsActive(!isActive); // Toggle isActive
    setIsExpanded(!isExpanded); // Toggle isExpanded
  };

  const filterRef = useRef(null); // Ref for filter container
  const buttonRef = useRef(null); // Ref for filter toggle button

  // Close filter when clicking outside (but not on the toggle button)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterRef.current && !filterRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target) // Ignore toggle button click
      ) {
        setIsExpanded(false);
        setIsActive(!isActive)
      }
    }

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded, isActive]);

  const services = [
    "Reception",
    "CCTV Camera",
    "Hot Water",
    "Laundry",
    "Walkable Distance to Shops",
    "Elevator",
    "Luggage Rack",
    "Wi-Fi",
    "TV",
    "Washing Machine",
    "Homely Food (Non-Veg Twice a Week)",
    "Game Room",
  ];

  const handleApplyFilters = () => {
    const filteredHostels = Hostels.filter((hostel) => {
      const price = parseInt(
        hostel.price.replace("₹", "").replace("/month", ""),
        10
      );
      const isPriceInRange = price >= priceRange[0] && price <= priceRange[1];
      const isRatingMatch = hostel.rating >= rating;
      const isServicesMatch = selectedServices.every((service) =>
        hostel.services.includes(service)
      );
      const isHostelTypeMatch = hostelType
        ? hostel.hostelType === hostelType
        : true;

      return (
        isPriceInRange && isRatingMatch && isServicesMatch && isHostelTypeMatch
      );
    });

    onApplyFilters(filteredHostels);
    setIsExpanded(false); // Close the filter when applying filters
    setIsActive(!isActive);
  };

  const handleResetFilters = () => {
    // Reset all filter states to their initial values
    setPriceRange([0, 10000]);
    setRating(0);
    setSelectedServices([]);
    setHostelType("");
    
    // Apply the reset filters to the parent component (show all hostels)
    onApplyFilters(Hostels);
    
    setIsExpanded(false); // Close the filter after reset
    setIsActive(!isActive); // Toggle button state
  };

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPriceRange([0, value]);

    // Update the background gradient
    const percentage = (value / 10000) * 100;
    e.target.style.background = `linear-gradient(to right, #ffcc00 ${percentage}%, #e0e0e0 ${percentage}%)`;
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className={`filter-toggle-btn ${isActive ? "active" : ""}`}
        onClick={handleClick}
        ref={buttonRef}
      >
        {isActive ?  <><FaSlidersH /> Filters</> : "✖Close" }
      </button>

      {/* Filter Container */}
      {isExpanded && (
        <div ref={filterRef} className="filter-container expanded">
          <div className="filter-item1" id="itembtn">
            <button onClick={handleApplyFilters}>Apply Filters</button>
            <button onClick={handleResetFilters}>Reset Filters</button>
          </div>
          <div className="filter-item">
            <label>
              <FaFilter /> Price Range
            </label>
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              value={priceRange[1]}
              onChange={handleRangeChange}
              style={{
                background: `linear-gradient(to right, #ffcc00 ${(priceRange[1] / 10000) * 100}%, #e0e0e0 ${(priceRange[1] / 10000) * 100}%)`
              }}
            />
            <span>₹0 - ₹{priceRange[1]}</span>
          </div>

          <div className="filter-item">
            <label>
              <FaStar /> Rating
            </label>
            <div className="rating-filter">
              {[2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className={`rating-box ${rating === star ? "selected" : ""}`}
                  onClick={() => setRating(star)}
                >
                  {star}★
                </div>
              ))}
            </div>
            <span>Selected: {rating}★</span>
          </div>

          <div className="filter-item">
            <label>
              <FaCheck /> Services
            </label>
            <div className="services-filter">
              {services.map((service) => (
                <label key={service}>
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() =>
                      setSelectedServices((prev) =>
                        prev.includes(service)
                          ? prev.filter((s) => s !== service)
                          : [...prev, service]
                      )
                    }
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-item">
            <label>Hostel Type</label>
            <div className="hostel-type-filter">
              <label>
                <input
                  type="radio"
                  name="hostelType"
                  value="Men"
                  checked={hostelType === "Men"}
                  onChange={(e) => setHostelType(e.target.value)}
                />
                Men
              </label>
              <label>
                <input
                  type="radio"
                  name="hostelType"
                  value="Women"
                  checked={hostelType === "Women"}
                  onChange={(e) => setHostelType(e.target.value)}
                />
                Women
              </label>
              <label>
                <input
                  type="radio"
                  name="hostelType"
                  value=""
                  checked={hostelType === ""}
                  onChange={() => setHostelType("")}
                />
                Any
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterComponent;
