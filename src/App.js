// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';

import {Component} from 'react'
import {connect} from "react-redux"
import { getCurrentUser } from './actions/currentUser';



import Login from './components/Login';
import Signup from './components/Signup';
import LOH from './components/LOH';

import Dashboard from './components/Dashboard';
import BugForm from './components/BugForm';

const history = createBrowserHistory();


class App extends Component  {


  // for test
  componentDidMount(){
      this.props.getCurrentUser()
  }

  render(){

    return (
      <Router history={history}>
      {this.props.currentUser ? "Logged In ON" : "Logged Off"}
       <Switch>
          <Route exact path="/bugs/new" component={BugForm} />
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
