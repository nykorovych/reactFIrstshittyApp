import React from 'react'
import faker from 'faker'


const CommentDetail = () => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/">Sam</a>
          <div className="metadata">
            <span className="date"> At 4:32</span>
          </div>
          <div className = "text">Shitty blog</div>
        </div>
      </div>
    )
}

export default CommentDetail