import React from 'react';
import { throwStatement } from '@babel/types';
// import Ghost from '../Services/Ghost.js'
//import erpnext1 from '../erpnext1.png';
//import { directive } from '@babel/types';

let posts ={};

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
        console.log(result.posts[1])
        
    })
   }

    render(){
        let limit = 3;
    
        return(
                                    
            <div className ="row">
                <div id="titleblog"className="col-md-10 col-md-offset-2 fh5co-section-heading text-center">
					<h2 className="fh5co-lead to-animate fadeInUp animated">Ultimos Post</h2>
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
                                  
                               
               
            </div>
            
        )
    }
}
export default Datablog;



/* const Post = ( props ) =>(
<li>{props.title}</li>
      
)

class Datablog extends React.Component{
      
    constructor(props){
        super(props)
        this.state = {
            posts:[]
        };
    }
    componentWillMount(){
        fetch('http://52.167.153.171/ghost/api/v2/content/posts/?key=0a51120305d59a5fab4cf8b925')
        .then(response => response.json())
        .then (posts =>{

           posts.results.forEach(post => {
               let data = {
                   title:post.title,
                   image:post.feature_image
                //    url:post.url
               }
               console.log(data);
               this.setState({posts:this.state.posts.concat([data]) })
           })
        })
    } */

   /*  ghost ={};
    
    constructor(props){
        super(props);

        const posts = queryString.parse(this.props.location.search);
        var key = values.key;
        this.state ={
            posts:[],
            title :'',
        }
        
    } */
    
    /* render(){
        console.log(this.state.posts.length)
        if( this.state.posts.length > 0 ){
        return(
            <div>
                {this.state.blogs.map( post => <Post title={post.title} image={post.image}/>)}

            </div>
           
            
        )
        
    }
    return(
        <p>Listando Post</p>
    )
    }
}
export default Datablog; */

 /* <div id="datablog"> 
                <div className="container">
                <div className="card-deck">
                    <div className="card">
                        <img src={erpnext1} className="card-img-top" alt="...">{this.state.posts.map(post => <Post title={post.image}/>)}</img>
                        <div className="card-body">
                        <h5 className="card-title">{this.state.posts.map(post => <Post title={post.title}/>)}</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={erpnext1} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={erpnext1} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>

                </div>
                
            </div> */