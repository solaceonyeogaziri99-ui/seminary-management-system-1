import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import './Contact.css';

function Contact() {
  // Controlled form fields. No backend yet, so onSubmit just prevents
  // the default page reload and shows a local confirmation message —
  // this is where a real POST request will go in a later phase.
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Reach out with questions about admissions, academics, or visiting campus."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <ul>
              <li><strong>Address:</strong> 412 Cathedral Row, Ashcombe, NY 12345</li>
              <li><strong>Phone:</strong> (555) 013-4477</li>
              <li><strong>Email:</strong> admissions@aldergate.edu</li>
              <li><strong>Office Hours:</strong> Mon&ndash;Fri, 9:00 AM&ndash;5:00 PM</li>
            </ul>

            <div className="map-placeholder" role="img" aria-label="Map placeholder showing campus location">
              <span>Map placeholder</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>

            {submitted && (
              <p className="contact-form__success">
                Thanks for reaching out! (Form submission isn't connected to a backend yet.)
              </p>
            )}

            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <Button type="submit" variant="primary">Send Message</Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
