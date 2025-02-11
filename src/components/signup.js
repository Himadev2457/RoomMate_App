import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase"; // Ensure correct import
import Shimmer from "./shimmer";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Validation Function
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Processing your signup... Please wait.");
    setIsLoading(true);

    try {
      // ✅ Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // ✅ Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile || "",
        createdAt: new Date().toISOString(),
      });

      setIsLoading(false);
      setSuccess("Signup successful! Redirecting...");

      // ✅ Redirect after 1 second
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="flex-center">
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="form-card-signup">
          <h2 className="form-title-signup">Signup</h2>
          {error && <p className="error-message-signup">{error}</p>}
          {success && <p className="success-message-signup">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="input-label-signup">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field-signup"
                required
              />
            </div>
            <div className="mb-4">
              <label className="input-label-signup">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field-signup"
                required
              />
            </div>
            <div className="mb-4">
              <label className="input-label-signup">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field-signup"
                required
              />
            </div>
            <div className="mb-4">
              <label className="input-label-signup">Mobile (Optional)</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="input-field-signup"
              />
            </div>
            <button type="submit" className="button-signup">Signup</button>
          </form>
          <p className="login-text">
            Already have an account? <span className="login-link" onClick={() => navigate("/login")}>Login here</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Signup;
