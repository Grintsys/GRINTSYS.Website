import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import cart_summary from '../images/cart_summary.png';
import cart from '../images/cart.png';
import inventory from '../images/inventory.png';
import stats2 from '../images/stats2.png';

class CarouselImages extends React.Component {
render (){
    return(
        <Carousel  autoPlay interval ={1500} width="100%" infiniteLoop={true} showThumbs={false} showIndicators={false} showArrows={false} showStatus={false}>
            <div>
            <img src={cart_summary}/>
            </div>
            <div>
             <img src ={cart}/>
            </div>
            <div>
             <img src ={inventory}/>
            </div>
            <div>
             <img src ={stats2}/>
            </div>
        </Carousel>
    )
    
}

}
 

export default CarouselImages;

