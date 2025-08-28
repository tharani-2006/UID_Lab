import React from 'react'
import './Card.css'

const Card = ({ children, className = '', hover = true, onClick }) => {
  const cardClass = `card ${className} ${hover ? 'card-hover' : ''}`

  return (
    <div className={cardClass} onClick={onClick}>
      {children}
    </div>
  )
}

export default Card
