import React, { useState } from "react";
import { Header, Sidebar, About, FindFavorite } from "./containers"

import './App.css';

function App() {

  // define variables to toggle sidebar
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleSidebarHandler = () => {
    {toggleSidebar
      ? setToggleSidebar(false) 
      : setToggleSidebar(true)
    }
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
          <About />
          <FindFavorite />
        </div>
      </div>
    </div>
  );
}

export default App;
