'use client';

import { useEffect } from "react";
import React from "react";
import "@styles/aboutus.css"
import Link from "next/link";
import QuoteCarousel from "@components/UI/quotes"

import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
      useEffect(() => {
        AOS.init({
        duration: 500,
        once: true,
        easing: "ease-in-out",
        });
      }, []);

    return (
        <div className="aboutus">
            {/* Hero Section */}
            <div className="aboutus-hero" data-aos="fade-in">
                <div className="hero-content">
                <section className="hero-text" data-aos="fade-right">
                    <h1 className="hero-title">Get to Know Us</h1>
                    <div className="hero-quote">"Bold ideas. Smart strategies. Real results."</div>
                    <p className="hero-description">
                    We’re a New Delhi-based digital marketing collective, driven by innovation and strategy...
                    </p>
                    <Link href="/ourservices">
                    <button className="hero-cta-button">Explore Our Services</button>
                    </Link>
                </section>
                <section className="hero-image" data-aos="fade-left">
                    <img src="aboutus/heroimage.jpg" alt="Our Creative Team" />
                </section>
                </div>
            </div>

            {/* Why Choose Us */}
            <section className="aboutus-values" data-aos="fade-up">
                <h2>Why Choose Us</h2>
                <div className="values-grid">
                <div className="value-card" data-aos="zoom-in">
                    <div className="value-icon">💡</div>
                    <h3>Inventive Thinking</h3>
                    <p>We deliver fresh, out-of-the-box ideas...</p>
                </div>
                <div className="value-card" data-aos="zoom-in" data-aos-delay="100">
                    <div className="value-icon">🤝</div>
                    <h3>Dedicated Service</h3>
                    <p>As a boutique agency, we give every client focused attention...</p>
                </div>
                <div className="value-card" data-aos="zoom-in" data-aos-delay="200">
                    <div className="value-icon">💰</div>
                    <h3>Smart Budgeting</h3>
                    <p>We bring top-tier results without the overhead...</p>
                </div>
                <div className="value-card" data-aos="zoom-in" data-aos-delay="300">
                    <div className="value-icon">⚡</div>
                    <h3>Fast Execution</h3>
                    <p>Our lean structure means we move quickly...</p>
                </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="aboutus-mission" data-aos="fade-right">
                <h2>Our Mission</h2>
                <p>We’re here to help small and mid-sized brands break barriers online...</p>
            </section>

            {/* Our Approach */}
            <section className="aboutus-approach" data-aos="fade-left">
                <h2>Our Method</h2>
                <div className="approach-steps">
                <div className="approach-step" data-aos="fade-up">
                    <span className="step-number">1</span>
                    <div>
                    <h3>Understand</h3>
                    <p>We begin by deeply understanding your goals...</p>
                    </div>
                </div>
                <div className="approach-step" data-aos="fade-up" data-aos-delay="100">
                    <span className="step-number">2</span>
                    <div>
                    <h3>Strategize</h3>
                    <p>We craft a tailored roadmap that aligns with your vision...</p>
                    </div>
                </div>
                <div className="approach-step" data-aos="fade-up" data-aos-delay="200">
                    <span className="step-number">3</span>
                    <div>
                    <h3>Execute</h3>
                    <p>From visuals to campaigns, we execute...</p>
                    </div>
                </div>
                <div className="approach-step" data-aos="fade-up" data-aos-delay="300">
                    <span className="step-number">4</span>
                    <div>
                    <h3>Optimize</h3>
                    <p>We refine and improve based on real-time data...</p>
                    </div>
                </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="aboutus-team" data-aos="fade-in">
                <h2>Meet the Founders</h2>
                <div className="team-grid">
                <div className="team-member" data-aos="zoom-in">
                    <img src="aboutus/mohan.jpg" alt="Mohan - Creative Director" />
                    <h3>Mohan</h3>
                    <p>Creative Director & Co-Founder</p>
                    <div className="social-links">
                    <a href="#"><span>LinkedIn</span></a>
                    </div>
                </div>
                <div className="team-member" data-aos="zoom-in" data-aos-delay="100">
                    <img src="aboutus/akshat.jpeg" alt="Akshat - Marketing Strategist" />
                    <h3>Akshat</h3>
                    <p>Marketing Head & Co-Founder</p>
                </div>
                <div className="team-member" data-aos="zoom-in" data-aos-delay="200">
                    <img src="aboutus/prerna.jpg" alt="Prerna - Social Media Manager" />
                    <h3>Prerna</h3>
                    <p>Head of Social Media</p>
                </div>
                </div>
            </section>
            <div data-aos="fade-up" data-aos-delay="200" >
            <QuoteCarousel/>
            </div>
            {/* CTA Section */}
            <section className="aboutus-cta" data-aos="fade-up">
                <h2>Let’s Take Your Brand Further</h2>
                <p>We’re passionate, driven, and ready to elevate your online presence...</p>
                <Link href='/contact'><button className="cta-button">Start the Journey</button></Link>
            </section>
        </div>

    );
}

export default AboutUs;
