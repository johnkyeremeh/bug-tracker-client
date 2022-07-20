import { Component } from "react";
import MyProjectsList from "../components/myProjects";
import { connect } from "react-redux";
// import { setDisplayedBug, displayBug } from "../actions/cells";
// import BugView from "../components/BugView";
import Button from 'react-bootstrap/Button';

import React from "react";

class ProjectsContainer extends Component{
    
  

    render(){
        return(
            <div>
                <div className="text-center">
                    <Button href="/projects/new" className="float-right">Create a new project</Button>
                </div>
                < MyProjectsList myProjects={this.props.myProjects} />

            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
      myProjects: state.myProjects,
    }
  }
  export default connect(mapStateToProps)(ProjectsContainer)