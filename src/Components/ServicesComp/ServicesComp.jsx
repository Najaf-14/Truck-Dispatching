// ? Services Component for Services Page
import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesComp.css';

const ServicesComp = () => {
  const servicesData = [
    {
      id: 1,
      icon: String.fromCodePoint(0x1F9E0),
      title: 'Full Truck Load (FTL) Dispatch',
      description: 'We find the best FTL loads for your truck, negotiate top rates and handle all broker communication so you don\'t have to.',
      tag: 'Most Popular'
    },
    {
      id: 2,
      icon: String.fromCodePoint(0x1F69A),
      title: 'Less Than Truckload (LTL) Dispatch',
      description: 'Maximize earnings by combining multiple shipments. We coordinate pickups and drop-offs for optimal, profitable routes.',
      tag: 'Flexible'
    },
    {
      id: 3,
      icon: String.fromCodePoint(0x1F4AC),
      title: '24/7 Live Dispatch Support',
      description: 'Our dispatchers are available around the clock to handle load updates, delays and urgent situations in real time.',
      tag: 'Always On'
    },
    {
      id: 4,
      icon: String.fromCodePoint(0x1F4CB),
      title: 'Document & Paperwork Management',
      description: 'We handle rate confirmations, BOLs, invoices and all paperwork keeping your operations clean and audit-ready.',
      tag: 'Hassle-Free'
    },
    {
      id: 5,
      icon: String.fromCodePoint(0x1F4B0),
      title: 'Rate Negotiation & Billing',
      description: 'We negotiate the best rates with brokers and shippers on your behalf and follow up to ensure you get paid on time.',
      tag: 'Earn More'
    },
    {
      id: 6,
      icon: String.fromCodePoint(0x1F4CD),
      title: 'Route Planning & Optimization',
      description: 'Smart routing to cut fuel costs, minimize empty miles and keep your schedule tight and profitable every week.',
      tag: 'Efficient'
    }
  ];

  const statsData = [
    { id: 1, number: '500+', label: 'Loads Dispatched Monthly' },
    { id: 2, number: '97%', label: 'On-Time Delivery Rate' },
    { id: 3, number: '24/7', label: 'Live Dispatcher Availability' },
    { id: 4, number: '0%', label: 'Hidden Fees Ever' }
  ];

  return (
    <>
      <section className="services-hero">
        <h1>Our <span>Dispatching</span> Services</h1>
        <p>End-to-end truck dispatching solutions built for owner-operators and fleets so you stay on the road and we handle the rest.</p>
      </section>

      <section className="services-section">
        <h2>What We Offer</h2>
        <div className="section-accent"></div>

        <div className="cards-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="card-tag">{service.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="why-strip">
        <h2>Why Carriers Choose Loadify</h2>
        <p>Thousands of owner-operators trust us to keep their trucks moving and their revenue growing.</p>
        <div className="why-grid">
          {statsData.map((stat) => (
            <div className="why-item" key={stat.id}>
              <div className="why-num">{stat.number}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="cta-section">
        <h2>Ready to Keep Your Truck Moving?</h2>
        <p>Get started today — no long-term contracts, just results.</p>
        <Link to="/contact" className="btn">Contact Us</Link>
        <Link to="/pricing" className="btn btn-outline">View Pricing</Link>
      </section>
    </>
  );
};

export default ServicesComp;