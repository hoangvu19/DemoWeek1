import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${form.name}, we will contact you at ${form.email}`);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <span>0898197946</span>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>vupham.19052004@gmail.com</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>82 Nguyen Van Linh, Hai Chau, Da Nang</span>
            </div>
            
            <div className="social-links">
              <a href="https://www.facebook.com/vu.hoang.759893" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button facebook">
                <i className="fab fa-facebook-f"></i>
                Facebook
              </a>
              <a href="https://github.com/hoangvu19" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button github">
                <i className="fab fa-github"></i>
                GitHub
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                name="title"
                type="text"
                placeholder="Subject"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;



