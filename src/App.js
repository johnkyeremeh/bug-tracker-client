// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import {connect} from "react-redux"
import { getCurrentUser } from './actions/currentUser';



import Login from './components/Login';
import Signup from './components/Signup';
import LOH from './components/LOH';
import User from './containers/User';


class App extends Component  {


  // for test
  componentDidMount(){
      this.props.getCurrentUser()
  }

  render(){

    return (
      <Router>
         <Switch>
            <Route exact path="/" component={LOH} />
            <Route
             path="/app/:username"
             render={(routerProps) => <User {...routerProps} username={this.state.username} />}/>
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
