import React, { useState, useEffect } from "react";
import { collection, addDoc, doc, Timestamp } from "firebase/firestore";
import { db, auth } from "../../../firebase/firebase"; // Ensure correct imports
import { onAuthStateChanged } from "firebase/auth";
import "../css/report.css";

const Report = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const [userId, setUserId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Listen for Auth State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid); // Set logged-in user's ID
      } else {
        setUserId(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("You must be logged in to submit a report.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Store report under the user's document with a timestamp
      const userRef = doc(db, "users", userId);
      await addDoc(collection(userRef, "reports"), {
        ...formData,
        timestamp: Timestamp.now(), // Add timestamp
      });

      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);

      setFormData({ fullName: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error submitting report:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="report-container">
      {/* Left Section - Contact Info */}
      <div className="contact-info">
        <h2>Get in touch today</h2>
        <p>We appreciate your feedback and are happy to help. Reach out to us anytime!</p>
        <div className="contact-details">
          <p><strong>Email:</strong> contact@company.com</p>
          <p><strong>Phone:</strong> (123) 123-3213</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="report-form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="company" placeholder="Company (Optional)" value={formData.company} onChange={handleChange} />
          <textarea name="message" placeholder="Leave a message" value={formData.message} onChange={handleChange} required></textarea>
          

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Notification Modal */}
      {showNotification && (
        <div className="notification">
          <p>Email Sent Successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Report;
