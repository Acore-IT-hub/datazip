import React from "react";
import { useNavigate } from "react-router-dom";
import "./Subscription.css";

function Subscribe() {
  const navigate = useNavigate();

  const openRazorpay = (amount, plan) => {
    const options = {
      key: "rzp_test_LoJiA2mTb0THiq", // Test Key ID
      amount: amount * 100, // in paise
      currency: "INR",
      name: "MediScript",
      description: `${plan} Subscription`,
      handler: function (response) {
        // ✅ Payment success handler
        console.log("Payment success:", response);

        // role ko signup ke time pe localStorage me save kiya tha
        const role = localStorage.getItem("role");

        // Payment ke baad -> Login page
        // Waha se OTP verify hoke dashboard pe jayega
        alert("Payment Successful ✅. Please login to continue.");

        navigate("/login");
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="subscription-wrapper">
      <div className="subscription-container">
        <h1>Unlock Premium Benefits</h1>
        <p className="intro-text">
          Choose a subscription plan that suits your needs and enjoy exclusive access to all premium features,
          priority support, and special discounts.
        </p>

        <div className="plans">
          <div className="plan-card">
            <h3>Basic</h3>
            <p className="price">₹199 <span>/ month</span></p>
            <ul>
              <li>Limited access to features</li>
              <li>Email support</li>
            </ul>
            <button 
              className="btn-select"
              onClick={() => openRazorpay(199, "Basic")}
            >
              Choose Plan
            </button>
          </div>

          <div className="plan-card highlight">
            <h3>Pro</h3>
            <p className="price">₹499 <span>/ month</span></p>
            <ul>
              <li>Full access to all features</li>
              <li>Priority customer support</li>
            </ul>
            <button 
              className="btn-select"
              onClick={() => openRazorpay(499, "Pro")}
            >
              Choose Plan
            </button>
          </div>

          <div className="plan-card">
            <h3>Premium</h3>
            <p className="price">₹999 <span>/ year</span></p>
            <ul>
              <li>All Pro features included</li>
              <li>Annual discount & perks</li>
            </ul>
            <button 
              className="btn-select"
              onClick={() => openRazorpay(999, "Premium")}
            >
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
