import React from 'react'

function ComputerItem({image, name, content, price}) {
  return (
    <div className='computerItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <h6>{content}</h6>
        <p>{price}</p>
    </div>
  )
}

export default ComputerItem