import React, { useState, useEffect } from 'react'

const Voteboi = ({ post, depth }) => {
  const [count, changeCount] = useState(0)

  return (
  <div>
      <button class="icon" onClick={() => changeCount(count + 1)}>
        <i class="fas fa-arrow-up"></i>
      </button>
      {count}
      <button class="icon" onClick={() => changeCount(Math.max(count - 1, 0))}>
        <i class="fas fa-arrow-down"></i>
      </button>
  </div>
  )
}

export default Voteboi