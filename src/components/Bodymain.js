import React from 'react';
import phone1 from '../phone1.png';

class Bodymain extends React.Component{
    render(){
        return(
            <div id="Bodymain" >
                <div id="Textbodymain" className="col-md-4">
                <h2>Nosotros llevamos tu negocio al siguiente nivel!</h2> 
                <p>Quieres agilizar tu equipo de ventas, cobros y ademas organizar tus procesos internos? 2$HOP se conecta con sus sistemas integrados SAP y RMS.</p>
                <a href="#" class="btn btn-primary btn-lg"><i class="icon-android"></i> Android Store</a>
                </div>
                <div className="col-md-6">
                <img src={phone1} alt="2$hop ecommerce platform"/>  
                </div>
            
            </div>
                    
        )
    }
}
export default Bodymain;
