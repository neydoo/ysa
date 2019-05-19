import React,{Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

const token = sessionStorage.getItem("token")

const ProtectedRoute =({ component: Component, ...rest }) => {
    return (<Route {...rest} render={(props) => 
        token 
          ? <Component {...props} />
        : <Redirect to='/login' />
      } />)
};
  
export default ProtectedRoute;