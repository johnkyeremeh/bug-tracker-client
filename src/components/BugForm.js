import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from "react-redux"

import { updateBugForm, clearBugForm } from '../actions/bugForm';


const handleChange = event => {
    const { name, value } = event.target 

    // const updatedFormInfo = {
    //     ...loginFormData,
    //     [name]: value
    // }
    // updateLoginForm(updatedFormInfo)
}

const handleSubmit = (event) => {
    event.preventDefault()
    // login(loginFormData)
}



function BugForm() {
  return (
    <Form onSubmit={handleSubmit}>
        ADD NEW BUG
      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleChange}>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="" value=""/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription" onChange={handleChange}>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="" />
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicStatus" onChange={handleChange}>
        <Form.Label>Status</Form.Label>
        <Form.Control as="textarea" placeholder="" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

const mapStatetoProps = (state) => {
   return {
    bugFormData: state.bugFormData
   }
}

export default connect(mapStatetoProps, updateBugForm, clearBugForm )(BugForm);