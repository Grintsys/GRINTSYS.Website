import React from "react";
import Sidebar from "react-sidebar";
 
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      
     
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open});
  }
 
  render() {
    return (
      
      <Sidebar  pullRight={true} 
        sidebar={<ul><li>Contenido1</li>
            <li>Contenido2</li>
            <li>Contenido3</li>
        </ul>
                    }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        right={this.state.pullRight}
        styles={{ sidebar: { background: "grey"
  }}}
        ><nav  id="barnav"class="navbar navbar-light bg-light ">
        <span  class="navbar-toggler-icon position-static " onClick={() => this.onSetSidebarOpen(true) }>
          
        </span>
        </nav>
      </Sidebar>
      
    );
  }
}
export default Nav;