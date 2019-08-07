import React from 'react';
// import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Bodymain from './components/Bodymain';

function App() {
  return (
    <div className="App">
        < Navbar className="App-nav"/>
        <Sidebar />
        <header className="App-main">
        <Bodymain />  
             
      </header>
      
    </div>
    
  );
}

export default App;
