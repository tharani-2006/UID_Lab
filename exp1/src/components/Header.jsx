import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>My Website</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
