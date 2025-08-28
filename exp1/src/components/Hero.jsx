import React from 'react'
import Button from './Button'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Building Digital Solutions for
            <span className="highlight"> Tomorrow</span>
          </h1>
          <p className="hero-description">
            We create innovative web applications and digital experiences that drive business growth. 
            Our team combines cutting-edge technology with creative design to deliver exceptional results.
          </p>
          <div className="hero-buttons">
            <Button 
              variant="primary" 
              size="large"
              onClick={scrollToContact}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="large"
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card-content">
              <div className="code-line">
                <span className="code-keyword">const</span>
                <span className="code-variable"> success</span>
                <span className="code-operator"> = </span>
                <span className="code-function">buildAmazingWebsite</span>
                <span className="code-bracket">()</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">if</span>
                <span className="code-bracket"> (</span>
                <span className="code-variable">success</span>
                <span className="code-bracket">) {</span>
              </div>
              <div className="code-line code-indent">
                <span className="code-function">celebrate</span>
                <span className="code-bracket">()</span>
              </div>
              <div className="code-line">
                <span className="code-bracket">}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
