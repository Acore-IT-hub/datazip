import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { FaBell, FaEnvelope, FaExclamationCircle, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Make sure this path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const popupRef = useRef(null);

  // State for notifications from API
  const [notifications, setNotifications] = useState([]);

  // Fetch notifications on component mount
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.mediscript.in/api/admin/global-notifications');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success && Array.isArray(data.notifications)) {
          setNotifications(data.notifications);
        } else {
          setNotifications([]);
        }
      } catch (err) {
        setError(err.message);
        setNotifications([]);
        console.error('Error fetching notifications:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setPopupOpen(false);
      }
    };

    if (popupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupOpen]);

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, unread: false }))
    );
  };

  // Delete a notification
  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Get icon based on type
  const getIcon = (type) => {
    switch (type) {
      case 'message':
        return <FaEnvelope className="icon" />;
      case 'alert':
        return <FaExclamationCircle className="icon" />;
      default:
        return <FaBell className="icon" />;
    }
  };

  // Count unread notifications
  const unreadCount = notifications.filter((n) => n.unread).length;

  // Handle loading or error in popup
  if (loading) {
    return (
      <div className="notification-loading">Loading notifications...</div>
    ); // This can be placed inside the popup if preferred
  }

  if (error) {
    return (
      <div className="notification-error">Error loading notifications: {error}</div>
    ); // This can be placed inside the popup if preferred
  }

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="MediScript Logo" />
      </div>

      {/* Navigation Links */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

          {/* Notification Bell with Popup */}
          <li className="notification-icon" ref={popupRef}>
            <div
              className="bell-wrapper"
              onClick={() => setPopupOpen(!popupOpen)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <FaBell className="bell-icon" />
              {unreadCount > 0 && <span className="dot">{unreadCount}</span>}
            </div>

            {/* Notification Popup */}
            <div className={`notification-popup ${popupOpen ? 'open' : ''}`}>
              <div className="notification-header">
                <span>Notifications</span>
                {unreadCount > 0 && (
                  <button className="mark-all-read" onClick={markAllAsRead}>
                    Mark all as read
                  </button>
                )}
              </div>

              {notifications.length === 0 ? (
                <div className="notification-empty">
                  No notifications
                </div>
              ) : (
                <div className="notification-list">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`notification-item ${notif.unread ? 'unread' : ''}`}
                      onClick={() => {
                        // Optional: Navigate to detail page
                        console.log('View notification:', notif.id);
                        setPopupOpen(false);
                      }}
                    >
                      {getIcon(notif.type)}
                      <div className="content">
                        <div className="title">{notif.title}</div>
                        <div className="message">{notif.message}</div>
                        <div className="time">{notif.time}</div>
                      </div>
                      <button
                        className="delete-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteNotification(notif.id);
                        }}
                        aria-label="Delete notification"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>

          {/* Login Button */}
          <li>
            <button
              className="btn"
              onClick={() => {
                setMenuOpen(false);
                window.location.href = '/login';
              }}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) =>
          (e.key === 'Enter' || e.key === ' ') && setMenuOpen(!menuOpen)
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;