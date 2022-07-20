import {Component} from "react"
import ProjectsContainer from "../containers/ProjectsContainer";
import NavigationContainer from "../containers/NavigationContainer";
import { getMyProjects } from "../actions/myProjects";
import { connect } from "react-redux";


class myProjectView extends Component{

  componentDidMount() {
    this.props.getMyProjects()  
  }
  

    render(){
        return(
          <div>
                <NavigationContainer />
                <ProjectsContainer />
          </div>
        );
      }
}

const mapStatetoProps = (state) => {
  return {
    myProjects: state.projects
  }
}

export default connect(mapStatetoProps, {getMyProjects})(myProjectView)