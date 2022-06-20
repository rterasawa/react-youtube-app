import React from 'react'

import "./mainContentHeader.css"

const MainContentHeader = ({ text }) => {
  return (
    <div className='about-header'>
        <h1>{text}</h1>
        <div className='line'/>
    </div>
  )
}

export default MainContentHeader