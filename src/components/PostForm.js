import React, { useState, useEffect } from 'react'

const PostForm = ({ title, initText, posts, changePosts }) => {
  const [userName, changeUserName] = useState('')
  const [postText, changePostText] = useState(initText || "")
  return (
    <>
    <div className="box" >
      { title && (<h1 className="subtitle">{ title }</h1>)}
      <div className="field">
        <div className="control">
          <input className="input" placeholder="Enter your username here" type="text" value={userName} onChange={e => changeUserName(e.target.value)} />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" placeholder="Enter your comment here" type="text" value={postText} onChange={e => changePostText(e.target.value)} />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-link" disabled={userName === "" || postText === ""} onClick={() => {
            changePosts(posts.concat([{
              user: userName,
              text: postText,
            }]))
            changeUserName('')
            changePostText('')
          }}>Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default PostForm