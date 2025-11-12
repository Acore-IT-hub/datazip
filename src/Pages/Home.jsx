import React from 'react';
import './Home.css';

import doctorImage from '../assets/doctor.png';
import phoneImage from '../assets/1.png';
import nurseImage from '../assets/2.png';

import {
  FaClock, FaUserMd, FaHistory, FaUsers,
  FaStar, FaFileAlt, FaChartBar, FaBell, FaLanguage
} from 'react-icons/fa';

const features = [
  {
    icon: <FaFileAlt />,
    title: 'Quickly Create Prescriptions',
    desc: 'Create prescriptions in seconds, print or share them electronically',
  },
  {
    icon: <FaUserMd />,
    title: 'Consult Patients Online',
    desc: 'Accept consultation fee, manage appointments and video consult patients',
  },
  {
    icon: <FaHistory />,
    title: 'Track Treatment History',
    desc: 'Save hours by getting history of each patients medical records right from the app',
  },
  {
    icon: <FaUsers />,
    title: 'Easy Patient Management',
    desc: 'Easily access all your patient data anywhere',
  },
  {
    icon: <FaStar />,
    title: 'Favourite Prescriptions',
    desc: 'Spend more time diagnosing, less time writing similar prescriptions',
  },
  {
    icon: <FaClock />,
    title: 'Organize Notes & Images',
    desc: 'Save hours of your time and cost managing patient records',
  },
  {
    icon: <FaChartBar />,
    title: 'Generate Reports',
    desc: 'Create reports for clinical research, patient studies or health pattern analysis',
  },
  {
    icon: <FaBell />,
    title: 'Send Key Reminders',
    desc: 'Contact patients via automated SMS for appointment & medicine reminders',
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Lee",
    role: "Cardiologist",
    feedback: "MediScript has transformed how I manage my patients. The prescription creation is so fast and easy!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Dr. Mike Johnson",
    role: "General Practitioner",
    feedback: "The online consultation and appointment features have saved me hours every week. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Nurse Emily Clark",
    role: "Registered Nurse",
    feedback: "It’s a wonderful educational tool for nurses and students. Simple, clean, and effective.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h4>Simplest App for Doctors to Create</h4>
          <h2>E-PRESCRIPTIONS</h2>
          <h1>Your <span>Reputation</span> Made Better</h1>
          <p>
            MediScript helps doctors across various specialties take control of their clinical
            practice with easy appointment management, highly secure & seamless video consultation
            experience via WhatsApp integration, e-prescriptions, patient record management, and much more.
          </p>
        </div>

        <div className="hero-image">
          <img src={doctorImage} alt="Doctor" />
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

      {/* App Promo Section */}
      <section>
        <div className="prescrip-section">
          <div className="left">
            <img src={phoneImage} alt="App Screenshot" className="phone-image" />
          </div>
          <div className="right">
            <h1>Get MediScript Today!</h1>
            <p>
              Are you ready to improve the quality of your patient relationships? Request a demo and learn more about how we can help you grow your healthcare practice today.
            </p>
            <button className="demo-btn">REQUEST A DEMO</button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="feature-grid">
        {features.map((f, idx) => (
          <div key={idx} className="feature-card">
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <a href="#" className="learn">Learn →</a>
          </div>
        ))}
      </section>

      {/* Needs Section */}
      <section className="needs-prescrip-section">
        <div className="bubble-bg">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>

        <div className="needs-prescrip-content">
          <h2>Is Your Medical Practice <span>Truly Efficient?</span></h2>
          <div className="needs-card">
            <ul>
              <li>🕒 Still spending hours writing repetitive prescriptions?</li>
              <li>🤝 Want to spend more meaningful time with patients?</li>
              <li>📁 Digging through files to review patient history?</li>
              <li>🚀 Ready to take your practice to the next level?</li>
            </ul>
            <p>
              If any of this sounds familiar, it’s time to explore <strong>MediScript</strong> — built to simplify, automate, and elevate your clinical practice.
            </p>
            <p>
              Our team tailors the app to your workflow, and gets you up and running in no time. Learn why thousands of doctors are switching to smarter healthcare.
            </p>
            <a href="#support" className="learn-more-btn">Get Started with MediScript</a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="education-container">
          <div className="education-image">
            <img src={nurseImage} alt="Nurse and Student Learning" />
          </div>
          <div className="education-content">
            <h2><span>Learn with</span> MediScript</h2>
            <p>
              MediScript is not only built for doctors — it’s also an excellent educational tool.
              Nurses, medical students, and healthcare professionals can easily access, read, and understand prescriptions electronically. 
            </p>
            <p>
              With real-time prescription samples, structured formats, and history tracking, students and interns get exposure to real-world prescriptions in a safe and secure way.
            </p>
            <a className="education-btn" href="#">Start Learning →</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Healthcare Professionals Say</h2>
        <div className="testimonials-container">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <img src={t.avatar} alt={`${t.name}'s avatar`} className="testimonial-avatar" />
              <p className="testimonial-feedback">"{t.feedback}"</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <span className="testimonial-role">{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why MediScript is Unique */}
      <section className="unique-section">
        <h2>Why <span>MediScript</span> is Unique</h2>
        <div className="unique-grid">
          <div className="unique-card">
            <FaClock className="unique-icon" />
            <h3>3-Click, &lt;10 Seconds Workflow</h3>
            <p>The fastest prescription writing tool in India—just three clicks and you’re done.</p>
          </div>
          <div className="unique-card">
            <FaLanguage className="unique-icon" />
            <h3>Multi-language Capability</h3>
            <p>Bridge the gap between doctor and patient with prescriptions in multiple languages.</p>
          </div>
          <div className="unique-card">
            <FaBell className="unique-icon" />
            <h3>Automated Patient Engagement</h3>
            <p>Send follow-up reminders and collect feedback without lifting a finger.</p>
          </div>
          <div className="unique-card">
            <FaChartBar className="unique-icon" />
            <h3>Analytics & Accounting</h3>
            <p>Track your clinic’s performance while keeping finances crystal clear.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Choose a Condition</h3>
            <p>Select from 100+ preloaded, evidence-based templates for common and chronic diseases.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Edit for Your Patient</h3>
            <p>Adjust dosages, add notes, and personalize as needed—fast and simple.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Print or Share Instantly</h3>
            <p>Hand it over or send electronically in seconds, not minutes.</p>
            
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <h2>Ready to Transform Your Practice?</h2>
        <p>
          Save hours every week, reduce errors, and improve patient satisfaction.
          Join thousands of healthcare professionals already using MediScript.
        </p>
        <button className="cta-btn">Request a Demo Now</button>
      </section>
    </>
  );
};

export default Home;
