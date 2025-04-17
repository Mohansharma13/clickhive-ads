'use client'; // Must be at the very top

import "@styles/errorpage.css";
import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | ClickHive</title>
      </Head>
      
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1 className="error-title">Oops! Page Not Found</h1>
          <p className="error-message">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="cta-buttons">
            <Link href="/" className="home-button">
              Return Home
            </Link>
            <Link href="/contact" className="contact-button">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="not-found-illustration">
          {/* Add an SVG or image here */}
          <div className="error-robot">🤖</div>
        </div>
      </div>
    </>
  );
}
