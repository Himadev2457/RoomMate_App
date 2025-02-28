// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import "./css/navbar.css";
// import Logo from '../../assets/images/logo.png'

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768 ? true : false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setIsMobile(true);
//       } else {
//         setIsMobile(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenuOnMobile = () => {
//     if (isMobile) {
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <header className="navbar">
//       <nav className="nav-container">
//         <div id="navBar" className="nav-bar">
//           <div id="navLogo" className="nav-logo">
//             <img
//               src={Logo}
//               onError={(e) => (e.currentTarget.src = "https://placehold.co/200x60")}
//               alt="Logo"
//               className="logo-img"
//             />
//           </div>
//           <div id="navBtns" className={`nav-links ${isMenuOpen ? "active" : ""}`}>
//             <NavLink to="/wrapper/final" id="homeBtn" className="nav-btn" onClick={closeMenuOnMobile}>
//               HOME
//             </NavLink>
//             <NavLink to="/about" id="aboutBtn" className="nav-btn" onClick={closeMenuOnMobile}>
//               ABOUT
//             </NavLink>
//             <NavLink to="/report" id="reportBtn" className="nav-btn" onClick={closeMenuOnMobile}>
//               REPORT
//             </NavLink>
//             <NavLink to="/saved" id="savedBtn" className="nav-btn" onClick={closeMenuOnMobile}>
//               SAVED
//             </NavLink>
//             <NavLink to="/login" id="authBtn" className="nav-btn" onClick={closeMenuOnMobile}>
//               LOGIN
//             </NavLink>
//           </div>
//         </div>
//         <button aria-label="Menu Toggle Button" className="menu-toggle" onClick={toggleMenu}>
//           {isMenuOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import { auth } from "../../firebase/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import UserMenu from "../body/js/userMenu"; // Import the UserMenu component
// import "./css/navbar.css";
// import Logo from "../../assets/images/logo.png";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [username, setUsername] = useState("Guest");

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);

//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const storedUsername = localStorage.getItem("username") || "Guest";
//         setUsername(storedUsername);
//       } else {
//         setUsername("Guest");
//       }
//     });

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       unsubscribe();
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenuOnMobile = () => {
//     if (isMobile) {
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <header className="navbar">
//       <nav className="nav-container">
//         <div id="navBar" className="nav-bar">
//           <div id="navLogo" className="nav-logo">
//             <img
//               src={Logo}
//               onError={(e) => (e.currentTarget.src = "https://placehold.co/200x60")}
//               alt="Logo"
//               className="logo-img"
//             />
//           </div>
//           <div id="navBtns" className={`nav-links ${isMenuOpen ? "active" : ""}`}>
//             <NavLink
//               to="/home"
//               id="homeBtn"
//               className={({ isActive }) => (isActive ? "nav-btn active-btn" : "nav-btn")}
//               onClick={closeMenuOnMobile}
//             >
//               HOME
//             </NavLink>
//             <NavLink
//               to="/about"
//               id="aboutBtn"
//               className={({ isActive }) => (isActive ? "nav-btn active-btn" : "nav-btn")}
//               onClick={closeMenuOnMobile}
//             >
//               ABOUT
//             </NavLink>
//             <NavLink
//               to="/report"
//               id="reportBtn"
//               className={({ isActive }) => (isActive ? "nav-btn active-btn" : "nav-btn")}
//               onClick={closeMenuOnMobile}
//             >
//               REPORT
//             </NavLink>
//             <NavLink
//               to="/saved"
//               id="savedBtn"
//               className={({ isActive }) => (isActive ? "nav-btn active-btn" : "nav-btn")}
//               onClick={closeMenuOnMobile}
//             >
//               SAVED
//             </NavLink>

//             {username !== "Guest" ? (
//               <UserMenu username={username} setUsername={setUsername} />
//             ) : (
//               <NavLink
//                 to="/login"
//                 id="authBtn"
//                 className={({ isActive }) => (isActive ? "nav-btn active-btn" : "nav-btn")}
//                 onClick={closeMenuOnMobile}
//               >
//                 LOGIN
//               </NavLink>
//             )}
//           </div>
//         </div>
//         <button aria-label="Menu Toggle Button" className="menu-toggle" onClick={toggleMenu}>
//           {isMenuOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import UserMenu from "../body/js/userMenu"; // Import the UserMenu component
import "./css/navbar.css";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [username, setUsername] = useState(localStorage.getItem("userEmail") || "");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const storedUsername = localStorage.getItem("userEmail");
        setUsername(storedUsername || "User");
      } else {
        setUsername("");
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnMobile = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="navbar">
      <nav className="nav-container">
        <div id="navBar" className="nav-bar">
          <div id="navLogo" className="nav-logo">
            <img
              src={Logo}
              onError={(e) => (e.currentTarget.src = "https://placehold.co/200x60")}
              alt="Logo"
              className="logo-img"
            />
          </div>
          <div id="navBtns" className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <NavLink
              to="/home"
              id="homeBtn"
              className={({ isActive }) => (isActive ? "nav-btn active-btn" : "nav-btn")}
              onClick={closeMenuOnMobile}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              id="aboutBtn"
              className={({ isActive }) => (isActive ? "nav-btn active-btn" : "nav-btn")}
              onClick={closeMenuOnMobile}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/report"
              id="reportBtn"
              className={({ isActive }) => (isActive ? "nav-btn active-btn" : "nav-btn")}
              onClick={closeMenuOnMobile}
            >
              REPORT
            </NavLink>
            <NavLink
              to="/saved"
              id="savedBtn"
              className={({ isActive }) => (isActive ? "nav-btn active-btn" : "nav-btn")}
              onClick={closeMenuOnMobile}
            >
              SAVED
            </NavLink>

            {username ? (
              <UserMenu username={username} setUsername={setUsername} />
            ) : (
              <NavLink
                to="/login"
                id="authBtn"
                className={({ isActive }) => (isActive ? "nav-btn active-btn" : "nav-btn")}
                onClick={closeMenuOnMobile}
              >
                LOGIN
              </NavLink>
            )}
          </div>
        </div>
        <button aria-label="Menu Toggle Button" className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
