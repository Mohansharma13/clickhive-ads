'use client'; // Required for using React hooks

import React, { useState } from "react";
import "@styles/ContactForm.css";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        {loading && (
          <div className="loader-overlay">
            <div className="loader"></div>
            <p>Loading form...</p>
          </div>
        )}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdGYrInMEYEb8KLpylXKZHIYHLoql2Q-1UrCTXybPqPECyjAQ/viewform?embedded=true"
          width="100%"
          height="500"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact Form"
          onLoad={handleLoad}
          style={{ 
            visibility: loading ? "hidden" : "visible",
            border: 'none',
            borderRadius: '8px' // Added for better appearance
          }}
          loading="lazy" // Added for better performance
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Contact;