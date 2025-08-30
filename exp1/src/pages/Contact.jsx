import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="page">
      <div className="content">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>hello@mywebsite.com</p>
          </div>
          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          <div className="contact-item">
            <h3>📍 Address</h3>
            <p>123 Main Street, City, State 12345</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
