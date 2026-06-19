import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });

  const contactInfo = [
    {
      id: 1,
      icon: String.fromCodePoint(0x1F4CD),
      title: 'Visit Us',
      details: ['123 Main Street,', 'Kamra, Pakistan']
    },
    {
      id: 2,
      icon: String.fromCodePoint(0x1F4DE),
      title: 'Call Us',
      details: ['+92 (123) 456-7890', '+92 (123) 456-7891']
    },
    {
      id: 3,
      icon: String.fromCodePoint(0x2709),
      title: 'Email Us',
      details: ['info@loadify.com', 'support@loadify.com']
    },
    {
      id: 4,
      icon: String.fromCodePoint(0x1F550),
      title: 'Working Hours',
      details: ['Monday - Friday: 24/7', 'Saturday - Sunday: 24/7']
    }
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: null });

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus({ submitted: true, loading: false, error: null });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch {
      setFormStatus({ submitted: false, loading: false, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <>
      <section className="contact-hero">
        <h1>Get In <span>Touch</span></h1>
        <p>We're here to help 24/7. Reach out to us anytime.</p>
      </section>

      <div className="contact-info">
        {contactInfo.map((info) => (
          <div className="info-card" key={info.id}>
            <div className="info-icon">{info.icon}</div>
            <h3>{info.title}</h3>
            {info.details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="contact-form-container">
        <div className="form-header">
          <h2>Send Us a Message</h2>
          <p>We'll get back to you within 24 hours</p>
        </div>

        <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+92 XXX XXXXXXX"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
              >
                <option value="">Select subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support Request</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="billing">Billing Question</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Tell us how we can help you..."
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {formStatus.error && (
            <div className="form-error">{formStatus.error}</div>
          )}

          {formStatus.submitted && (
            <div className="form-success">Message sent successfully! We'll get back to you soon.</div>
          )}

          <button type="submit" className="submit-btn" disabled={formStatus.loading}>
            {formStatus.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <section className="map-section">
        <h2>Find Us Here</h2>
        <div className="section-accent"></div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28955.668470918923!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0666b8b2b1%3A0x8b7c8b2b1b2b1b2!2sKarachi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Loadify Location Map"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactForm;