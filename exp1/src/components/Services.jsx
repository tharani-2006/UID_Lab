import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service">
            <h3>💻 Web Design</h3>
            <p>We make websites</p>
          </div>
          <div className="service">
            <h3>📱 Mobile Apps</h3>
            <p>We make apps</p>
          </div>
          <div className="service">
            <h3>🎨 Design</h3>
            <p>We make designs</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
