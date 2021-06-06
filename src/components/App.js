import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginSignup from './LoginSignup'
import Registration from './signup'


export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       
          
          <Route path="/">
            <LoginSignup/>
          </Route>
       
      
    </Router>
  );
}


