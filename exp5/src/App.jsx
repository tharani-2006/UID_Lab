import { useState } from 'react'
import SocialPost from './components/SocialPost'
import './App.css'

function App() {
  const [posts] = useState([
    {
      id: 1,
      username: "travel_lover",
      image: "🏔️",
      caption: "Amazing mountain view from my weekend trip!",
      initialLikes: 127,
      initialComments: 23
    },
    {
      id: 2,
      username: "foodie_chef",
      image: "🍕",
      caption: "Homemade pizza night! What's your favorite topping?",
      initialLikes: 89,
      initialComments: 15
    }
  ])

  return (
    <div className="app">
      <header className="app-header">
        <h1>📱 SocialFeed</h1>
        <p>Interactive Social Media Experience with Tharani.dev</p>
      </header>

      <div className="feed">
        {posts.map(post => (
          <SocialPost
            key={post.id}
            username={post.username}
            image={post.image}
            caption={post.caption}
            initialLikes={post.initialLikes}
            initialComments={post.initialComments}
          />
        ))}
      </div>
    </div>
  )
}

export default App
