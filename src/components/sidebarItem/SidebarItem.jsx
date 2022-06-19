import React from 'react'

import "./sidebarItem.css"

const SidebarItem = ({ icon, text }) => {

    const menuItemHandler = () => {
        alert("clicked")
    }

    return (
    <div className='sidebar-item'>
        <div onClick={menuItemHandler} className='sidebar-content'>
            <div className='sidebar-item-icon'>
                <span className="material-icons">
                    {icon}
                </span>
            </div>

            <div className='sidebar-item-text'>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default SidebarItem