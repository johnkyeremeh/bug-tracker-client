// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavagitationContainer from './containers/NavigationContainer';
import BugsContainer from './containers/BugsContainer';

import Login from './components/Login';
import Signup from './components/Signup';
import LOH from './components/LOH';

function App() {
 
  return (
    <Router>
       <NavagitationContainer  />
       <Switch>
          <Route exact path="/" component={LOH} />
          <Route exact path="/signup" component={Login} />
          <Route exact path="/login" component={Signup} />
          <Route path="*" component={NotFound}/>
       </Switch>
    </Router>
  );
}

function NotFound(){
  return (<div>
    404 Not found
    </div>)
}

export default App;
