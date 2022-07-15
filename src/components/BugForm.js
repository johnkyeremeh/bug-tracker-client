import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from "react-redux"

import { updateBugForm, clearBugForm } from '../actions/bugForm';
import { addBug, createBug} from '../actions/myBugs';


class BugForm extends React.Component {
    
  state = {
    title: "",
    description: ""
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

    // const handleChange = event => {
    //     const { name, value } = event.target 
    
    //     const updatedBugFormInfo = {
    //         ...bugFormData,
    //         [name]: value
    //     }
    //     updateBugForm(updatedBugFormInfo)
    // }
    
    // const handleSubmit = (event) => {
    //   event.preventDefault()
    //     console.log("btn clicked")
  
    //     createBug(bugFormData)
    // }
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
    bugFormData: state.bugFormData
   }
}

export default connect(mapStatetoProps, {addBug, updateBugForm, createBug, clearBugForm})(BugForm);