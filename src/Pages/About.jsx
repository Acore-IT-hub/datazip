import React from 'react';
import doctorImage from '../assets/doctor.png';
import studyImage from '../assets/doctor2.png'; // Use a relevant image for education
import bookImage from '../assets/book.png';
import './About.css';
function About() {
  return (
    <>
      {/* ABOUT HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h4>Simplest App for Doctors to Create</h4>
          <h2>E-PRESCRIPTIONS</h2>
          <h1>About <span>MediScript</span></h1>
          <p>
            MediScript is the product of years of research and inputs from experts across fields of medicine.
            Our team continuously innovates to serve the evolving needs of healthcare practitioners worldwide.
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
{/* DOCTORS SECTION */}
<section className="doctor-section ">
  <div className="doc-bubble-bg">
    <div className="bubble bubble1" />
    <div className="bubble bubble2" />
    <div className="bubble bubble3" />
  </div>

  <div className="edu-container reverse"> {/* Reuse edu-container with reverse class */}
    <div className="edu-image animated fade-in-left"> {/* Reuse edu-image */}
      <img src={studyImage} alt="Doctor Tools" />
    </div>

    <div className="edu-content animated fade-in-right"> {/* Reuse edu-content */}
      <h2>Why <span>Doctors</span> Trust MediScript</h2>
      <p>
        MediScript empowers modern healthcare professionals with smart tools to streamline prescriptions, enhance patient care, and stay compliant with the latest medical standards.
      </p>
      <ul>
        <li>📝 Create accurate e-prescriptions in seconds</li>
        <li>👨‍⚕️ Access patient records & history instantly</li>
        <li>💊 Set medicine reminders & auto notifications</li>
        <li>📊 Track and generate clinical reports easily</li>
        <li>🔐 HIPAA-compliant & fully secure</li>
      </ul>
      <a href="#" className="edu-btn">Start Practicing</a>
    </div>
  </div>
</section>

      {/* EDUCATION SECTION */}
      <section className="education-section">
        <div className="edu-bubble-bg">
          <div className="bubble bubble1" />
          <div className="bubble bubble2" />
          <div className="bubble bubble3" />
        </div>

        <div className="edu-container">
          <div className="edu-image animated fade-in-left">
            <img src={bookImage} alt="Medical Study" />
          </div>
          <div className="edu-content animated fade-in-right">
            <h2><span>MediScript</span> for Students & Nurses</h2>
            <p>
              MediScript isn’t just for practicing doctors — it's also a powerful learning platform for medical and nursing students. Experience real-world prescription scenarios, case-based simulations, and structured learning.
            </p>
            <ul>
              <li>🎓 Practice writing safe and accurate e-prescriptions</li>
              <li>📚 Used in institutions to enhance practical knowledge</li>
              <li>💡 Boosts diagnostic and treatment confidence</li>
              <li>🔐 Secure, sandboxed environment for trial & training</li>
            </ul>
            <a href="#" className="edu-btn">Start Learning</a>
          </div>
        </div>
      </section>
      {/* ===== OUR MISSION SECTION ===== */}
<section className="mission-section">
  <div className="mission-content">
    <h2>Our <span>Mission</span> & <span>Vision</span></h2>
    <p>
      At MediScript, we believe that technology should simplify—not complicate—healthcare.
      Our mission is to empower every doctor, nurse, and medical student with tools that are intuitive, secure, and impactful.
    </p>
    <p>
      Our vision is a future where healthcare professionals spend less time on paperwork and more time healing people.
    </p>
  </div>
</section>


<section className="pillars-section">
  <h2>What Makes <span>MediScript</span> Unique</h2>

  <div className="pillars-container">
    {/* Each pillar as a visually distinct block */}
    <div className="pillar-item">
      <div className="pillar-icon">🛡️</div>
      <div className="pillar-text">
        <h4>Data Security</h4>
        <p>HIPAA-compliant, encrypted, and built with privacy in mind.</p>
      </div>
    </div>

    <div className="pillar-item">
      <div className="pillar-icon">📱</div>
      <div className="pillar-text">
        <h4>Seamless Integration</h4>
        <p>Connects with WhatsApp for easy consultation and patient communication.</p>
      </div>
    </div>

    <div className="pillar-item">
      <div className="pillar-icon">🧠</div>
      <div className="pillar-text">
        <h4>Clinical Intelligence</h4>
        <p>Built with doctor feedback and intelligent defaults for faster workflows.</p>
      </div>
    </div>

    <div className="pillar-item">
      <div className="pillar-icon">🌍</div>
      <div className="pillar-text">
        <h4>Accessibility</h4>
        <p>Lightweight, multilingual, and designed to work on low-bandwidth networks.</p>
      </div>
    </div>
  </div>
</section>

<section className="certificates-generator">
  <div className="container">
    <h2>Medical Certificates <span>Generator</span></h2>
    <p className="tagline">Official Documents, Ready in Seconds.</p>
    <p className="desc">
      Issuing medical certificates shouldn’t take more time than treating patients. With MediScript, doctors can generate multiple types instantly.
    </p>
    <div className="certificates-grid">
      <div>🏥 Medical Fitness Certificate</div>
      <div>📝 Medical Leave Certificate</div>
      <div>🤒 Sickness Certificate</div>
      <div>🏨 Hospitalization Certificate</div>
      <div>💪 Post-Illness Fitness Certificate</div>
      <div>💉 Vaccination Certificate</div>
      <div>🤰 Pregnancy & Maternity Fitness Certificate</div>
      <div>♿ Disability Certificate</div>
      <div>🏫 School/College Medical Certificate</div>
      <div>✈️ Medical Travel Certificate</div>
      <div>💼 Insurance Claim Certificate</div>
      <div>🔪 Surgical Procedure Certificate</div>
      <div>🦠 COVID-19 Recovery Certificate</div>
    </div>
    <blockquote className="testimonial">
      “I no longer waste time typing or formatting—certificates are just ready.”<br />
      <strong>— General Practitioner</strong>
    </blockquote>
  </div>
</section>

<section className="payment-billing">
  <div className="content-left">
    <h3>Seamless Payments, <span>Hassle-Free Records.</span></h3>
    <p>Mediscript simplifies clinical finances by combining billing and receipt generation inside your prescription software.</p>
    <ul>
      <li>💸 Instant Receipt Generation</li>
      <li>⚙️ Customizable Billing</li>
      <li>🧾 Professional Receipts</li>
    </ul>
  </div>
  <div className="content-right">
    <h3>Why It Matters</h3>
    <ul>
      <li>🚀 Faster check-out, improved clinic flow</li>
      <li>✅ Error-free records & calculations</li>
      <li>🤝 Enhanced trust with patients</li>
    </ul>
    <h3>The Difference It Makes</h3>
    <ul>
      <li>🖥️ All-in-one platform</li>
      <li>📊 Financial history at your fingertips</li>
      <li>👍 Simple, professional, easy-to-use</li>
    </ul>
    <blockquote>“We stopped using a separate billing app—everything is now in one place.” <br /><strong>— Clinic Owner</strong></blockquote>
  </div>
</section>
<section className="analytics-reports">
  <h2 className='text-color'>Decisions Backed by <span>Data</span></h2>
  <p className="intro">Mediscript’s analytics engine gives you insights into your entire practice.</p>
  <div className="stats-grid">
    <div className="stat">
      <h3>📈 Patient Volume Trends</h3>
      <p>Daily, weekly & monthly footfall analysis.</p>
    </div>
    <div className="stat">
      <h3>🦠 Disease Pattern Tracking</h3>
      <p>See which conditions you treat most.</p>
    </div>
    <div className="stat">
      <h3>🔄 Follow-Up & Compliance Rates</h3>
      <p>Monitor patient return visits & medication adherence.</p>
    </div>
    <div className="stat">
      <h3>💰 Financial Performance Reports</h3>
      <p>Income, expenses, and net profit views.</p>
    </div>
    <div className="stat">
      <h3>⏰ Task & Appointment Analytics</h3>
      <p>Know where your team’s time goes.</p>
    </div>
  </div>
  <blockquote className="analytics-quote">
    “Analytics showed me Mondays are busiest. Now I schedule better & reduce waiting time.” <br />
    <strong>— Clinic Administrator</strong>
  </blockquote>
</section>

    </>
  );
}

export default About;
