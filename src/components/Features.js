import React from 'react';
import billdollar from '../icons/billdollar.png';
import calculator from '../icons/calculator.png';
import desktop from '../icons/desktop.png';





class Features extends React.Component{
    render(){
        return(
            <div id="fh5co-features-3" data-section="benefits" class="animated">
					<div class="container">
						<div>
							<div id="content-2" class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
								<h2 id="h2-tl" class="fh5co-lead animate-single features3-animate-1 fadeIn animated">Beneficios al implementar 2$HOP en su Organización</h2>
								<p class="animate-single features3-animate-2 fadeIn animated">Se acopla perfectamente con su actual sistema de inventario pero además le permite aprovechar ese sistema como nunca antes.</p>
							</div>
							<div class="row">
							<div class="col-md-4 col-sm-6 text-center fh5co-text-wrap">
								<div class="fh5co-text to-animate fadeInUp animated">
				    				<span class="fh5co-icon"><img className="icons" src={billdollar}/></span>
									<h4 class="fh5co-uppercase-sm">Control de Inventario</h4>
									<p>Una comunicación completa y detallada entre su sistema de inventario y la aplicación.</p>
								</div>
							</div>
							<div class="col-md-4 col-sm-6 text-center fh5co-text-wrap">
								<div class="fh5co-text to-animate fadeInUp animated">
				    				<span class="fh5co-icon"><img className="icons" src={calculator}/></span>
									<h4 class="fh5co-uppercase-sm">Datos estadísticos</h4>
									<p>Obtendrá datos cruzados entre lo que se vende, lo que se cobra y lo que se mueve en su bodega</p>
								</div>
							</div>
							
							<div class="clearfix visible-sm-block"></div>

							<div class="col-md-4 col-sm-6 text-center fh5co-text-wrap">
								<div class="fh5co-text to-animate fadeInUp animated">
				    				<span class="fh5co-icon"><img className="icons" src={desktop}/></span>
									<h4 class="fh5co-uppercase-sm">Facturación y Cierre de Ventas</h4>
									<p>Ayude a su equipo de ventas a cerrar las negociaciones, ofrecer productos confirmar inventario, crear pedidos.</p>
								</div>
							</div>	

							<div class="col-md-4 col-sm-6 text-center fh5co-text-wrap">
								<div class="fh5co-text to-animate fadeInUp animated">
				    				<span class="fh5co-icon"><img className="icons" src={desktop}/></span>
									<h4 class="fh5co-uppercase-sm">Catálogo Electrónico</h4>
									<p>Todos los códigos de sus productos de bodega, tal como están en su inventario de bodega estarán alojados en la aplicación.</p>
								</div>
							</div>

							<div class="clearfix visible-sm-block"></div>

							<div class="col-md-4 col-sm-6 text-center fh5co-text-wrap">
								<div class="fh5co-text to-animate fadeInUp animated">
				    				<span class="fh5co-icon"><img className="icons" src={billdollar}/></span>
									<h4 class="fh5co-uppercase-sm">Rapidez y Calidad</h4>
									<p>La comunicación entre sus departamentos y la eficiencia de la comunicación jamás será más eficiente.</p>
								</div>
							</div>
							<div class="col-md-4 col-sm-6 text-center fh5co-text-wrap">
								<div class="fh5co-text to-animate fadeInUp animated">
				    				<span class="fh5co-icon"><img className="icons" src={calculator}/></span>
									<h4 class="fh5co-uppercase-sm">Ahorro y ganancias</h4>
									<p>El sistema no solo le ahorra tiempo y dinero, también le hace ganar porque es la mejor herramienta de ventas para su Talento Humano.</p>
								</div>
							</div>
							<div class="col-md-4 col-sm-6 text-center fh5co-text-wrap">
								<div class="fh5co-text to-animate fadeInUp animated">
				    				<span class="fh5co-icon"><img className="icons" src={calculator}/></span>
									<h4 class="fh5co-uppercase-sm">Seguridad de datos</h4>
									<p>Todos los datos están siempre alojados dentro de sus sistemas, la aplicación tiene comunicación con sus servidores y la transmite de manera segura.</p>
								</div>
							</div>
							<div class="col-md-4 col-sm-6 text-center fh5co-text-wrap">
								<div class="fh5co-text to-animate fadeInUp animated">
				    				<span class="fh5co-icon"><img className="icons" src={desktop}/></span>
									<h4 class="fh5co-uppercase-sm">Seguro para el Cliente</h4>
									<p>Cada usuario de 2$HOP tiene asignado un usuario y contraseña, que debe ingresar cada vez que ingresa a la plataforma para crear ventas o cobros.</p>
								</div>
							</div>
							<div class="col-md-4 col-sm-6 text-center fh5co-text-wrap">
								<div class="fh5co-text to-animate fadeInUp animated">
				    				<span class="fh5co-icon"><img className="icons" src={billdollar}/></span>
									<h4 class="fh5co-uppercase-sm">Seguridad por extravíos.</h4>
									<p>Si el dispositivo es extraviado o dañado, toda la data almacenada hasta su último inicio de sesión estará almacenada en una nube, donde estará respaldada y segura.</p>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
        )
    }
}
export default Features;