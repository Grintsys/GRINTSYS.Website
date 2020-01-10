import  React from 'react';
import axios from 'axios'


const listId ="0e1e7cb8c5";
const api_key = "840e8976633f44889c578542439e7942-us4";


class FormSuscribe extends React.Component{
suscribePush(event){
   }
   constructor(props){
       super(props)
       this.state ={
           FNAME:'',
           LNAME:'',
           email_address:'',
           status:"subscribed"
   
       }
   }

   changeHandler = e =>{
       this.setState({[e.target.name]: e.target.value})
   }
   submitHandler = e =>{
       
       e.preventDefault()
       console.log(this.state)
       
       
    //    let headers = new Headers();
       
       /* headers.append('Content-Type','application/json');
       headers.append('Accept','aplication/json');
       headers.append('Authorization','Basic');
       headers.append('Origin','http://localhost:3000'); */
       
       let axiosConfig={
           
           headers :{
             'authorization':"Basic" + Buffer.from('randomstring:' + api_key).toString('base64'),
             'Accept' : 'application/json',
             'Content-Type': 'aplication/json',
             mode:'no-cors',           }
       };
       try {
           axios.post('https://us4.api.mailchimp.com/3.0/lists/'+ listId +'/members', this.state, axiosConfig)
           console.log("Mailchimp response");
       }
       catch(err) {
        console.log("Mailchimp Error: ", err);
        console.log("Mailchimp Error: ", err["response"]["data"]);
    }
      
   }
      


    render(){
        const{FNAME, LNAME, email_address}=this.state
        return(
        <div id="fh5co-subscribe">
         <div className="container">
            <form onSubmit={this.submitHandler}>
                <div className="form-row">
                    <div class="col frm-control">
                    <input type="text" name="FNAME" className="form-control" value={FNAME} onChange={this.changeHandler} placeholder="Primer nombre"/>
                    </div>
                    <div className="col frm-control">
                    <input type="text" name="LNAME" className="form-control" value={LNAME}  onChange={this.changeHandler} placeholder="Segundo nombre"/>
                    </div>
                    <div className="col frm-control">
                    <input type="email" name="email_address" className="form-control" value={email_address}  onChange={this.changeHandler} placeholder="Email"/>
                    </div>
                    <div className="col frm-control">
                    <button id="buttonsuscribe" type="submit" className="btn btn-primary hvr-shadow" onClick={this.suscribePush.bind(this)}>Sucribirse</button>
                    </div>                 
                </div>
            </form>
         </div>
         </div>
        )
    }
}
export default FormSuscribe;

/* event.preventDefault()
    var fname = this.fname;
    var lname = this.lname;
    var email = this.email;
    // var setValues=(this.state.fname, this.state.lname, this.state.email);
    
    
    fetch  ("https://us4.api.mailchimp.com/3.0/lists/0e1e7cb8c5/members/",{
        
       
      
        headers :{
            "Content-Type": "application/json",
            Authorization:{
                Username: "apikey",
                Password : "1e5f3136b02390cc61a240d224a1604b-us4",
            },
        },
        method: "POST",
        body:fname,lname,email
        

    }).then(function (res) {
        if (res.ok) {
          alert("Perfect! ");
        } else if (res.status === 401) {
          alert("Oops! ");
          console.log(fname)
        }
      }, function (e) {
        alert("Error submitting form!");
        console.log(alert)
      }); */



     /*  fetch('https://us4.api.mailchimp.com/3.0/lists/0e1e7cb8c5/members/',{
    
        method: 'POST',
         
         mode:'no-cors',
         'Content-Type':'application/json',
         
        credentials:'include',
             headers:{
                
                Authorization:'Apikey  840e8976633f44889c578542439e7942-us4',
                 },
           
        headers: headers,
          status:'subscribed',
          
        body:this.state,   
           
       })
       .then(response => response.json())
       .then(json => console.log(json))
       .catch(error => console.log('Authorization failed : ' + error.message));
 */


      /*  axios.post('https://us4.api.mailchimp.com/3.0/lists/0e1e7cb8c5/members/', {
           mode:'no-cors',
           method: "POST",
           username: "apikey",
           password : "1e5f3136b02390cc61a240d224a1604b-us4",
           body:this.state

       })  */
       
   