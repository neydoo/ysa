import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForgotPassword from './components/ForgotPassword';
import Products from './components/Products';
import Login from './components/Login';
import Logout from './components/Logout';
import NewProduct from './components/NewProduct';
import RegisterStaff from './components/RegisterStaff';
import RegisterBusiness from './components/RegisterBusiness';
import Loader from './components/UI/loader'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from './components/UI/Navbar';
import ProtectedRoute  from './components/hoc/ProtectedRoute';
import AdminRoute  from './components/hoc/AdminRoute';

const token = sessionStorage.getItem('token')
class App extends Component {

  state = {
    
  }

  shouldComponentUpdate(){
    return this.props.access !== token
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Loader />
          
          <Route path="/login" component={Login} />
          <Route path='/logout' component={ Logout } />
          <Route path="/forgot-password" component={ForgotPassword} />
          <AdminRoute path="/register-staff" component={RegisterStaff} />
          <ProtectedRoute path="/register-business" component={RegisterBusiness} />
          <ProtectedRoute path="/products" component={Products} />
          <ProtectedRoute path = "/new-product" component={NewProduct} />
        </div>
      </Router>
    );
  }
}

const mSTP = state =>{
  return{ 
    access: state.access
  }
}

export default connect(mSTP,null)(App);

