import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className="page">
      <div className="content">
        <h1>Our Services</h1>
        <div className="services-grid">
          <div className="service">
            <h3>💻 Web Development</h3>
            <p>We build websites</p>
          </div>
          <div className="service">
            <h3>📱 Mobile Apps</h3>
            <p>We create mobile apps</p>
          </div>
          <div className="service">
            <h3>🎨 Design</h3>
            <p>We design beautiful interfaces</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
