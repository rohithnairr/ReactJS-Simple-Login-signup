import React, {Component,useState} from "react";
import "../style/login.css"
import { Container, Row, Col ,Form,Button,Tab,Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

function Login() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    async function Signin() {
        let item ={email,password}
        console.warn(item)

       let result= await fetch("https://ik-react-task.herokuapp.com/accounts/login/       ",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })

        result=await result.json()
        
        alert(JSON.stringify(result));
        console.warn("result",result)
        
        
    }

    return(
<div  >
  <p className="text-center head top"> SignUp Here ! </p>

 
    <label>Enter your email id</label>
    <br></br>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="field form-control"/>
  
    <br></br>
    <label>Enter password</label>
    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="field form-control"/>
    <br></br>

  <div className="text-center">
  <Button onClick={Signin} className="Login_button" type="submit">
    Submit
  </Button>
  </div>

</div>

    )
    
}
export default Login  