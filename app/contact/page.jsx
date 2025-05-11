'use client';

import React, { useState } from "react";
import "@styles/ContactForm.css";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <h2>Let’s Work Together</h2>
        <p>Whether you're curious about features, a free trial, or even press—we're ready to answer any and all questions.</p>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-info-cards">
        <div className="card">
          <h3>📍 Address</h3>
          <p>A 26/8, North Chajjupur, Shahdara, Delhi - 110094</p>
        </div>
        <div className="card">
          <h3>📧 Email</h3>
          <p>clickhiveads@gmail.com</p>
        </div>
        <div className="card">
          <h3>📞 Phone</h3>
          <p>+91 9555705879</p>
        </div>
      </div>

      {/* Map */}
      <div className="map-wrapper">
        <iframe
          title="ClickHive Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.12302128714!2d77.04417229999999!3d28.5275548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5260d30823%3A0x9f69f727a6b8c5b2!2sShahdara%2C%20Delhi!5e0!3m2!1sen!2sin!4v1681641191345!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>

        <div className="faq">
          <h4>How quickly do you respond to inquiries?</h4>
          <p>We usually respond within 24 hours. Urgent requests get prioritized.</p>
        </div>

        <div className="faq">
          <h4>Do you offer free consultations?</h4>
          <p>Yes! We provide a free 30-minute strategy session to understand your needs.</p>
        </div>

        <div className="faq">
          <h4>What platforms do you specialize in?</h4>
          <p>We specialize in Amazon, Flipkart, Google Ads, Meta Ads, and SEO-based brand growth.</p>
        </div>

        <div className="faq">
          <h4>Can you help new businesses with no online presence?</h4>
          <p>Absolutely! We help you from scratch — from account setup and product listings to ad campaigns and website creation.</p>
        </div>

        <div className="faq">
          <h4>How do I get started with ClickHive?</h4>
          <p>You can start by filling out our contact form below. We’ll reach out within 24 hours to schedule a quick discovery call.</p>
        </div>

        <div className="faq">
          <h4>What industries do you serve?</h4>
          <p>We work across multiple industries including fashion, electronics, beauty, home decor, and niche products.</p>
        </div>

        <div className="faq">
          <h4>Do you provide performance reports?</h4>
          <p>Yes, we share weekly and monthly reports so you can track ad performance, growth, and ROI.</p>
        </div>
      </div>

      {/* Google Form */}
      <div className="contact-form-wrapper">
        {loading && (
          <div className="loader-overlay">
            <div className="loader"></div>
            <p className="loading-text">Loading form...</p>
          </div>
        )}

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdGYrInMEYEb8KLpylXKZHIYHLoql2Q-1UrCTXybPqPECyjAQ/viewform?embedded=true"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="ClickHive Contact Form"
          onLoad={handleLoad}
          style={{
            visibility: loading ? "hidden" : "visible",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
          loading="lazy"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default Contact;
