import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux"
// import { getCurrentUser } from './actions/currentUser';
import { render } from "react-dom";
import { getCurrentUser } from "../actions/currentUser";

class ProtectedRoute extends Component {
  constructor(props) {
    super(props);
}


    render(){

    const { redirectPath, component, ...routeProps} = this.props;
    
    const Component = component;
    const isAuthenticated = localStorage.getItem("isAuthenticated");

      return (
        <Route
          {...routeProps}
          render={props => {
            if (isAuthenticated) return <Component {...props} />;
            return <Redirect to={{ pathname: redirectPath || "/Login" }} />;
          }}
        />
      );
    }
    
   
};

  const mapStateToProps = (state) => {
    return { 
      loggedIn: state.loggedIn, 
      currentUser: state.currentUser
    };
  };


  
  export default connect(mapStateToProps, {getCurrentUser})(ProtectedRoute);