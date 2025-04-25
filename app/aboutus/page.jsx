'use client';

import React from "react";
import "@styles/aboutus.css"
import Link from "next/link";

function AboutUs() {
    return (
        <div className="aboutus">
            {/* Hero Section */}
            <div className="aboutus-hero">
                <div className="hero-content">
                    <section className="hero-text">
                    <h1 className="hero-title">Get to Know Us</h1>
                    <div className="hero-quote">
                        "Bold ideas. Smart strategies. Real results."
                    </div>
                    <p className="hero-description">
                        We’re a New Delhi-based digital marketing collective, driven by innovation and strategy. With a finger on the pulse of the latest trends, we create standout online experiences that help businesses cut through the noise.
                    </p>
                    <Link href="/ourservices">
                        <button className="hero-cta-button">Explore Our Services</button>
                    </Link>
                    </section>
                    <section className="hero-image">
                    <img src="aboutus/heroimage.jpg" alt="Our Creative Team" />
                    </section>
                </div>
            </div>

            {/* Why Choose Us */}
            <section className="aboutus-values">
                <h2>Why Choose Us</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">💡</div>
                        <h3>Inventive Thinking</h3>
                        <p>We deliver fresh, out-of-the-box ideas designed for the ever-changing digital world.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3>Dedicated Service</h3>
                        <p>As a boutique agency, we give every client focused attention and care.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">💰</div>
                        <h3>Smart Budgeting</h3>
                        <p>We bring top-tier results without the overhead costs of big firms.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">⚡</div>
                        <h3>Fast Execution</h3>
                        <p>Our lean structure means we move quickly—from idea to impact.</p>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="aboutus-mission">
                <h2>Our Mission</h2>
                <p>
                    We’re here to help small and mid-sized brands break barriers online. Our mission is to equip you with sharp strategies, effective tools, and a passionate team that fuels your digital growth. Your wins are our victories.
                </p>
            </section>

            {/* Our Approach */}
            <section className="aboutus-approach">
                <h2>Our Method</h2>
                <div className="approach-steps">
                    <div className="approach-step">
                        <span className="step-number">1</span>
                        <div>
                            <h3>Understand</h3>
                            <p>We begin by deeply understanding your goals, audience, and challenges.</p>
                        </div>
                    </div>
                    <div className="approach-step">
                        <span className="step-number">2</span>
                        <div>
                            <h3>Strategize</h3>
                            <p>We craft a tailored roadmap that aligns with your vision and resources.</p>
                        </div>
                    </div>
                    <div className="approach-step">
                        <span className="step-number">3</span>
                        <div>
                            <h3>Execute</h3>
                            <p>From visuals to campaigns, we execute every detail with precision.</p>
                        </div>
                    </div>
                    <div className="approach-step">
                        <span className="step-number">4</span>
                        <div>
                            <h3>Optimize</h3>
                            <p>We refine and improve based on real-time data and feedback.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="aboutus-team">
                <h2>Meet the Founders</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src="aboutus/mohan.jpg" alt="Mohan - Creative Director" />
                        <h3>Mohan</h3>
                        <p>Creative Director & Co-Founder</p>
                        <p>CTO</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/mohan-sharma-71a301218/"><span>LinkedIn</span></a>
                            <a href="https://www.instagram.com/_mohan_sharma__?utm_source=qr&igsh=NHAxZXphZ3RsbWY1"><span>Instagram</span></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="aboutus/akshat.jpeg" alt="Akshat - Marketing Strategist" />
                        <h3>Akshat</h3>
                        <p>Marketing Head</p>
                        <p>CEO</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/akshat-sinha-540202225/"><span>LinkedIn</span></a>
                            <a href="https://www.instagram.com/akshatsinha1077?igsh=MTh0dHEwbHB4a2p1ZQ"><span>Instagram</span></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="aboutus/prerna.jpg" alt="Prerna - Social Media Manager" />
                        <h3>Prerna</h3>
                        <p>Head of Social Media</p>
                        <div className="social-links">
                            <a href="https://www.instagram.com/_mainspring_?igsh=dTJ4Ymx5OHppZjVn"><span>Instagram</span></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="aboutus-cta">
                <h2>Let’s Take Your Brand Further</h2>
                <p>We’re passionate, driven, and ready to elevate your online presence. Partner with us and experience the difference a focused team can make.</p>
                <Link href='/contact'><button className="cta-button">Start the Journey</button></Link>
            </section>
        </div>
    );
}

export default AboutUs;
