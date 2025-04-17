'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import QuoteCarousel from "@components/UI/quotes"
import "../styles/Home.css"

const clintslogo = [
  "/assets/clintslogo/Caramelly Logo.jpg",
  "/assets/clintslogo/hitachi.webp",
  "You Can Be Next.."
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home">

      {/* Hero Section with Video Background */}
      <div className="main-hero">
        <video
          className="video-bg"
          autoPlay
          muted
          loop
          playsInline
          key={isMobile ? "mobile" : "desktop"}
        >
          <source src={isMobile ? "/assets/mobile-laptop-bg.mp4" : "/assets/bg-final.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Text and Call to Action */}
        <div className="left-hero">
          <div className="hero-upper">
            <h1>Turning Clicks Into Customers</h1>
          </div>
          <div className="hero-mid">
            <h1>Click Hive</h1>
          </div>
          <div className="hero-lower">
            <h1>Where Creativity Meets Conversion.</h1>
          </div>
          <Link href="/ourservices" className="hero-button">
            Our Services
          </Link>
        </div>

        <div className="right-hero"></div>
      </div>

      {/* About Section */}
      <div className="aboutus">
        <div className="what-we-do">
          <div className="what-left">
            <h1 className="what-heading">
              What <span className="highlighted-text">we</span>
              <span className="do">
                do<span className="question">?</span>
              </span>
            </h1>
            <p className="what-subtext">
              Want to expand your business? <br />
              <b>Join</b> ClickHive to kickstart your marketing reach
            </p>
          </div>

          <div className="digital">
            <div className="what-center">
              <h2>Digital.</h2>
              <div className="underline"></div>
              <p className="italic">We create super-rich experiences online!</p>
              <p className="text-section">
                ClickHive is a full-scale Digital Marketing Agency based in New Delhi, India.
                We blend years of experience and knowledge to create performance-driven and creative solutions.
              </p>
              <Link href="/ourservices" className="link">
                ABOUT US
              </Link>
            </div>

            <div className="what-right">
              <h2>And More Digital.</h2>
              <div className="underline"></div>
              <p className="italic">Marketing brands with care</p>
              <p className="text-section">
                What is marketing if it's not performance-driven? <br />
                We create digital experiences that stick and achieve results. 
                Trust us to make your brand visible and desired through focused marketing.
              </p>
              <Link href="/ourservices" className="link">
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Posters Section */}
      <div className="posters">
        <div className="seo-optimization">
          <h1>SEO Optimization</h1>
        </div>

        <div className="four-posters">
          <div className="upper2">
            <div className="upper2left">
              <h1>Social Media Marketing</h1>
            </div>
            <div className="upper2right">
              <h1>Analytics</h1>
            </div>
          </div>

          <div className="lower2">
            <div className="lower2left">
              <h1>Website Design & Development</h1>
            </div>
            <div className="lower2right">
              <h1>Performance Marketing</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Solutions Section */}
      <div className="solution">
        {/* Section 1 */}
        <div className="connected-section alternate">
          <div className="connected-text">
            <h2>Integrated Digital Solutions</h2>
            <h4><em>Insights, Metrics and Analytics - Everything is connected!</em></h4>
            <p>
              In a connected digital world, our approach to communication combines creativity and technology.
              From mobile to social media, everything works together under one roof.
            </p>
          </div>
          <div className="connected-image">
            <img src="/assets/intergation.jpg" alt="Everything is connected" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="connected-section">
          <div className="connected-image">
            <img src="/assets/workinghard.jpg" alt="Creative strategies" />
          </div>
          <div className="connected-text">
            <h2>Creative Digital Strategies</h2>
            <h4><em>Data. Design. Delivery – Perfectly Aligned!</em></h4>
            <p>
              Our strategies fuse design and data. From SEO to paid ads, we deliver precision-built,
              result-oriented marketing strategies that offer a superior user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <section className="our-clients-section">
        <h2 className="clients-title">Our Clients</h2>
        <p className="clients-subtitle">We're just getting started — your brand could be next!</p>

        <div className="clients-logos">
          {clintslogo.map((item, index) => (
            <div className="client-logo placeholder" key={index}>
              <div className="logoimage">
                {item.includes(".jpg") || item.includes(".webp") ? (
                  <img src={item} alt={`Client logo ${index}`} />
                ) : (
                  <p>{item}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="clients-footer">We’re proud to be new and driven — let’s grow together.</p>
      </section>

      {/* Quotes Carousel */}
      <QuoteCarousel />
    </div>
  );
}
