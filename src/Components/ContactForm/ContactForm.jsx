import { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
  });

  const contactInfo = [
    {
      id: 1,
      icon: String.fromCodePoint(0x1f4cd),
      title: "Visit Us",
      details: ["123 Main Street,", "Kamra, Pakistan"],
    },
    {
      id: 2,
      icon: String.fromCodePoint(0x1f4de),
      title: "Call Us",
      details: ["+92 (123) 456-7890", "+92 (123) 456-7891"],
    },
    {
      id: 3,
      icon: String.fromCodePoint(0x2709),
      title: "Email Us",
      details: ["info@loadify.com", "support@loadify.com"],
    },
    {
      id: 4,
      icon: String.fromCodePoint(0x1f550),
      title: "Working Hours",
      details: ["Monday - Friday: 24/7", "Saturday - Sunday: 24/7"],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitted: false,
      loading: true,
      error: null,
    });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact/",
        formData,
      );

      if (res.data.message === "Message sent successfully") {
        setFormStatus({
          submitted: true,
          loading: false,
          error: null,
        });

        setFormData({
          fullName: "",
          email: "",
          phoneNo: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setFormStatus((prev) => ({
            ...prev,
            submitted: false,
          }));
        }, 5000);
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        loading: false,
        error:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <>
      <section className="contact-hero">
        <h1>
          Get In <span>Touch</span>
        </h1>
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNo"
                placeholder="+92 XXX XXXXXXX"
                value={formData.phoneNo}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
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
            <label>Message *</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us how we can help you..."
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          {formStatus.error && (
            <div className="form-error">{formStatus.error}</div>
          )}

          {formStatus.submitted && (
            <div className="form-success">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}

          <button
            type="submit"
            disabled={formStatus.loading}
            className="submit-btn"
          >
            {formStatus.loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
