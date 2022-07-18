import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from "react-redux"

import { updateBugForm, clearBugForm } from '../actions/bugForm';
import { addBug, createBug} from '../actions/myBugs';


class BugForm extends React.Component {
    
  state = {
    summary: "",
    description: "",
    status: "",
    priority: "",
  }


  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value 
      })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createBug(this.state)
  }

  render(){
    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicSummary"  >
          <Form.Label>Summary</Form.Label>
          <Form.Control type="text" name="summary" placeholder=""  onChange={this.handleChange} value={this.state.summary}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicDescription" >
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea"  name="description" placeholder="" onChange={this.handleChange} value={this.state.description} />
        </Form.Group>

          <Form.Group className="mb-3" >
          <Form.Label>Status</Form.Label>
            <Form.Select label="Status" name="status" aria-label="Select the priority" onChange={this.handleChange} value={this.state.status}>
              <option>Click here to select the status of the ticket</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
          </Form.Select>
        </Form.Group>
  
       

        <Form.Group className="mb-3">
        <Form.Label>Priority</Form.Label>
          <Form.Select label="Priority"  name="priority" aria-label="Select the priority" onChange={this.handleChange} value={this.state.priority}>
            <option>Click here to select the priority of the ticket</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Form.Select>
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
    bugFormData: state.bugFormData
   }
}

export default connect(mapStatetoProps, {addBug, updateBugForm, createBug, clearBugForm})(BugForm);