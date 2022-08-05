import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from "react-redux"

import { updateProjectForm, clearProjectForm } from '../actions/projectForm';
import { postUpdateProject, getProject } from '../actions/myProjects';

class ProjectEdit extends React.Component {
    
  state = {
    title: "",
    description: "",
  }

  componentDidMount() {                                   
    this.props.getProject(this.props.match.params.id).then(() => {
        this.setState({
          title: this.props.project.attributes.title,
          description: this.props.project.attributes.description
        })
    })
}



 
  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value 
      })
  }

  
  handleSubmit = (event) => {
    event.preventDefault()

    const id = this.props.project.id;
    const title = this.state.title ? this.state.title : this.props.project.title;
    const description = this.state.description ? this.state.description : this.props.project.description;

    const project = {id: id, title: title, description: description}

    this.props.postUpdateProject(project)
  }

  

  render(){
    
    return (

      <Form onSubmit={this.handleSubmit}>
        <h3>Edit project</h3>
        <Form.Group className="mb-3" controlId="formBasicSummary"  >
          <Form.Label>title</Form.Label>
          <Form.Control type="text" name="title" placeholder=""  onChange={this.handleChange} value={this.state.title}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicDescription" >
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea"  name="description" placeholder=""  onChange={this.handleChange} value={this.state.description} />
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
     project: state.project,
    }
 }

  

export default connect(mapStatetoProps, {postUpdateProject, updateProjectForm, clearProjectForm, getProject })(ProjectEdit);