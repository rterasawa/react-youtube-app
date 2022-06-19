import React from 'react'
import { SidebarItem } from '../../components'

import "./sidebar.css"

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='navbar'>
        <SidebarItem icon="home" text="Home" />
        <SidebarItem icon="search" text="Find Favorite" />
        <SidebarItem icon="account_circle" text="Account" />
        <SidebarItem icon="settings" text="Settings" />
      </div>
      
    </div>
  )
}

export default sidebar