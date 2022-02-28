import React, { useState, useEffect } from 'react'

import Post from './Post'

const Posts = ({ posts, depth }) => {
  return (
    <>
    {posts.map((post, ind) => {
      return (
        <Post key={ind} post={post} depth={depth}/>
      )
    })}
    </>
  )
}

export default Posts