import { Link } from 'react-router-dom';
import './GetStarted.css';

const GetStarted = () => {
  const perksList = [
    'No setup fee',
    'Cancel anytime',
    'Start in 24–48 hours',
    '24/7 dispatch support'
  ];

  const whatYouGetList = [
    'Dedicated dispatcher assigned to you',
    'High-paying loads matched to your truck',
    'All broker communication handled',
    'Paperwork, BOLs and invoicing covered',
    'Route optimization to reduce empty miles',
    'Round-the-clock support every day'
  ];

  return (
    <section className="getstarted-section" id="get-started">
      <div className="getstarted-inner">
        
        <div className="getstarted-text">
          <h2>Ready to Start Moving Loads?</h2>
          <p>
            Join hundreds of drivers and carriers already growing their business with Loadify. 
            Register today and get your first load within 24–48 hours.
          </p>

          <ul className="getstarted-perks">
            {perksList.map((perk, index) => (
              <li key={index}>{perk}</li>
            ))}
          </ul>

          <div className="getstarted-buttons">
            <Link to="/driver" className="gs-btn-primary">
              Register as Driver
            </Link>
            <Link to="/pricing" className="gs-btn-secondary">
              View Pricing Plans
            </Link>
          </div>
        </div>

        <div className="getstarted-card">
          <div className="gs-card-icon">&#x1F69B;</div>
          <h3>What You'll Get</h3>
          <ul className="gs-card-list">
            {whatYouGetList.map((item, index) => (
              <li key={index}>
                <div className="gs-check">✓</div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/driver" className="gs-btn-card">
            Get Started Now →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GetStarted;