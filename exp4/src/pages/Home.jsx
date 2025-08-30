import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to SimpleShop</h1>
          <p>Find amazing products at great prices</p>
          <Link to="/products" className="shop-btn">
            Start Shopping
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">📦</div>
              <h3>Fast Delivery</h3>
              <p>Get your products delivered quickly</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive prices on all items</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Shopping</h3>
              <p>Safe and secure payment options</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
