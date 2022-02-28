import React, { useState, useEffect } from 'react'

import Title from './components/Title'
import PostForm from './components/PostForm'
import Posts from './components/Posts'

export function App() {
  const [posts, changePosts] = useState([])
  return (
    <>
      <Title />
      <PostForm title="New Post" posts={posts} changePosts={changePosts} />
      <Posts posts={posts} depth="0" />
    </>
  )
}