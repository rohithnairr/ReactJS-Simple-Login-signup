import React, {Component} from "react";
import "../style/login.css"
import { Container, Row, Col ,Form,Button,Tab,Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "../components/signup"
import Login from "../components/login"
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

class LoginSignup extends Component {
    constructor(props) {
        super(props)
        this.state = {         
        };
        
    }
    
    render() {

    return (

<div className="container-fluid rog ">
<div className="container">
  <div className="row">
    <div className="box1" >
    <Tabs className="" defaultActiveKey="Login" id="uncontrolled-tab-example">
  <Tab eventKey="Login" title="Login">


  <div  >
   <Login/>
</div>
  

  </Tab>
  <Tab eventKey="SignUp" title="SignUp">
    <Registration/>
  </Tab>  
</Tabs>
    </div>
  </div>
</div>
</div>
    )
    }
}
export default LoginSignup