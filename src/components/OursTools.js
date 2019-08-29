import React from 'react';
import android from '../icons/android.png';
import clouds from '../icons/clouds.png';
import user from '../icons/user.png';
import update from '../icons/update.png';
import startup from '../icons/startup.png';
import CarouselImages from './CarouselImages'



class OursTools extends React.Component {
    render(){
        return(
            <div id="fh5co-features" data-section="features" className="animated">
            <div className="container" > 
            <div id="titletools" className="col-md-12 col-md-offset-2 fh5co-section-heading text-center">
                        <h2 className="fh5co-lead">Una herramienza personalizable para tu empresa</h2>
                        <br/>
                        <p className="fh5co-sub to-animate fadeIn animated">Puedes incluir, eliminar o agregar modulos y ajustar las cosas a tu gusto, es un producto 
                            pensado para ser amigable con procesos y personas.
                        </p>
                    </div>
  
                <div className="row text-center">
                    
                    <div className="col">
                    <span className="fh5co-icon"><img className="icons" src={android}/></span>
                        <h4 className="fh5co-uppercase-sm">Soporte Android 4.0+</h4>
                        <p className="text-center">Android abre un sin numero de dispositivos compatibles, dandote la libertad de reutilizar equipo o escoger 
                            el equipo que mas te convenga. </p>
                    <span className="fh5co-icon"><img className="icons" src={clouds}/></span>
                        <h4 className="fh5co-uppercase-sm">Escalable</h4>
                        <p>Construida para empresas que estan en constante aumento, no te preocupes porque tu operacion aumente.</p>
                    <span className="fh5co-icon"><img className="icons" src={user}/></span>
                        <h4 className="fh5co-uppercase-sm">Experiencia de usuario</h4>
                        <p>Has las cosas faciles, nosotros tratamos de lograr la mejor experiencia de usuario posible.</p>
                    </div>
                    <div className="col">
                        <CarouselImages />
                    </div>
                    <div class="col">
                    <span className="fh5co-icon"><img className="icons" src={startup}/></span>
                        <h4 className="fh5co-uppercase-sm">Perzonalizable</h4>
                        <p>Nosotros sabemos que todas las empresas son distintas y que sus procesos tambien lo son, nuestra aplicacion base 
                            cubre la mayoria de los casos, pero tambien puedes agregar o quitar funcionalidades.</p>
                      <span className="fh5co-icon"><img className="icons" src={update}/></span>
                        <h4 className="fh5co-uppercase-sm">Actualizada</h4>
                        <p>Nosotros trabajamos en un producto que genera valor para empresas, y para lograrlo incluimos nuevas funcionalidades, y
                            ademas estamos preparados para soportar nuevas versiones de Android.</p>
                 </div>
                </div>
            </div>
            </div>
        )
    }
}
export default OursTools;