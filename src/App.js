import React from 'react';
// import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Bodymain from './components/Bodymain';
import Content from './components/Content';
import Datablog from './components/Datablog';

function App() {
  return (
    <div className="App">
        < Navbar className="App-nav"/>
        <Sidebar />
        <header className="App-main">
        <Bodymain />
         <div id="bar-div" className="animated">
					<div class="container">
					 <div className="row text-center">
				   </div>
					</div>
				</div>
        <Content />
        <Datablog />
             
      </header>
      
      
    </div>
    
  );
}

export default App;
