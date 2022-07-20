import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from "react-redux"

import { updateProjectForm, clearProjectForm } from '../actions/projectForm';
import { addProject, createProject } from '../actions/myProjects';

class ProjectForm extends React.Component {
    
  state = {
    title: "",
    description: "",
  }

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value 
      })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createProject(this.state)
  }

  handleSelect = event => {
    this.setState({
        project: event.target.value 
      })
  }

  render(){
    return (

      <Form onSubmit={this.handleSubmit}>
        <h3>Create your project</h3>
        <Form.Group className="mb-3" controlId="formBasicSummary"  >
          <Form.Label>title</Form.Label>
          <Form.Control type="text" name="title" placeholder=""  onChange={this.handleChange} value={this.state.summary}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicDescription" >
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea"  name="description" placeholder="" onChange={this.handleChange} value={this.state.description} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }


  }
  

export default connect(null, {addProject, createProject, updateProjectForm, clearProjectForm })(ProjectForm);