import React from 'react'

import './header.css';

const Header = ({ toggleSidebar }) => {

  return (
    <div className='header'>
      <div className='navbar-icon'>
        <a onClick={toggleSidebar}>
          <span class="material-icons">
            reorder
          </span>
        </a>
      </div>

      <div className='header-title'>
        <h1>FavYoutuber</h1>
      </div>
    </div>
  )
}

export default Header