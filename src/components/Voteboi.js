import React, { useState, useEffect } from 'react'

function Voteboi({ post, depth }) {
  const [count, changeCount] = useState(0)

  return (
    <div>
      <button className="icon" type="button" onClick={() => changeCount(count + 1)}>
        <i className="fas fa-arrow-up" />
      </button>
      {count}
      <button className="icon" type="button" onClick={() => changeCount(Math.max(count - 1, 0))}>
        <i className="fas fa-arrow-down" />
      </button>
    </div>
  )
}

export default Voteboi
