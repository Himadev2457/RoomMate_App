import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchComponent from "./searchComp";
import FilterComponent from "./filterComponent";
import ParentComponent from "./parentComponent";
import Hostel from "./hostel";
import "../css/home.css";
import Hostels from "../../../firebase/mockData";

const Home = () => {
  const [filteredHostels, setFilteredHostels] = useState(Hostels);
  const [selectedHostel, setSelectedHostel] = useState(null);

  return (
    <div id="container">
      <SearchComponent setFilteredHostels={setFilteredHostels} />
      <div className="flex-container">
        <FilterComponent onApplyFilters={setFilteredHostels} />
        
        <Routes>
          <Route
            path="/"
            element={
              selectedHostel ? (
                <Hostel hostel={selectedHostel} goBack={() => setSelectedHostel(null)} />
              ) : (
                <ParentComponent filteredHostels={filteredHostels} onSelectHostel={setSelectedHostel} />
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
