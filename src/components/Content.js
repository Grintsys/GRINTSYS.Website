import React from 'react';
import shopping from '../icons/shopping.png';
import curly from '../icons/curly.png';
import bar from '../icons/bar.png';
import database from '../icons/database.png'

class Content extends React.Component {
    render(){
        return(
            <div id="fh5co-features" data-section="features" className="animated">
					<div className="container">
						<div className="row">
							<div className="col-md-10 col-md-offset-2 fh5co-section-heading text-center">
								<h2 className="fh5co-lead to-animate fadeInUp animated">Explora nuestros servicios</h2>
							</div>
							<div id="contentbox1"className="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
								<a href="#" className="fh5co-feature to-animate hvr-float-shadow" >
									<span className="fh5co-feature-icon"><img className="icons" src={shopping} alt="shopping"/></span>
									<h3 className="fh5co-feature-lead">POS</h3>
									<p className="fh5co-feature-text">Controla a tiempo real el estado de cada cliente, pagos, movimientos y flujo.</p>
								</a>
							</div>
							<div id="contentbox2" className="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
								<a href="#" className="fh5co-feature to-animate hvr-float-shadow">
									<span className="fh5co-feature-icon"><img className="icons" src={curly} alt="curly"/></span>
									<h3 className="fh5co-feature-lead">Desarrollo</h3>
									<p className="fh5co-feature-text">Controla a tiempo real el estado de cada cliente, pagos, movimientos y flujo.</p>
								</a>
							</div>
							<div className="clearfix visible-sm-block"></div>
							<div id="contentbox3" className="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
								<a href="#" className="fh5co-feature to-animate hvr-float-shadow">
									<span className="fh5co-feature-icon"><img className="icons" src={bar} alt="bar"/></span>
									<h3 className="fh5co-feature-lead">Estadisticas</h3>
									<p className="fh5co-feature-text">Controla a tiempo real el estado de cada cliente, pagos, movimientos y flujo.</p>
								</a>
							</div>
							<div id="contentbox4" className="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
								<a href="#" className="fh5co-feature to-animate hvr-float-shadow">
									<span className="fh5co-feature-icon"><img className="icons" src={database} alt="database"/></span>
									<h3 className="fh5co-feature-lead">Data</h3>
									<p className="fh5co-feature-text">Controla a tiempo real el estado de cada cliente, pagos, movimientos y flujo.</p>
								</a>
							</div>

							<div className="clearfix visible-sm-block"></div>

							<div className="fh5co-spacer fh5co-spacer-sm"></div>

							<div id="contentbutton" className="col-md-4 col-md-offset-4 text-center">
								<a id ="contentbutton-b" href="#" className="btn btn-primary hvr-shadow">Ver todas las funcionalidades</a>
							</div>
			        	</div>
			       </div>
			       

			    </div>

        )
    }
}
 export default Content;
