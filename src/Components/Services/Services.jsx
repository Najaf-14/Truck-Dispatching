import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: String.fromCodePoint(0x1F69B),
      title: 'Load Finding',
      description: 'We source high-paying loads that match your truck type, location and schedule so you\'re never running empty.'
    },
    {
      id: 2,
      icon: String.fromCodePoint(0x1F53D),
      title: 'Route Optimization',
      description: 'We plan the most efficient routes to save fuel, reduce delays and maximize your earnings per mile.'
    },
    {
      id: 3,
      icon: String.fromCodePoint(0x1F4DE),
      title: '24/7 Dispatch Support',
      description: 'Round-the-clock support from experienced dispatchers who handle all broker communication on your behalf.'
    },
    {
      id: 4,
      icon: String.fromCodePoint(0x1F4C4),
      title: 'Paperwork & Docs',
      description: 'We handle rate confirmations, BOLs and invoicing so you can focus on driving instead of paperwork.'
    }
  ];

  return (
    <section className="services-preview" id="services">
      <div className="services-preview-container">
        
        <div className="services-preview-header">
          <h2>Our Services</h2>
          <div className="services-accent-bar"></div>
          <p className="services-tagline">
            Reliable. Efficient. Scalable dispatch solutions for modern trucking businesses.
          </p>
          <p>
            We provide end-to-end dispatch solutions tailored for trucking businesses of all sizes. From finding
            profitable loads to managing communication and paperwork, our goal is to streamline your operations,
            reduce downtime and help you scale with confidence.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-preview-footer">
          <p>
            Whether you're an owner operator or managing a fleet, our team ensures smooth coordination and
            consistent load opportunities.
          </p>
          <Link to="/services" className="btn">
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;