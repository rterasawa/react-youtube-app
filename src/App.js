import { Header, Sidebar } from "./containers"

import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className="content">

        <div className="side">
          <Sidebar />
        </div>

        <div className="main-content">
          Main Content
        </div>
      </div>
    </div>
  );
}

export default App;
