// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import {Router, Switch, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import React from "react";
import {Component} from 'react'
import {connect} from "react-redux"
import { getCurrentUser } from './actions/currentUser';


import Login from './components/Login';
import Signup from './components/Signup';
import LOH from './components/LOH';
import Dashboard from './components/Dashboard';
import BugForm from './components/BugForm';
import BugView from './components/BugView';
import BugEdit from './components/BugEdit';
import myBugsView from './components/myBugsView';
import myProjectView from './components/myProjectView';
import ProjectView from './components/ProjectView';
import ProjectForm from './components/ProjectForm';

export const history = createBrowserHistory();


class App extends Component  {

  componentDidMount(){
      this.props.getCurrentUser()
  }

  render(){

    return (
      <Router history={history}>
      {/* {this.props.currentUser ? "Logged In ON" : "Logged Off"} */}
       <Switch>
          <Route exact path="/mybugs" component={myBugsView} />
          <Route exact path="/bugs/new" component={BugForm} />
          <Route exact path="/bugs/:id" component={BugView} />
          <Route exact path="/bugs/:id/edit" component={BugEdit} />

          <Route exact path="/myprojects" component={myProjectView} />
          <Route exact path="/projects/new" component={ProjectForm} />
          <Route exact path="/projects/:id" component={ProjectView} />
          <Route exact path="/projects/:id/edit" component={myProjectView} />

          <Route exact path="/" component={LOH} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />          
          <Route path="*" component={NotFound}/>
       </Switch>
    </Router>

    );

  }
}

function NotFound(){
  return (<div>
    Not found
    </div>)
}


const mapStatetoProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}


export default connect(mapStatetoProps, {getCurrentUser})(App);
