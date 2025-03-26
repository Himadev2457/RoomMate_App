// import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "../../../firebase/firebase";
// import "../css/userMenu.css";

// const UserMenu = ({ username, setUsername }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setUsername(""); // Reset username after logout
//       localStorage.removeItem("username"); // Clear stored username
//       navigate("/login"); // Redirect to login instead of signup
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   return (
//     <div className="user-menu" ref={menuRef}>
//       <div className="user-initial-circle" onClick={toggleMenu}>
//         {username ? username.charAt(0).toUpperCase() : "G"}
//       </div>
//       {menuOpen && (
//         <div className="dropdown-menu">
//           <button className="logout-btn" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserMenu;

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import "../css/userMenu.css";

const UserMenu = ({ username, setUsername }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUsername("");
      localStorage.removeItem("userEmail");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="user-menu" ref={menuRef}>
      <div className="nav-btn profile-btn" onClick={toggleMenu}>
        PROFILE
      </div>
      {menuOpen && (
        <div className="dropdown-menu">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );  
};

export default UserMenu;
