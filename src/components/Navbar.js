import React from 'react';
import Sidebar from './Sidebar'





class Navbar extends React.Component{
    render(){
        return(
             <div className="container">
                 <nav id="App-nav" className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="#"><h2>GRINTSYS</h2><Sidebar/></a>
                 </nav>
                 
                <Sidebar/> 
                 
             </div>
        )
    }
}

export default Navbar;