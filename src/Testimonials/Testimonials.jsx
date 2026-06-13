import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      quote: '"',
      text: "Loadify increased my weekly revenue by 30%. The team is always proactive with load options and I never run empty anymore. Best dispatch decision I've made.",
      avatarInitials: 'SN',
      name: 'Najaf Imran',
      role: 'Owner Operator Flatbed',
      stars: '★★★★★'
    },
    {
      id: 2,
      quote: '"',
      text: "Very professional dispatch team. They handle all the broker calls and paperwork so I can focus entirely on driving. Highly recommend to any trucker.",
      avatarInitials: 'AH',
      name: 'Abdul Hadi',
      role: 'CDL Driver Reefer',
      stars: '★★★★★'
    },
    {
      id: 3,
      quote: '"',
      text: "Switched from managing dispatch myself and instantly saved hours every week. Their rate negotiation alone paid for the service ten times over.",
      avatarInitials: 'SQ',
      name: 'Saad Qasim',
      role: 'Fleet Owner 4 Trucks',
      stars: '★★★★★'
    },
    {
      id: 4,
      quote: '"',
      text: "I was skeptical at first but Loadify delivered from day one. Got me set up and running loads within 48 hours. The 24/7 support is a real game changer.",
      avatarInitials: 'A',
      name: 'Ali',
      role: 'Owner Operator Dry Van',
      stars: '★★★★★'
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-inner">
        
        <div className="section-header">
          <h2 className="testi-heading">What Our Drivers Say</h2>
          <div className="testi-accent-bar"></div>
          <p className="testi-subtext">
            Real feedback from real owner-operators and fleet managers who trust Loadify.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div className="testi-card" key={testimonial.id}>
              <div className="testi-quote">{testimonial.quote}</div>
              <p className="testi-text">{testimonial.text}</p>
              <div className="testi-author">
                <div className="testi-avatar">{testimonial.avatarInitials}</div>
                <div>
                  <div className="testi-name">{testimonial.name}</div>
                  <div className="testi-role">{testimonial.role}</div>
                  <div className="testi-stars">{testimonial.stars}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;