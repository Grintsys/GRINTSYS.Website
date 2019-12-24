import React from 'react';
import Sidebar from './Sidebar'
import Nav from './Nav'




class Navbar extends React.Component{
    render(){
        return(
            <div className="main-nav">
            <Sidebar/>
            <div className="navigation-bar">
            <a className="navbar-brand" href="#"><h2 id="business" className="name-business">GRINT<span className="end-name">SYS</span></h2></a>
            </div>
            </div>                
        )
    }
}

export default Navbar;

 