import React from "react";
import Navbar from "./header/navbar"; // Adjust the path if needed

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Navbar will be displayed on all pages */}
      <div className="content">{children}</div> {/* Page content */}
    </div>
  );
};

export default Layout;
