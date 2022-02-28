import React, { useState, useEffect } from 'react'

import Posts from './Posts'
import PostForm from './PostForm'
import Voteboi from './Voteboi'

function Post({ post, depth }) {
  const [replyToggled, toggleReply] = useState(false)
  const [children, changeChildren] = useState([])

  return (
    <div className="box columns">
      <div className="column">
        <h5 className="title is-5">{post.user}</h5>
        <p>{post.text}</p>
        <Posts posts={children} depth={depth + 1} />
        {depth < 2 && (
        <>
          <button
            className="button is-secondary"
            type="button"
            onClick={() => {
              toggleReply(!replyToggled)
            }}
          >
            Reply
          </button>
          {replyToggled && (
          <PostForm
            posts={children}
            changePosts={changeChildren}
            initText={`@${post.user} `}
          />
          )}
        </>
        )}
      </div>
      <Voteboi class="is-pulled-right" />
    </div>
  )
}

export default Post
