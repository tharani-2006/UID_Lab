import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="page">
      <div className="content">
        <h1>About Us</h1>
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>We are a team of passionate web developers.</p>
        </div>
        <div className="about-section">
          <h2>What We Do</h2>
          <p>We create simple and beautiful websites for businesses.</p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>Our goal is to help your business grow online with great web design.</p>
        </div>
      </div>
    </div>
  )
}

export default About
