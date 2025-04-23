'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import "@styles/headder.css"; // Adjust path as per your folder structure

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector(".header-grid");

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        header.style.transform = "translateY(-100%)"; // Hide
      } else {
        header.style.transform = "translateY(0)"; // Show
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-grid" ref={menuRef}>
      <div className="logo">
        <Link href="/" className="logo-link" onClick={() => setMenuOpen(false)}>
          <Image
            src="/assets/clickhive.png"
            alt="ClickHive Logo"
            width={50}
            height={50}
            className="clickhive-icon"
          />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </div>

      {/* Navigation */}
      <nav className={`Routes ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/ourservices" className="nav-link" onClick={() => setMenuOpen(false)}>Our Services</Link>
          </li>
          <li>
            <Link href="/aboutus" className="nav-link" onClick={() => setMenuOpen(false)}>About us</Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
