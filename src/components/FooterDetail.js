import React from 'react';
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";



class FooterDetail extends React.Component{
    render(){
        return(
            <footer id="fh5co-footer" >
			<div className="fh5co-overlay"></div>
			<div className="fh5co-footer-content">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-4 col-md-push-3">
							<h3 className="fh5co-lead-2">Acerca de nosotros</h3>
							<ul>
								<li><a href="http://grintsys.com">Compañía </a></li>
								<li><a href="http://grintsys.com#contact">Contactanos</a></li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-4 col-md-push-3">
							<h3 className="fh5co-lead-2">Soporte</h3>
							<ul>
								<li><a href="#">Centro de ayuda</a></li>
								<li><a href="#">Terminos de servicio</a></li>
								<li><a href="#">Seguridad</a></li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-4 col-md-push-3">
							<h3 className="fh5co-lead-2">Mas links</h3>
							<ul>
								<li><a href="#">Feedback</a></li>
								<li><a href="#">Preguntas Frecuentes</a></li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-12 col-md-pull-9">
							<div className="fh5co-footer-logo"><a href="index.html"><span className="name-business">Grint</span><span className="end-name">sys</span></a></div>
							<p className="fh5co-copyright"><small>© 2017. All Rights Reserved. 	by <a href="http://grintsys.com/" target="_blank">Grintsys.com</a> Images: <a href="http://pexels.com/" target="_blank">Pexels</a></small></p>
							<p className="fh5co-social-icons">
								<a className="social" href="https://www.facebook.com/grintsys/"><FaFacebookSquare/> Facebook</a>
								<a className="social" href="https://www.youtube.com/channel/UCCr2Se-J173l36beanfXm0w"><FaYoutube/> YouTube</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>

        )
    }
}
export default FooterDetail;
