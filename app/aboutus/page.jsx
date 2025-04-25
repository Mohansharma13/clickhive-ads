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
                    <h1 className="hero-title">Who We Are</h1>
                    <div className="hero-quote">
                        "Empowering your brand with bold digital strategies"
                    </div>
                    <p className="hero-description">
                        Based in New Delhi, India, we're a dynamic digital agency fueled by creativity and expertise. Our team delivers cutting-edge solutions, staying ahead of trends to help your business shine online.
                    </p>
                    <Link href="/ourservices">
                        <button className="hero-cta-button">Discover Our Services</button>
                    </Link>
                    </section>
                    <section className="hero-image">
                    <img src="aboutus/heroimage.jpg" alt="Our Creative Team" />
                    </section>
                </div>
                </div>


            {/* Why Choose Us */}
            <section className="aboutus-values">
                <h2>Why Work With Us</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">💡</div>
                        <h3>Fresh Ideas</h3>
                        <p>We're not stuck in old ways - we bring innovative solutions tailored for today's digital landscape.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3>Personal Attention</h3>
                        <p>As a smaller agency, every client gets our full focus and dedication.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">💰</div>
                        <h3>Cost Effective</h3>
                        <p>We deliver premium quality without the premium price tag of larger agencies.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">⚡</div>
                        <h3>Quick Turnaround</h3>
                        <p>Less bureaucracy means faster results for your business.</p>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="aboutus-mission">
                <h2>Our Mission</h2>
                <p>
                    We're on a mission to help small and medium businesses thrive online. In a world where digital presence makes or breaks businesses, we provide the tools, strategies, and expertise to help you compete with bigger players. We measure our success by your growth.
                </p>
            </section>

            {/* Our Approach */}
            <section className="aboutus-approach">
                <h2>How We Work</h2>
                <div className="approach-steps">
                    <div className="approach-step">
                        <span className="step-number">1</span>
                        <div>
                            <h3>Listen</h3>
                            <p>We start by understanding your unique business needs and goals.</p>
                        </div>
                    </div>
                    <div className="approach-step">
                        <span className="step-number">2</span>
                        <div>
                            <h3>Plan</h3>
                            <p>We create a customized strategy designed for your budget and market.</p>
                        </div>
                    </div>
                    <div className="approach-step">
                        <span className="step-number">3</span>
                        <div>
                            <h3>Create</h3>
                            <p>Our team brings the strategy to life with quality execution.</p>
                        </div>
                    </div>
                    <div className="approach-step">
                        <span className="step-number">4</span>
                        <div>
                            <h3>Grow</h3>
                            <p>We continuously optimize based on performance data.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="aboutus-team">
                <h2>Meet Our Leaders</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src="aboutus/mohan.jpg" alt="Mohan - Creative Director" />
                        <h3>Mohan</h3>
                        <p>Creative Director</p>
                        <p>Founder, CTO</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/mohan-sharma-71a301218/"><span>LinkedIn</span></a>
                            <a href="https://www.instagram.com/_mohan_sharma__?utm_source=qr&igsh=NHAxZXphZ3RsbWY1"><span>Instagram</span></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="aboutus/akshat.jpeg" alt="Akshat - Marketing Strategist" />
                        <h3>Akshat</h3>
                        <p>Marketing Strategist</p>
                        <p>CEO</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/akshat-sinha-540202225/"><span>LinkedIn</span></a>
                            <a href="https://www.instagram.com/akshatsinha1077?igsh=MTh0dHEwbHB4a2p1ZQ"><span>Instagram</span></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="aboutus/prerna.jpg" alt="Prerna - Social Media Manager" />
                        <h3>Prerna</h3>
                        <p>Social Media Manager</p>
                        <div className="social-links">
                            {/* <a href="#"><span>LinkedIn</span></a> */}
                            <a href="https://www.instagram.com/_mainspring_?igsh=dTJ4Ymx5OHppZjVn"><span>Instagram</span></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {/* <section className="aboutus-testimonials">
                <h2>What Our Early Clients Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "Despite being a new agency, they delivered results that exceeded our expectations. Very impressed with their dedication!"
                        </div>
                        <div className="testimonial-author">
                            <img src="aboutus/client1.jpg" alt="Client" />
                            <div>
                                <h4>Rajesh Mehta</h4>
                                <p>Local Restaurant Owner</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "They took the time to really understand our small business needs. Our social media engagement has never been better."
                        </div>
                        <div className="testimonial-author">
                            <img src="aboutus/client2.jpg" alt="Client" />
                            <div>
                                <h4>Priyanka Sharma</h4>
                                <p>Boutique Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="aboutus-cta">
                <h2>Ready to Grow Your Business Online?</h2>
                <p>Let's build your digital presence together. As a new agency, we're hungry to prove ourselves and committed to your success.</p>
                <Link href='/contact'><button className="cta-button">Get Started</button></Link>
            </section>
        </div>
    );
}

export default AboutUs;