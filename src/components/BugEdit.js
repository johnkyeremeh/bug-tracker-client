import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from "react-redux"

import { updateBugForm, clearBugForm } from '../actions/bugForm';
import {postUpdateBug, getBug} from '../actions/myBugs';


class BugEdit extends React.Component {
    
  state = {
    title: "",
    description: ""
  }

  componentDidMount() {                                   
    this.props.getBug(this.props.match.params.id);
}


  handleChange = event => {
    
    this.setState({
        [event.target.name]: event.target.value 
      })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    debugger
    const id = this.props.bug.id;
    const title = this.state.title ? this.state.title : this.props.bug.title;
    const description = this.state.content ? this.state.content : this.props.bug.content;
    const bug = {id: id, title: title, description: description}
    
    this.props.postUpdateBug(bug)
  }

  render(){
    return (
      <Form onSubmit={this.handleSubmit}>
          ADD NEW BUG
        <Form.Group className="mb-3" controlId="formBasicEmail"  >
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" placeholder=""  onChange={this.handleChange} value={this.state.title}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicDescription" >
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea"  name="description" placeholder="" onChange={this.handleChange} value={this.state.description} />
        </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBasicStatus" >
          <Form.Label>Status</Form.Label>
          <Form.Control as="textarea"  name="status" placeholder=""  onChange={this.handleChange} value={this.state.status} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }


  }
  

const mapStatetoProps = (state) => {
   return {
    bugFormData: state.bugFormData,
    bug: state.bug
   }
}

export default connect(mapStatetoProps, { postUpdateBug, updateBugForm, clearBugForm, getBug})(BugEdit);