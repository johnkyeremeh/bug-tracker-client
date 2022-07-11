import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { clearCurrentUser } from '../actions/currentUser';
import {connect} from "react-redux"


import { useHistory } from 'react-router-dom';

// import Logout from './Logout';


import "../Navigation.css"

function Navigation(props) {
  
  const history = useHistory();

  //log user out
  const LogoutUser = (event) => {
    console.log("log out clicked")
    event.preventDefault()
    props.dispatch(clearCurrentUser())
    
    localStorage.removeItem("token")

    // window.location.reload(true);
    history.push("/login")
}

  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">BugTracker App</Navbar.Brand>
        {props.currentUser ? 
        <span className="Nav-linkText" >
          <Nav.Link  className="linkText" href="./login">Project Information</Nav.Link>
         <Nav.Link  className="linkText" href="./login">My Bugs</Nav.Link> 
        </span> 
         : ""}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {props.currentUser ?  
          <Navbar.Text>
              Signed in as: <a href="#login">{props.currentUser.data.attributes.username}</a>
            </Navbar.Text> : "" }
          {props.currentUser ? <Button onClick={LogoutUser} href="" variant="outline-light">Log Out</Button> : 
          <>
         <Nav.Link  className="linkText" href="./login">Sign in</Nav.Link>
          <Button href="/signup"variant="outline-light">Sign Up</Button>
          </>
           }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default connect(null, {clearCurrentUser})(Navigation);