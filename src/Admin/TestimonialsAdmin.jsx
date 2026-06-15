import React, { useState } from 'react';
import './TestimonialsAdmin.css';

const TestimonialsAdmin = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const addTestimonial = (e) => {
    e.preventDefault();
    const newTestimonial = {
      id: testimonials.length + 1,
      name: name,
      message: message
    };
    setTestimonials([...testimonials, newTestimonial]);
    setName('');
    setMessage('');
    setShowForm(false);
  };

  const deleteTestimonial = (id) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  return (
    <div className="testimonials-page">
      <div className="page-header">
        <h1>Manage Testimonials</h1>
        <button className="add-btn" onClick={() => setShowForm(true)}>+ Add Testimonial</button>
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Testimonial</h3>
            <form onSubmit={addTestimonial}>
              <input 
                type="text" 
                placeholder="Driver Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
              <textarea 
                placeholder="Testimonial Message" 
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required 
              />
              <div className="modal-buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="testimonials-list">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <strong>{testimonial.name}</strong>
              <button className="delete-btn" onClick={() => deleteTestimonial(testimonial.id)}>Delete</button>
            </div>
            <p>{testimonial.message}</p>
          </div>
        ))}
        {testimonials.length === 0 && (
          <div className="empty">No testimonials added yet</div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsAdmin;