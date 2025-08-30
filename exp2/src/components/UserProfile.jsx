import React, { useState } from 'react'
import './UserProfile.css'

const UserProfile = ({
  name,
  role,
  avatar,
  location,
  skills,
  bio,
  stats,
  isOnline
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className={`profile-card ${isFlipped ? 'flipped' : ''}`}>
      {/* Front of card */}
      <div className="card-front">
        <div className="profile-header">
          <div className="avatar-container">
            <span className="avatar">{avatar}</span>
            <div className={`status-dot ${isOnline ? 'online' : 'offline'}`}></div>
          </div>
          <button className="flip-btn" onClick={handleCardFlip}>
            🔄
          </button>
        </div>

        <div className="profile-info">
          <h2 className="name">{name}</h2>
          <p className="role">{role}</p>
          <p className="location">📍 {location}</p>
        </div>

        <div className="skills-container">
          <h4>Skills</h4>
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="actions">
          <button className="connect-btn">Connect</button>
          <button
            className={`like-btn ${isLiked ? 'liked' : ''}`}
            onClick={handleLike}
          >
            {isLiked ? '❤️' : '🤍'}
          </button>
        </div>
      </div>

      {/* Back of card */}
      <div className="card-back">
        <button className="flip-btn back-flip" onClick={handleCardFlip}>
          ↩️
        </button>

        <div className="bio-section">
          <h3>About</h3>
          <p>{bio}</p>
        </div>

        <div className="stats-section">
          <h4>Statistics</h4>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">{stats.projects}</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">{stats.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-number">{stats.following}</span>
              <span className="stat-label">Following</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
