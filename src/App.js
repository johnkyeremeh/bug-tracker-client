// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login';
import Signup from './components/Signup';
import LOH from './components/LOH';
import User from './containers/User';

class App extends Component  {
  
  state = {
    username: "",
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

export default App;
