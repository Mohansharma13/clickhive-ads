'use client';

import "@styles/OurServices.css";
import Link from "next/link";
import { services } from "@components/Api/OurserviceApi";

function OurServices() {
  return (
    <div className="our-services-page">
      <header className="services-hero">
        <h1>Our Services</h1>
        <p>At ClickHive, we turn creativity into results — here's how we help your brand grow.</p>
      </header>

      <section className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link href={`/ourservices/${index}`} className="cardButton">
              Read More..
            </Link>
          </div>
        ))}
      </section>

      <footer className="services-footer">
        <h3>Want to work with us?</h3>
        <p>Let's discuss your goals and build a custom strategy together.</p>
        <Link href="/contact" className="get-started-button">
          Get Started
        </Link>
      </footer>
    </div>
  );
}

export default OurServices;