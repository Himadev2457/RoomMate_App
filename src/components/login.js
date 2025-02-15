// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/firebase"; // Import Firebase authentication
// import "./login.css";
// import Shimmer from "./shimmer";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       setError("Please fill in all required fields.");
//       setSuccess("");
//       return;
//     }

//     setError("");
//     setSuccess("Processing login... Please wait.");
//     setIsLoading(true);

//     try {
//       // Firebase Authentication (Removed 'user' since it's unused)
//       await signInWithEmailAndPassword(auth, formData.email, formData.password);

//       setSuccess("Login successful! Redirecting...");
//       setTimeout(() => {
//         setIsLoading(false);
//         navigate("../wrapper/final");
//       }, 1000);

//     } catch (err) {
//       setIsLoading(false);
//       setError("Invalid email or password. Please try again.");
//       setSuccess("");
//     }
//   };

//   return (
//     <div className="flex-center">
//       {isLoading ? (
//         <Shimmer />
//       ) : (
//         <div className="form-card-login">
//           <h2 className="form-title-login">Login</h2>
//           {error && <p className="error-message-login">{error}</p>}
//           {success && <p className="success-message-login">{success}</p>}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="input-label-login">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="input-field-login"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="input-label-login">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="input-field-login"
//                 required
//               />
//             </div>
//             <button type="submit" className="button-login">
//               Login
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { NavLink } from "react-router-dom";
// import { auth, db, doc, getDoc } from "../firebase/firebase"; // Removed unused imports
// import "./login.css";
// import Shimmer from "./shimmer";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       setError("Please fill in all required fields.");
//       setSuccess("");
//       return;
//     }

//     setError("");
//     setSuccess("Processing login... Please wait.");
//     setIsLoading(true);

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         formData.email,
//         formData.password
//       );
//       const user = userCredential.user;

//       // ✅ Fetch user details from Firestore
//       const userDoc = await getDoc(doc(db, "users", user.uid));
//       if (userDoc.exists()) {
//         console.log("User Data:", userDoc.data());
//       }

//       setSuccess("Login successful! Redirecting...");
//       setTimeout(() => {
//         setIsLoading(false);
//         navigate("/home");
//       }, 1000);
//     } catch (err) {
//       setIsLoading(false);
//       setError("Invalid email or password. Please try again.");
//       setSuccess("");
//     }
//   };

//   return (
//     <div className="flex-center">
//       {isLoading ? (
//         <Shimmer />
//       ) : (
//         <div className="form-card-login">
//           <h2 className="form-title-login">Login</h2>
//           {error && <p className="error-message-login">{error}</p>}
//           {success && <p className="success-message-login">{success}</p>}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="input-label-login">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="input-field-login"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="input-label-login">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="input-field-login"
//                 required
//               />
//             </div>
//             <button type="submit" className="button-login">
//               Login
//             </button>
//           </form>

//           {/* Sign In link below the login form */}
//           <p className="signup-link">
//             Don't have an account? <NavLink to="/signup">Sign up here</NavLink>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { NavLink } from "react-router-dom";
// import { auth, db } from "../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import "./login.css";
// import Shimmer from "./shimmer";

// const Login = ({ setUsername }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       setError("Please fill in all required fields.");
//       setSuccess("");
//       return;
//     }

//     setError("");
//     setSuccess("Processing login... Please wait.");
//     setIsLoading(true);

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         formData.email,
//         formData.password
//       );
//       const user = userCredential.user;

//       // ✅ Fetch user details from Firestore
//       const userDocRef = doc(db, "users", user.uid);
//       const userDocSnap = await getDoc(userDocRef);

//       if (userDocSnap.exists()) {
//         const userData = userDocSnap.data();
//         setUsername(userData.name || "User"); // Update state with username
//         console.log("Fetched Username:", userData.name);
//       } else {
//         console.log("No user data found in Firestore");
//       }

//       setSuccess("Login successful! Redirecting...");
//       setTimeout(() => {
//         setIsLoading(false);
//         navigate("/home");
//       }, 1000);
//     } catch (err) {
//       setIsLoading(false);
//       setError("Invalid email or password. Please try again.");
//       setSuccess("");
//     }
//   };

//   return (
//     <div className="flex-center">
//       {isLoading ? (
//         <Shimmer />
//       ) : (
//         <div className="form-card-login">
//           <h2 className="form-title-login">Login</h2>
//           {error && <p className="error-message-login">{error}</p>}
//           {success && <p className="success-message-login">{success}</p>}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="input-label-login">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="input-field-login"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="input-label-login">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="input-field-login"
//                 required
//               />
//             </div>
//             <button type="submit" className="button-login">
//               Login
//             </button>
//           </form>

//           {/* Sign In link below the login form */}
//           <p className="signup-link">
//             Don't have an account? <NavLink to="/signup">Sign up here</NavLink>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;











import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/firebase"; // Firestore is removed
import "./login.css";
import Shimmer from "./shimmer";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Logging in... Please wait.");
    setIsLoading(true);

    try {
      // Firebase login
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      console.log("User logged in:", user);

      // Store user session
      localStorage.setItem("username", user.displayName || "User");
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userId", user.uid);

      setSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        setIsLoading(false);
        navigate("/home");
      }, 1000);
    } catch (err) {
      console.error("Firebase Auth Error:", err);
      setIsLoading(false);
      setError("Invalid email or password. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="flex-center">
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="form-card-login">
          <h2 className="form-title-login">Login</h2>
          {error && <p className="error-message-login">{error}</p>}
          {success && <p className="success-message-login">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="input-label-login">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field-login"
                required
              />
            </div>
            <div className="mb-4">
              <label className="input-label-login">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field-login"
                required
              />
            </div>
            <button type="submit" className="button-login">Login</button>
          </form>
          <p className="signup-link">
            Don't have an account? <NavLink to="/signup">Sign up here</NavLink>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
