import { Component } from "react";
import {  deleteBug, getBug } from "../actions/myBugs";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
// import Form from 'react-bootstrap/Form';
import React from "react";
class BugView extends Component{

    
    componentDidMount() {                                 
        this.props.getBug(this.props.match.params.id);
    }

 
    render(){

        
        const bug = this.props.bug;
        
        return(
            <div>
                <h3>Bug Detail Information</h3>
                <p>Summary: {bug.attributes && bug.attributes.summary} </p>
                <p>Project: {bug.attributes && bug.attributes.project.title} </p>
                <p>Owner: {bug.attributes && bug.attributes.user.username}</p>
                <p>status: {bug.attributes && bug.attributes.status} </p>
                <p>priority: {bug.attributes && bug.attributes.priority} </p> 
                <Link to={{ pathname: `/bugs/${bug.id}/edit`, state: { bug: bug } }} className='btn btn-info'>Edit Bug</Link> <button className="btn btn-danger" type="button" onClick={() => this.props.deleteBug(bug.id)}>Delete</button> 
            </div>);
    }
}


const mapStateToProps = (state) => {
    return { 
        bug: state.bug 
    }
}           

export default connect(mapStateToProps, {getBug, deleteBug} )(BugView); 



////



