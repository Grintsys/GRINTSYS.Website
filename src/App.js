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
import DocumentMeta from 'react-document-meta';
import FormSuscribe from './components/FormSuscribe';

function App() {
  return (
    <div className="App">
        {/* <Nav/> */}
        {/* <Sidebar /> */}
        <div className="App-main">
          <header>
        <Navbar/>
        </header>
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
      </div>
      
      
    </div>
    
  );
}

export default App;
