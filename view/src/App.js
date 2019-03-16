import React, { Component } from 'react';
// import Ysa from './components/Ysa';
import ForgotPassword from './components/ForgotPassword';
import Products from './components/Products';
import Login from './components/Login';
import Loader from './components/UI/loader'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  state = {
    
  }
  render() {
    return (
      <Router>  
      <div className="container">
        
        <h6>Hello World</h6>
      
            <Loader />
          
          <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/products" component={Products} />
      </div>
      </Router>
    );
  }
}

export default App;
