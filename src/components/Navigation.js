import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {connect} from "react-redux"
// import Logout from './Logout';

import { clearCurrentUser } from '../actions/currentUser';

import "../Navigation.css"

function Navigation() {
  
  //log user out
  const LogoutUser = (event) => {
    event.preventDefault()
    localStorage.removeItem("token")

    return dispatch => {
        dispatch(clearCurrentUser)
        console.log("logging user out")
    }
}

  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">BugTracker App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Nav.Link  className="linkText" href="./login">Sign in</Nav.Link>
            <Button href="/signup"variant="outline-light">Sign Up</Button>
            <Button onClick={LogoutUser} href="" variant="outline-light">Log Out</Button>
         

          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default connect(null, clearCurrentUser)(Navigation);