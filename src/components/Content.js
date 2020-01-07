import React from 'react';
import shopping from '../icons/shopping.png';
import curly from '../icons/curly.png';
import bar from '../icons/bar.png';
import database from '../icons/database.png'

class Content extends React.Component {
    render(){
        return(
            <div id="fh5co-features1" data-section="features" className="animated">
					<div id="content-1" className="container">
						<div id="items-1">
							<div className="col-md-offset-2 fh5co-section-heading text-center">
								<h2 id="h2-tl" className="fh5co-lead to-animate fadeInUp animated">Explora nuestros servicios</h2>
							</div>
							<div id="contentbox-div">
							<div id="contentbox1">
								<a href="#" className="fh5co-feature to-animate hvr-float-shadow" >
									<span className="fh5co-feature-icon"><img className="icons" src={shopping} alt="shopping"/></span>
									<h3 className="fh5co-uppercase-sm">POS</h3>
									<p className="fh5co-feature-text">Controla a tiempo real el estado de cada cliente, pagos, movimientos y flujo.</p>
								</a>
							</div>
							<div id="contentbox2">
								<a href="#" className="fh5co-feature to-animate hvr-float-shadow">
									<span className="fh5co-feature-icon"><img className="icons" src={curly} alt="curly"/></span>
									<h3 className="fh5co-uppercase-sm">Desarrollo</h3>
									<p className="fh5co-feature-text">Controla a tiempo real el estado de cada cliente, pagos, movimientos y flujo.</p>
								</a>
							</div>
							<div className="clearfix visible-sm-block"></div>
							<div id="contentbox3" >
								<a href="#" className="fh5co-feature to-animate hvr-float-shadow">
									<span className="fh5co-feature-icon"><img className="icons" src={bar} alt="bar"/></span>
									<h3 className="fh5co-uppercase-sm">Estadisticas</h3>
									<p className="fh5co-feature-text">Controla a tiempo real el estado de cada cliente, pagos, movimientos y flujo.</p>
								</a>
							</div>
							<div id="contentbox4">
								<a href="#" className="fh5co-feature to-animate hvr-float-shadow">
									<span className="fh5co-feature-icon"><img className="icons" src={database} alt="database"/></span>
									<h3 className="fh5co-uppercase-sm">Data</h3>
									<p className="fh5co-feature-text">Controla a tiempo real el estado de cada cliente, pagos, movimientos y flujo.</p>
								</a>
							</div>
							</div>
							<div className="clearfix visible-sm-block"></div>

							<div id="contentbutton" className="col-md-offset-4 text-center">
								<a id ="contentbutton-b" href="#" className="btn btn-primary hvr-shadow">Ver todas las funcionalidades</a>
							</div>
			        	</div>
			       </div>
			       

			    </div>

        )
    }
}
 export default Content;
