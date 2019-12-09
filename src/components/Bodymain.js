import React from 'react';
import phone1 from '../phone1.png';

class Bodymain extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div id="Textbodymain" className="col">
                    <h2>Nosotros llevamos tu negocio al siguiente nivel!</h2> 
                    <p>Quieres agilizar tu equipo de ventas, cobros y ademas organizar tus procesos internos? 2$HOP se conecta con sus sistemas integrados SAP y RMS.</p>
                    <a href="#" className="btn btn-primary btn-lg"><i className="icon-android"></i> Android Store</a>

                    </div>
                    <div className="col">
                    <img id="bodyimg" src={phone1} alt="2$hop ecommerce platform"/>    

                    </div>
                </div>

            </div>
            
                    
        )
    }
}
export default Bodymain;

