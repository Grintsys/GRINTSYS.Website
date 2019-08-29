import React from 'react';

import { slide as Menu } from 'react-burger-menu';



class Sidebar extends React.Component{
    render(){
        return(

      <Menu right>
             
      <a className="menu-item" href="/home">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Laravel
      </a>

      <a className="menu-item" href="/angular">
        Angular
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
     
    </Menu>
    
 
        )
    }
}
export default Sidebar;