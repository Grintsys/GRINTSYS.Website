import React from 'react';
// import logo from './logo.svg';

import './App.css';
import Nav from './components/Nav';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Bodymain from './components/Bodymain';
import Content from './components/Content';
import Datablog from './components/Datablog';
import OursTools from './components/OursTools';
import Features from './components/Features';
import Questions from './components/Questions';
import FooterDetail from './components/FooterDetail';

function App() {
  return (
    <div className="App">
        {/* <Nav/> */}
        < Navbar className="App-nav"/>
        {/* <Sidebar /> */}
        <header className="App-main">
        <Bodymain />
         <div id="bar-div" className="animated">
					<div className="container">
					 <div className="row text-center">
				   </div>
					</div>
				</div>
        <Content /> 
        <OursTools />
        <Features/>
        <Datablog />
        <Questions/>
        
        <FooterDetail/>                     
      </header>
      
      
    </div>
    
  );
}

export default App;
