import React from 'react';
import Sidebar from './Sidebar'
import Nav from './Nav'




class Navbar extends React.Component{
    render(){
        return(
            <div className="container">
            <Sidebar/>
            <div className="navigation-bar">
            <a className="navbar-brand" href="#"><h2>GRINTSYS</h2></a>
            </div>
            </div>
             
                 
        )
    }
}

export default Navbar;

 