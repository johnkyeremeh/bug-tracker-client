// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import NavagitationContainer from './containers/NavigationContainer';
import BugsContainer from './containers/BugsContainer';

function App() {
 
  return (
    <div className="App">
      <NavagitationContainer  />
      <BugsContainer/>
    </div>
  );
}

export default App;
