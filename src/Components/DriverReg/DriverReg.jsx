import React, { useState } from 'react';
import './DriverReg.css';

const DriverReg = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    truckType: '',
    truckYear: '',
    licensePlate: '',
    mcNumber: '',
    experience: '',
    preferredRoutes: [],
    homeTerminal: '',
    notes: ''
  });
//   console.log(formData);

  const [showTerms, setShowTerms] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
    showTermsError: false
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          preferredRoutes: [...prev.preferredRoutes, value]
        };
      } else {
        return {
          ...prev,
          preferredRoutes: prev.preferredRoutes.filter(route => route !== value)
        };
      }
    });
  };

  const handleTermsCheckbox = (e) => {
    setTermsAccepted(e.target.checked);
    if (formStatus.showTermsError) {
      setFormStatus(prev => ({ ...prev, showTermsError: false }));
    }
  };

  const toggleTerms = () => {
    setShowTerms(!showTerms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if terms are accepted
    if (!termsAccepted) {
      setFormStatus(prev => ({ ...prev, showTermsError: true }));
      return;
    }

    setFormStatus({ submitted: false, loading: true, error: null, showTermsError: false });

    try {
      // TODO: Replace with your actual API endpoint when backend is ready
      // const response = await fetch('/api/driver/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({ submitted: true, loading: false, error: null, showTermsError: false });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        truckType: '',
        truckYear: '',
        licensePlate: '',
        mcNumber: '',
        experience: '',
        preferredRoutes: [],
        homeTerminal: '',
        notes: ''
      });
      setTermsAccepted(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({ submitted: false, loading: false, error: 'Something went wrong. Please try again.', showTermsError: false });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="driver-hero">
        <h1>Join the <span>Loadify</span> Network</h1>
        <p>Register your truck today and start getting consistent, high-paying loads</p>
      </section>

      <section className="registration-section">
        {/* Form Container */}
        <div className="form-container">
          <div className="form-header">
            <h2>Driver Registration</h2>
            <p>Fill out the form below to get started</p>
          </div>

          <form className="driver-form" id="driverForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
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
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+92 XXX XXXXXXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <h3 className="section-title">Truck Information</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="truckType">Truck Type *</label>
                <select
                  id="truckType"
                  name="truckType"
                  required
                  value={formData.truckType}
                  onChange={handleInputChange}
                >
                  <option value="">Select truck type</option>
                  <option value="dryvan">Dry Van</option>
                  <option value="reefer">Reefer</option>
                  <option value="flatbed">Flatbed</option>
                  <option value="stepdeck">Step Deck</option>
                  <option value="lowboy">Lowboy</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="truckYear">Truck Year *</label>
                <input
                  type="number"
                  id="truckYear"
                  name="truckYear"
                  required
                  placeholder="e.g., 2020"
                  value={formData.truckYear}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="licensePlate">License Plate *</label>
                <input
                  type="text"
                  id="licensePlate"
                  name="licensePlate"
                  required
                  placeholder="ABC-123"
                  value={formData.licensePlate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mcNumber">MC Number *</label>
                <input
                  type="text"
                  id="mcNumber"
                  name="mcNumber"
                  required
                  placeholder="MC-XXXXXX"
                  value={formData.mcNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Years of Experience *</label>
              <select
                id="experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleInputChange}
              >
                <option value="">Select experience</option>
                <option value="0-1">Less than 1 year</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <h3 className="section-title">Operating Area</h3>

            <div className="form-group">
              <label>Preferred Routes *</label>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="routes"
                    value="local"
                    checked={formData.preferredRoutes.includes('local')}
                    onChange={handleCheckboxChange}
                  /> Local (within city)
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="routes"
                    value="regional"
                    checked={formData.preferredRoutes.includes('regional')}
                    onChange={handleCheckboxChange}
                  /> Regional (within province)
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="routes"
                    value="national"
                    checked={formData.preferredRoutes.includes('national')}
                    onChange={handleCheckboxChange}
                  /> National (across Pakistan)
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="homeTerminal">Home Terminal / City *</label>
              <input
                type="text"
                id="homeTerminal"
                name="homeTerminal"
                required
                placeholder="e.g., Karachi, Lahore"
                value={formData.homeTerminal}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="section-title">Additional Information</h3>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes (Optional)</label>
              <textarea
                id="notes"
                name="notes"
                rows="4"
                placeholder="Any special requirements or information..."
                value={formData.notes}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="terms-container">
              <a href="#" className="terms-link" onClick={toggleTerms}>
                &#128220; View Terms & Conditions
              </a>
              <div className={`terms-dropdown ${showTerms ? 'show' : ''}`}>
                <h3>1. Acceptance of Terms</h3>
                <p>By registering as a driver with Loadify, you agree to comply with these Terms & Conditions.</p>

                <h3>2. Services Provided</h3>
                <p>Loadify provides dispatching services including load finding, rate negotiation, route optimization and payment processing.</p>

                <h3>3. Driver Responsibilities</h3>
                <ul>
                  <li>Maintain valid licenses, permits and insurance</li>
                  <li>Follow all traffic laws and safety regulations</li>
                  <li>Communicate promptly about delays or issues</li>
                  <li>Provide accurate documentation for each load</li>
                </ul>

                <h3>4. Payment Terms</h3>
                <p>Loadify charges a commission fee of 8-12% per load. Payments are processed within 7-14 business days.</p>

                <h3>5. Termination</h3>
                <p>Either party may terminate this agreement with 7 days written notice.</p>

                <h3>6. Limitation of Liability</h3>
                <p>Loadify is not liable for lost revenue, delays caused by brokers, or mechanical issues.</p>

                <h3>7. Privacy Policy</h3>
                <p>Your personal information will be used solely for dispatching purposes.</p>

                <h3>8. Governing Law</h3>
                <p>These terms are governed by the laws of Pakistan.</p>
              </div>
            </div>

            <div className="checkbox-label">
              <input
                type="checkbox"
                id="termsCheckbox"
                checked={termsAccepted}
                onChange={handleTermsCheckbox}
              />
              <span>I have read and agree to the <strong>Terms & Conditions</strong> *</span>
            </div>

            <div className={`error-message ${formStatus.showTermsError ? 'show' : ''}`}>
              &#9989; Please accept the Terms & Conditions to register
            </div>

            {formStatus.error && (
              <div className="error-message show" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>
                &#9989; {formStatus.error}
              </div>
            )}

            {formStatus.submitted && (
              <div className="success-message">
                ✅ Registration submitted successfully! Our team will contact you within 24 hours.
              </div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={formStatus.loading}
            >
              {formStatus.loading ? 'Registering...' : 'Register Now'}
            </button>
          </form>
        </div>

        <div className="benefits-sidebar">
          <h3>Why Join Loadify?</h3>
          <ul>
            <li>✓ Consistent, high-paying loads</li>
            <li>✓ Fast payment processing</li>
            <li>✓ 24/7 dispatcher support</li>
            <li>✓ No forced dispatch</li>
            <li>✓ Free route optimization</li>
            <li>✓ Dedicated account manager</li>
          </ul>
          <div className="benefits-note">
            <p>&#128222; Have questions? Call us: <strong>+92 (123) 456-7890</strong></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DriverReg;