import React, { useState, useEffect } from 'react'

import Post from './Post'

function Posts({ posts, depth }) {
  return (
    <>
      {posts.map((post, ind) => (
        <Post key={ind} post={post} depth={depth} />
      ))}
    </>
  )
}

export default Posts
