import React, { useState } from "react";
import { Header, Sidebar } from "./containers"

import './App.css';

function App() {

  // define variables to toggle sidebar
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleSidebarHandler = () => {
    {toggleSidebar
      ? setToggleSidebar(false) 
      : setToggleSidebar(true)
    }
    console.log(toggleSidebar)
  }

  return (
    <div className='app'>
      <Header toggleSidebar={toggleSidebarHandler} />
      <div className="content">

        {toggleSidebar && (
          <div className="side">
            <Sidebar />
          </div>
        )}

        <div className="main-content">
          Main Content
        </div>
      </div>
    </div>
  );
}

export default App;
