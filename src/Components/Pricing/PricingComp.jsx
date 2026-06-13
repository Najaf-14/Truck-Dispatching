import { Link } from 'react-router-dom';
import './PricingComp.css';

const PricingComp = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic',
      badge: 'Popular',
      price: '299',
      period: '/month',
      description: 'Perfect for owner-operators with 1-2 trucks',
      featured: false,
      features: [
        '✓ Up to 2 trucks',
        '✓ 24/7 Load Dispatch',
        '✓ Basic Rate Negotiation',
        '✓ Email Support',
        '✓ Monthly Reports'
      ],
      buttonText: 'Get Started',
      buttonLink: '/driver'
    },
    {
      id: 2,
      name: 'Professional',
      badge: 'Best Value',
      price: '499',
      period: '/month',
      description: 'Ideal for growing fleets with 3-5 trucks',
      featured: true,
      features: [
        '✓ Up to 5 trucks',
        '✓ 24/7 Priority Dispatch',
        '✓ Advanced Rate Negotiation',
        '✓ Route Optimization',
        '✓ Phone & Email Support',
        '✓ Weekly Reports + Analytics'
      ],
      buttonText: 'Get Started',
      buttonLink: '/driver'
    },
    {
      id: 3,
      name: 'Enterprise',
      badge: 'Custom',
      price: 'Custom',
      period: '',
      description: 'For large fleets with 6+ trucks',
      featured: false,
      features: [
        '✓ Unlimited trucks',
        '✓ Dedicated Dispatch Team',
        '✓ Custom Rate Strategies',
        '✓ Full Fleet Management',
        '✓ 24/7 Priority Support',
        '✓ Custom Analytics Dashboard'
      ],
      buttonText: 'Contact Us',
      buttonLink: '/contact'
    }
  ];

  const faqItems = [
    {
      id: 1,
      question: 'Are there any hidden fees?',
      answer: 'No! Our pricing is 100% transparent. What you see is what you pay.'
    },
    {
      id: 2,
      question: 'Can I upgrade or downgrade anytime?',
      answer: 'Yes, you can change your plan at any time with 7 days notice.'
    },
    {
      id: 3,
      question: 'Is there a contract commitment?',
      answer: 'No long-term contracts. All plans are month-to-month.'
    },
    {
      id: 4,
      question: 'How do I get started?',
      answer: 'Simply click "Get Started" and fill out our driver registration form.'
    }
  ];

  return (
    <>
      <section className="pricing-hero">
        <h1>Simple, <span>Transparent</span> Pricing</h1>
        <p>No hidden fees, no long-term contracts. Pay only for what you need.</p>
      </section>

      <section className="pricing-section">
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            >
              <div className="plan-badge">{plan.badge}</div>
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                {plan.period && <span className="period">{plan.period}</span>}
              </div>
              <p className="plan-desc">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link to={plan.buttonLink} className="plan-btn">
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="section-accent"></div>
        <div className="faq-grid">
          {faqItems.map((item) => (
            <div className="faq-item" key={item.id}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-cta">
        <h2>Not sure which plan fits you?</h2>
        <p>Talk to our team and we'll help you choose the perfect plan.</p>
        <Link to="/contact" className="cta-btn">Contact Sales</Link>
      </section>
    </>
  );
};

export default PricingComp;