import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>SimpleShop</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart ({cartCount})
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
