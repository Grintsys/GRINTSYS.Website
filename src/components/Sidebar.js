import React from 'react';

import { slide as Menu } from 'react-burger-menu';



class Sidebar extends React.Component{
    render(){
        return(

          <Menu right>
             
          <a className="menu-item" href="#fh5co-features1">
            Caracteristicas
          </a>
    
          <a className="menu-item" href="#fh5co-features">
            Diseño
          </a>
    
          <a className="menu-item" href="#fh5co-features-3">
            Beneficios
          </a>
    
          <a className="menu-item" href="#fh5co-footer">
            FAQs
          </a>
    
          <a className="menu-item" href="#fh5co-subscribe">
            Suscribirse
          </a>
    
          {/* <a className="menu-item" href="/node">
            Node
          </a>
          */}
        </Menu>
    
 
        )
    }
}
export default Sidebar;