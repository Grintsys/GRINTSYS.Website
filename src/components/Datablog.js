import React from 'react';
import Popup from "reactjs-popup";
import FormSuscribe from "./FormSuscribe";



class Datablog extends React.Component{
    
    constructor(props){
        super(props)
        this.state = { posts : [] }
    
}
componentWillMount(){
    fetch('http://52.167.153.171/ghost/api/v2/content/posts/?key=0a51120305d59a5fab4cf8b925')
    .then((response) => {
        return response.json()
    })
    .then((result, limit) => {
        this.setState({ posts : result.posts})
        // console.log(result.posts[1])
        
    })
   }

    render(){
            
        return(
                                    
            <div id="contentblog">
                <div id="titleblog"className="col-md-offset-2 fh5co-section-heading text-center">
					<h2 className="to-animate fadeInUp animated">Ultimos Post</h2>
			    </div>
               {this.state.posts.map(post => 
                    <div className="card w-25 to-animate hvr-float">               
                        <img src={post.feature_image} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.created_at}</p>
                        <a href ={post.url}> Ir al blog</a>
                        </div>
                    </div>
                    
                ).slice(0,3)}
                <FormSuscribe/>

            </div>
            
        )
    }
}
export default Datablog;
