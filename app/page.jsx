'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import QuoteCarousel from "@components/UI/quotes"
import "../styles/Home.css"

// fade animation
import AOS from "aos";
import "aos/dist/aos.css";

import { FaWhatsapp } from "react-icons/fa";

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

    AOS.init({
    duration: 500,
    once: true,
    easing: "ease-in-out",
    });

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
      <div className="aboutus-home">
        <div className="what-we-do">
          <div className="what-left" >
            <h1 className="what-heading">
              What <span className="highlighted-text">we</span>
              <span className="do">
                do<span className="question">?</span>
              </span>
            </h1>
            <p className="what-subtext">
              Ready to grow your business? <br />
              <b>Partner</b> with ClickHive and unlock your brand’s full digital potential.
            </p>
          </div>

          <div className="digital">
            <div className="what-center" data-aos="fade-up">
              <h2>Digital. Done Right.</h2>
              <div className="underline"></div>
              <p className="italic">We craft digital experiences that convert and connect.</p>
              <p className="text-section">
                ClickHive is a performance-focused digital marketing agency based in New Delhi, India.
                We combine creative storytelling with data-driven strategies to deliver results that matter—
                from clicks to conversions.
              </p>
              <Link href="/ourservices" className="link">
                ABOUT US
              </Link>
            </div>
              <div className="what-right" data-aos="fade-up">
                <h2>360° Digital Presence In E-commerce.</h2>
                <div className="underline"></div>
                <p className="italic">From listing optimization to full-stack web solutions.</p>
                <p className="text-section">
                  We support brands at every digital touchpoint—product listings, ad campaigns, SEO, and even custom websites.
                  Let ClickHive be your one-stop partner for all things digital.
                </p>
                <Link href="/ecom" className="link">
                  BOOST ON E-COMMERCE
                </Link>
            </div>

            <div className="what-right" data-aos="fade-up">
              <h2>Marketing with Impact.</h2>
              <div className="underline"></div>
              <p className="italic">Because visibility without results is just noise.</p>
              <p className="text-section">
                At ClickHive, we go beyond buzzwords. Our campaigns are designed to elevate your brand’s visibility
                and drive measurable growth. Whether it's Amazon, Flipkart, SEO, or Meta Ads—we make your brand matter.
              </p>
              <Link href="/ourservices" className="link">
                DISCOVER MORE
              </Link>
            </div>


          </div>
        </div>
      </div>



      {/* Posters Section */}
      <div className="posters">
        <div className="seo-optimization" data-aos="fade-right">
          <h1>SEO Optimization</h1>
        </div>

        <div className="four-posters">
          <div className="upper2">
            <div className="upper2left" data-aos="fade-left">
              <h1>Social Media Marketing</h1>
            </div>
            <div className="upper2right" data-aos="fade-left">
              <h1>Analytics</h1>
            </div>
          </div>

          <div className="lower2">
            <div className="lower2left" data-aos="fade-left">
              <h1>Website Design & Development</h1>
            </div>
            <div className="lower2right" data-aos="fade-left">
              <h1>Performance Marketing</h1>
            </div>
          </div>
        </div>
      </div>



      {/* Integrated Solutions Section */}
      <div className="solution">
        {/* Section 1 */}
        <div className="connected-section alternate">
          <div className="connected-text" data-aos="fade-right">
            <h2>Integrated Digital Solutions</h2>
            <h4><em>Insights, Metrics and Analytics - Everything is connected!</em></h4>
            <p>
              In a connected digital world, our approach to communication combines creativity and technology.
              From mobile to social media, everything works together under one roof.
            </p>
          </div>
          <div className="connected-image" data-aos="fade-left">
            <img src="/assets/intergation.jpg" alt="Everything is connected" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="connected-section">
          <div className="connected-image" data-aos="fade-up-right">
            <img src="/assets/workinghard.jpg" alt="Creative strategies" />
          </div>
          <div className="connected-text" data-aos="fade-up-left">
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
      <section className="our-clients-section" data-aos="fade-up">
        <h2 className="clients-title" data-aos="fade-down">Our Clients</h2>
        <p className="clients-subtitle" data-aos="fade-up">
          We're just getting started — your brand could be next!
        </p>

        <div className="clients-logos">
          {clintslogo.map((item, index) => (
            <div className="client-logo placeholder" key={index} data-aos="zoom-in">
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

        <p className="clients-footer" data-aos="fade-up">
          We’re proud to be new and driven — let’s grow together.
        </p>
      </section>

    </div>
  );
}
