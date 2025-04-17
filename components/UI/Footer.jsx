'use client';

import Link from "next/link";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import "@styles/footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-brand">
          <Image src="/assets/icon-clickhive.png" alt="ClickHive Logo" width={50} height={50} className="clickhive-icon" />
          <h2>Click Hive</h2>
          <p>Your Digital Growth Partner</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ourservices">Services</Link></li>
            <li><Link href="/ourwork">Our Work</Link></li>
            <li><Link href="/aboutus">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: clickhiveads@gmail.com</p>
          <p>Phone: +91 8595042651</p>
          <p>Delhi, India</p>
        </div>

        {/* Social Media */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="footer-icon-div">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <IoLogoFacebook className="icons" />
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram className="icons" />
            </a>
            <a href="https://www.linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icons" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Click Hive. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
