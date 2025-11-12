import React from 'react';
import './Contact.css';
import doctorImage from '../assets/doctor.png';
function Contact() {
  return (
    <div className="contact-page">

   {/* ===== Hero / Description Section (Contact) ===== */}
<section className="hero-section contact-hero">
  <div className="hero-content">
    <h4>We’re Here to Help</h4>
    <h2>Contact <span>MediScript</span></h2>
    <h1>Let’s <span>Connect</span> and Support Your Practice</h1>
    <p>
      Whether you’re a doctor, student, or institution — if you have questions, ideas, or need assistance,
      our dedicated support team is just a message away. Fill out the form or reach us via email or phone.
    </p>
  </div>

  <div className="hero-image">
    <img src={doctorImage} alt="Contact Support" />
  </div>

  {/* Floating Dots */}
  <div className="floating-dots">
    <span className="dot dot1"></span>
    <span className="dot dot2"></span>
    <span className="dot dot3"></span>
    <span className="dot dot4"></span>
    <span className="dot dot5"></span>
    <span className="dot dot6"></span>
  </div>

  {/* Bottom Wave */}
  <div className="hero-wave-bottom">
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill="#ffffff" fillOpacity="1"
        d="M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,240C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
</section>


   {/* ===== Contact Form Section ===== */}
<section className="contact-form-section">
  <div className="form-container">
    <h2>Get in Touch</h2>
    <form>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your Email" required />
        </div>
      </div>
      <div className="form-group full-width">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your Message" rows="6" required></textarea>
      </div>
      <button type="submit" className="btn-submit">Send Message</button>
    </form>
  </div>
</section>


      {/* ===== FAQ Section ===== */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h4>Is MediScript free for students?</h4>
            <p>Yes! MediScript offers a free sandbox version for medical and nursing students to practice safely.</p>
          </div>
          <div className="faq-item">
            <h4>How secure is my patient data?</h4>
            <p>We are HIPAA-compliant and use end-to-end encryption to ensure your data stays protected at all times.</p>
          </div>
          <div className="faq-item">
            <h4>How can I reset my password?</h4>
            <p>You can reset your password using the "Forgot Password" link on the login page or contact support.</p>
          </div>
        </div>
      </section>

      {/* ===== Optional: Support Info Section ===== */}
      <section className="support-info">
        <h3>Still Need Help?</h3>
        <p>Email us at <a href="mailto:support@mediscript.com">support@mediscript.com</a> or call us at <strong>+1 (800) 123‑4567</strong></p>
      </section>

    </div>
  );
}

export default Contact;
