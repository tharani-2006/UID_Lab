import { useState } from 'react'
import './SocialPost.css'

const SocialPost = ({
  username,
  image,
  caption,
  initialLikes,
  initialComments
}) => {
  const [likes, setLikes] = useState(initialLikes)
  const [comments, setComments] = useState(initialComments)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
      setIsLiked(false)
    } else {
      setLikes(likes + 1)
      setIsLiked(true)
    }
  }

  const handleComment = () => {
    setComments(comments + 1)
  }

  const formatCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k'
    }
    return count
  }

  return (
    <div className="social-post">
      <div className="post-header">
        <h3 className="username">{username}</h3>
      </div>

      <div className="post-image">
        <span className="image-placeholder">{image}</span>
      </div>

      <div className="post-actions">
        <button
          className={`action-btn like-btn ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          {isLiked ? '❤️' : '🤍'} {formatCount(likes)}
        </button>
        <button className="action-btn comment-btn" onClick={handleComment}>
          💬 {formatCount(comments)}
        </button>
      </div>

      <div className="post-caption">
        <p>{caption}</p>
      </div>
    </div>
  )
}

export default SocialPost
