import React, { useState, useEffect } from "react";
import "./Login.css";
import logo from "../assets/logo.png";
import doctorIcon from "../assets/doctor.png";
// import receptionIcon from "../assets/1.png";
import studentIcon from "../assets/2.png";

const roles = [
  { id: "Doctor", label: "Doctor", icon: doctorIcon },
  // { id: "Reception", label: "Reception", icon: receptionIcon },
  { id: "Student", label: "Student", icon: studentIcon },
];

export default function RoleSelect() {
  const [selectedRole, setSelectedRole] = useState("");
  
  // Staggered entrance for role boxes
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleContinue = () => {
    if (!selectedRole) {
      alert("Please select your role before continuing.");
      return;
    }

    // Save role in localStorage
    localStorage.setItem("role", selectedRole);

    // Map role to subdomain
    const subdomainMap = {
      Doctor: "doctor",
      Reception: "reception",
      Student: "student",
    };

    const subdomain = subdomainMap[selectedRole];
    const redirectUrl = `https://${subdomain}.mediscript.in/`;

    // Redirect to external subdomain
    window.location.href = redirectUrl;
  };

  // Ripple effect on button click
  const handleButtonClick = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.classList.add("ripple");
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);

    // Trigger redirect after ripple starts
    handleContinue();
  };

  return (
    <div className="role-wrapper">
      {/* ---------- BUBBLE BACKGROUND ---------- */}
      <div className="bubble-bg">
        {[...Array(7)].map((_, i) => (
          <div key={i} className={`bubble bubble${i + 1}`}></div>
        ))}
      </div>

      {/* ---------- MAIN CARD ---------- */}
      <div className={`role-card ${mounted ? "mounted" : ""}`}>
        <div className="logo-title">
          <img src={logo} alt="MediScript" className="logo-img" />
        </div>

        <h2>Select Your Role</h2>
        <p className="subtext">Choose the account type you’ll use</p>

        {/* ---------- ROLE GRID ---------- */}
        <div className="role-options">
          {roles.map((role, idx) => (
            <div
              key={role.id}
              className={`role-box ${
                selectedRole === role.id ? "selected" : ""
              } ${mounted ? `appear-${idx}` : ""}`}
              onClick={() => setSelectedRole(role.id)}
            >
              <img src={role.icon} alt={role.label} />
              <h3>{role.label}</h3>

              {/* Check-mark when selected */}
              {selectedRole === role.id && (
                <svg
                  className="check"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* ---------- CONTINUE BUTTON ---------- */}
        <button className="btn-continue" onClick={handleButtonClick}>
          Continue
        </button>
      </div>
    </div>
  );
}