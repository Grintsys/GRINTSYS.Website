import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar'
import Nav from './Nav'




class Navbar extends React.Component{
    render(){
        return(
            <div className="navigation-wrap start-header start-style">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-md navbar-light">

                                <section id="logo" className="navbar-brand" target="_blank">
                                    <span id="ltr1">GRINT</span><span id="ltr2">SYS</span>
                                </section>

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    <Sidebar />
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="#fh5co-features1">Caracteristicas</a>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="#fh5co-features">Diseño</a>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="#fh5co-features-3">Beneficios</a>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="#fh5co-footer">FAQs</a>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="#fh5co-subscribe">Suscribete</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;

 