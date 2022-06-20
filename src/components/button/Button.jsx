import React from 'react'

import "./button.css"

const Button = ( {text, action} ) => {
  return (
    <button className='btn' onClick={action}>
        {text}
    </button>
  )
}

export default Button