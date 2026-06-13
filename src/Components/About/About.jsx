import { useState } from 'react';
import './About.css';
import TruckImage from '../../assets/images/Truck2.jpg';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleLearnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="about" id="about">
      <div className="about-card">
        <div className="about-top">
          <div className="about-text">
            <h2>About Us</h2>
            <div className="about-accent-bar"></div>
            <p>
              Loadify is a trusted truck dispatching platform committed to connecting drivers and
              trucking companies with high-quality freight opportunities. We focus on streamlining
              operations, improving load access and enhancing overall efficiency in logistics management.
            </p>
            <p>
              Our goal is to empower drivers and carriers with reliable 24/7 dispatch support,
              optimized routing and consistent load coordination helping businesses maximize
              productivity and profitability.
            </p>

            <p className={`extra-text-about ${showMore ? 'show' : ''}`}>
              Beyond standard dispatching, we deliver end-to-end logistics support designed to
              simplify operations and drive consistent growth. From real-time load tracking and
              strategic broker communication to accurate paperwork handling, we ensure every
              aspect of your dispatch process runs efficiently and without delays.
              <br /><br />
              Our team focuses on securing high-value loads, optimizing routes and reducing
              empty miles to improve overall profitability. We handle rate negotiations,
              confirmations and operational coordination with precision, allowing you to stay
              focused on the road.
              <br /><br />
              With round-the-clock support, transparent communication and a results-driven
              approach, we position ourselves as a reliable partner committed to keeping your
              trucks moving and your business scaling smoothly.
            </p>

            <button type="button" className="btn" id="learnBtn" onClick={toggleLearnMore}>
              {showMore ? 'Show Less' : 'Learn More'}
            </button>
          </div>
          <div className="about-img">
            <img src={TruckImage} alt="Truck Image" />
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-num">500+</div>
            <div className="stat-label">Loads Delivered</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">24/7</div>
            <div className="stat-label">Dispatch Support</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">98%</div>
            <div className="stat-label">On-Time Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;