

import React from 'react'
import "./CardImage.css"

const CardImage = ({image}) => {
  return (
    <div className='card-image'>
      <img src={image} alt=""  />
      </div>
  )
}

export default CardImage