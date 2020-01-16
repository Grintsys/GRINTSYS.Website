import  React from 'react';
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const listId ="7667f6a829";
const api_key = "9c1b72a2ac3463f2998e4131d6264395-us18";
const key = "acd9a8a19d1ab21ba2a68960c";

class FormSuscribe extends React.Component{
    suscribePush(event) {
        try{
            confirmAlert({
                title: 'Confirm to submit',
                message: 'Are you sure to do this.',
                buttons: [
                    {
                        label: 'Yes',
                    },
                    {
                        label: 'No',
                    }
                ],
                closeOnEscape: true,
                closeOnClickOutside: true,
                willUnmount: () => { },
                onClickOutside: () => { },
                onKeypressEscape: () => { }
            });
        }catch{

        }

    }

    //    submit = () => {
    //     confirmAlert({
    //       title: 'Confirm to submit',
    //       message: 'Are you sure to do this.',
    //       buttons: [
    //         {
    //           label: 'Yes',
    //         },
    //         {
    //           label: 'No',
    //         }
    //       ],
    //     closeOnEscape: true,
    //     closeOnClickOutside: true,
    //     willUnmount: () => {},
    //     onClickOutside: () => {},
    //     onKeypressEscape: () => {}
    //     });
    //   };

    constructor(props) {
        debugger;
        super(props)
        this.state = {
            FNAME: '',
            LNAME: '',
            EMAIL: '',
            status: "subscribed"
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {

        e.preventDefault()
        console.log(this.state)

        let axiosConfig = {

            headers: {
                'authorization': `auth ${api_key}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'aplication/json',
                //  mode:'no-cors',           
            }
        };
        try {
            axios.post('https://grintsys.us18.api.mailchimp.com/lists/' + listId + '/members', this.state, axiosConfig)
            console.log("Mailchimp response");
        }
        catch (err) {
            console.log("Mailchimp Error: ", err);
            console.log("Mailchimp Error: ", err["response"]["data"]);
        }

    }
      


    render(){
        const{FNAME, LNAME, EMAIL}=this.state
        return(
            <div id="fh5co-subscribe">
                <div className="container">
                    <form action="https://grintsys.us18.list-manage.com/subscribe/post" method="post">
                        <input type="hidden" name="u" value={key} />
                        <input type="hidden" name="id" value={listId} />
                        <div className="form-row">
                            <div class="col frm-control">
                                <input type="text" name="FNAME" className="form-control" value={FNAME} onChange={this.changeHandler} placeholder="Primer nombre" />
                            </div>
                            <div className="col frm-control">
                                <input type="text" name="LNAME" className="form-control" value={LNAME} onChange={this.changeHandler} placeholder="Segundo nombre" />
                            </div>
                            <div className="col frm-control">
                                <input type="email" name="EMAIL" className="form-control" value={EMAIL} onChange={this.changeHandler} placeholder="Email" />
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