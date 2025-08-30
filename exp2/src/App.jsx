import React from 'react'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  const users = [
    {
      id: 1,
      name: "Tharani Prakash",
      role: "Frontend Developer",
      avatar: "🧑‍💻",
      location: "Tamil nadu",
      skills: ["React", "JavaScript", "CSS"],
      bio: "Passionate about creating beautiful user interfaces",
      stats: { projects: 25, followers: 1200, following: 340 },
      isOnline: true
    },
    {
      id: 2,
      name: "Shree",
      role: "UI/UX Designer",
      avatar: "👩‍🎨",
      location: "Kerala",
      skills: ["Figma", "Photoshop", "Design"],
      bio: "Creating amazing user experiences through design",
      stats: { projects: 18, followers: 890, following: 220 },
      isOnline: false
    },
    {
      id: 3,
      name: "Vish",
      role: "Backend Developer",
      avatar: "👨‍💼",
      location: "Delhi",
      skills: ["Node.js", "Python", "MongoDB"],
      bio: "Building robust and scalable backend systems",
      stats: { projects: 32, followers: 1500, following: 180 },
      isOnline: true
    }
  ]

  return (
    <div className="app">
      <h1 className="app-title">User Profiles</h1>
      <div className="profiles-container">
        {users.map(user => (
          <UserProfile
            key={user.id}
            name={user.name}
            role={user.role}
            avatar={user.avatar}
            location={user.location}
            skills={user.skills}
            bio={user.bio}
            stats={user.stats}
            isOnline={user.isOnline}
          />
        ))}
      </div>
    </div>
  )
}

export default App
