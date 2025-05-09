'use client';
import '@styles/ecom.css';
import Link from 'next/link';

const services = [
  {
    title: 'Listing Optimization',
    desc: 'Optimized titles, A+ content, and bullet points to boost ranking and conversion.',
  },
  {
    title: 'Account Management',
    desc: 'We handle inventory, pricing, returns, and everything else for your brand on Amazon & Flipkart.',
  },
  {
    title: 'Marketplace Ads',
    desc: 'ROI-driven ads on Amazon & Flipkart to maximize visibility and sales.',
  },
  {
    title: 'Catalog Setup & Compliance',
    desc: 'Get platform-ready catalogs with seamless onboarding and zero listing errors.',
  },
  {
    title: 'End-to-End Growth Strategy',
    desc: 'We analyze competition and build performance dashboards to scale your brand fast.',
  },
];

function Ecom(){
 return(
  <div className='ecombody'>
  <section className="ecomhero">
        <div className="herotext">
          <h1 className="headline">Grow Smarter, Sell Faster</h1>
          <h1 className="highlight">Across Amazon, Flipkart & Beyond</h1>
          <p className="tagline">
            We power your brand with full-service eCommerce management, SEO, and ROI-driven ads on Google & Meta.
          </p>
      </div>
      <div className="heroimage">

      </div>
  </section>
    <section className="services">
      <h2 className="section-title">Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="cta">
      <h2>Ready to Grow Your Brand?</h2>
      <p>Let’s build your marketplace dominance together.</p>
      <Link href='/contact'>
        <button className="cta-button">Book a Free Consultation</button>
      </Link>
    </section>
  </div>
 );
}
export default Ecom;