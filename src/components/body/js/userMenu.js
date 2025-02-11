import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import "../css/userMenu.css";

const UserMenu = ({ username }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("username"); // Clear username from local storage
      navigate("/signup"); // Redirect to signup page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="user-menu">
      <div className="user-initial-circle" onClick={toggleMenu}>
        {username ? username.charAt(0).toUpperCase() : "U"}
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
