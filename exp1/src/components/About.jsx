import React from 'react'
import Card from './Card'
import './About.css'

const About = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ]

  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Optimized code and modern frameworks ensure lightning-fast load times and smooth user experiences.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Every website we build looks perfect on all devices, from mobile phones to desktop computers.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Built with security best practices and reliable hosting to keep your data safe and accessible.'
    },
    {
      icon: '🎨',
      title: 'Custom Design',
      description: 'Unique, tailored designs that reflect your brand identity and engage your target audience.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About TechSolutions</h2>
          <p className="section-subtitle">
            We're passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Building the Future, One Website at a Time</h3>
            <p>
              At TechSolutions, we believe that great websites are more than just code – they're 
              digital experiences that connect businesses with their customers. Our team of expert 
              developers and designers work together to create websites that not only look amazing 
              but also drive real business results.
            </p>
            <p>
              From small business websites to complex web applications, we have the expertise 
              and passion to bring your vision to life. We use the latest technologies and 
              best practices to ensure your website is fast, secure, and scalable.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
